'use client';
import SectionHeading from "@/components/SectionHeading";
import React, { useState, useEffect, TouchEvent, useRef } from "react";
import VideoCard from "@/components/VideoCard";
import videosData from "@/data/socialVideos.json";
import { useMobile } from "@/components/MobileProvider";

const SocialMediaSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [startBounce, setStartBounce] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cards, setCards] = useState(videosData.videos);
  const isMobile = useMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const playingVideosRef = useRef<Set<HTMLVideoElement>>(new Set());

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const pauseAllVideos = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.querySelectorAll('video').forEach((video) => {
        video.pause();
        video.currentTime = 0;
      });
    }
  };

  const onTouchStartFunc = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMoveFunc = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndFunc = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;

    if (isSwipe) {
      // Pause all videos before reordering cards
      pauseAllVideos();

      const newCards = [...cards];
      const swipedCard = newCards.pop();
      if (swipedCard) {
        newCards.unshift(swipedCard);
        setCards(newCards);
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsExpanded(true);
          // Resume videos that were playing before leaving viewport
          playingVideosRef.current.forEach((video) => {
            video.play();
          });
        } else {
          setIsExpanded(false);
          setStartBounce(false);
          // Pause all playing videos and remember them
          if (cardsContainerRef.current) {
            playingVideosRef.current.clear();
            cardsContainerRef.current.querySelectorAll('video').forEach((video) => {
              if (!video.paused) {
                playingVideosRef.current.add(video);
                video.pause();
              }
            });
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isExpanded && !isMobile) {
      const timer = setTimeout(() => {
        setStartBounce(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isExpanded, isMobile]);

  useEffect(() => {
    setCards(videosData.videos);
  }, [isMobile]);

  return (
    <div ref={sectionRef} className={`flex flex-col items-center justify-center ${isMobile ? 'py-8 p-8' : 'p-20 pb-0'}`}>
      <SectionHeading title="Social Media" />
      <div
        ref={cardsContainerRef}
        className={`w-full relative h-screen ${isMobile ? 'mt-50 -mb-50' : '-mt-30'}`}
        onTouchStart={isMobile ? onTouchStartFunc : undefined}
        onTouchMove={isMobile ? onTouchMoveFunc : undefined}
        onTouchEnd={isMobile ? onTouchEndFunc : undefined}
      >
        {cards.map((video, index) => {
          const rotation = (index - Math.floor(videosData.videos.length / 2)) * 5;
          const cardWidthPercentage = isMobile ? 100 : 18;
          const gapPercentage = isMobile ? 0 : (100 - videosData.videos.length * cardWidthPercentage) / (videosData.videos.length + 1);
          const leftPosition = isMobile ? 50 : gapPercentage + index * (cardWidthPercentage + gapPercentage);

          const isBounceUp = index % 2 === 0;
          const isHovered = hoveredIndex === index;

          const bounceClass = startBounce && !isHovered && !isMobile ? (isBounceUp ? "bounce-up" : "bounce-down") : "";

          let transform;
          if (isHovered && !isMobile) {
            transform = "translateY(-50%)";
          } else if (isExpanded && !isMobile) {
            transform = `translateY(${isBounceUp ? -40 : -20}%)`;
          } else {
            transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
          }

          const left = (isExpanded && !isMobile) ? `${leftPosition}%` : "50%";

          let zIndex = index < Math.ceil(videosData.videos.length / 2) ? index : videosData.videos.length - 1 - index;
          if (isHovered && !isMobile) {
            zIndex = 10;
          }

          return (
            <div
              key={video.src}
              className={`${isMobile ? 'w-[70%]' : 'w-[18%]'} aspect-[9/16] absolute transition-all ease-in-out duration-1000 ${bounceClass}`}
              style={{
                top: isMobile ? `${10 + index * 10}%` : "50%",
                left: left,
                transform: transform,
                zIndex: zIndex,
              }}
            >
              <VideoCard
                src={video.src}
                onMouseEnter={!isMobile ? () => setHoveredIndex(index) : undefined}
                onMouseLeave={!isMobile ? () => setHoveredIndex(null) : undefined}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMediaSection;
