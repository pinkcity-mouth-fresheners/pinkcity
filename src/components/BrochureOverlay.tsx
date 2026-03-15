'use client';
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faXmark } from '@fortawesome/free-solid-svg-icons';
import { mediaUrl } from '@/lib/media';

interface BrochureOverlayProps {
  onClose: () => void;
}

const BrochureOverlay: React.FC<BrochureOverlayProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="w-3/4 h-3/4 rounded-xl bg-white overflow-auto flex flex-col relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-800 text-white w-10 h-10 z-50 rounded-full flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <a
          href="/brochure.pdf"
          download="Pink City Mouth Fresheners Brochure"
          className="absolute top-20 right-4 bg-gray-800 text-white w-10 h-10 z-50 rounded-full flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faDownload} />
        </a>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl={mediaUrl('/brochure.pdf')} />
        </Worker>
      </div>
    </div>
  );
};

export default BrochureOverlay;
