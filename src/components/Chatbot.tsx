"use client";

import { faChevronRight, faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [{ role: "assistant", content: "Hello! How can I help you today?" }]
  );
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://chat.pinkcitymouthfresheners.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_query: input }),
      });

      const data = await response.json();

      if (data.fallback_used && data.whatsapp_link) {
        window.open(data.whatsapp_link, '_blank');
        setMessages([
          ...messages,
          userMessage,
          {
            role: "assistant",
            content: "Redirecting you to WhatsApp for further assistance.",
          },
        ]);
        setIsLoading(false);
        return; // Stop further processing if redirecting
      }

      setMessages([
        ...messages,
        userMessage,
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...messages,
        userMessage,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-32 md:bottom-36 right-4 md:right-10 w-96 min-w-[70%] md:min-w-[30%] max-w-[90%] md:max-w-[80%] h-[50%] bg-white rounded-lg shadow-2xl z-50 flex flex-col border border-pinkcity-dark/20  transform translate-y-[-20px]">
          {/* Header */}
          {/* <div className="bg-pinkcity-dark text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faRobot} className="text-xl" />
              <h3 className="font-semibold">Pink City AI Assistant</h3>
            </div>
            <button
              onClick={toggleChat}
              className="hover:bg-white/20 p-1 rounded"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div> */}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="flex flex-col items-start gap-1 max-w-[80%]">
                    <div className="flex items-center gap-2">
                      <div className="bg-white border border-pinkcity-dark rounded-full p-2 flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={faRobot}
                          className="text-pinkcity-dark text-xs"
                        />
                      </div>
                      <span className="text-xs text-gray-600 font-medium">
                        Assistant
                      </span>
                    </div>
                    <div className="bg-[#F35C81]/10 text-black p-3 rounded-lg rounded-tl-none">
                      {msg.content}
                    </div>
                  </div>
                )}
                {msg.role === "user" && (
                  <div className="bg-pinkcity-dark text-white p-3 rounded-lg rounded-tr-none max-w-[80%]">
                    {msg.content}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex flex-col items-start gap-1 max-w-[80%]">
                  <div className="flex items-center gap-2">
                    <div className="bg-white border border-pinkcity-dark rounded-full p-2 flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faRobot}
                        className="text-pinkcity-dark text-sm"
                      />
                    </div>
                    <span className="text-xs text-gray-600 font-medium">
                      Assistant
                    </span>
                  </div>
                  <div className="bg-[#F35C81]/10 text-gray-800 p-3 rounded-lg rounded-tl-none">
                    <span className="animate-pulse">Typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 rounded-lg focus:outline-none"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-pinkcity-dark text-white px-2 py-2 md:px-4 md:py-3 hover:bg-pinkcity-dark/90 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed rounded-full transition-transform"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <div
        onClick={toggleChat}
        className="fixed bg-white bottom-0 right-0 p-6 py-7 border-[0.5] border-pinkcity-dark rounded-full mb-10 mr-10 z-50 shadow-[0_90px_60px_0_rgba(243,92,129,0.58),0_0_80px_10px_rgba(243,92,129,0.58)] transform translate-y-[-20px] cursor-pointer flex gap-2 hover:scale-110 transition-transform"
      >
        <FontAwesomeIcon
          icon={faRobot}
          className="text-pinkcity-dark text-2xl"
        />
      </div>
    </>
  );
};

export default Chatbot;
