"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ isOpen, onClose }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;  
    
    if (isOpen) {
      document.body.classList.add('no-scroll');

      if (iframe) {
        const gamePaths = [
          '/games/snake/game.html',
          '/games/tetris/game.html',
          '/games/ttfe/game.html',
          '/games/mineSweeper/game.html'
        ];
        const randomGame = Math.floor(Math.random() * gamePaths.length);
        iframe.src = gamePaths[randomGame];

        iframe.onload = () => {
          iframe.focus();
        };
      }
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      if (iframe) {
        iframe.src = '';  
      }
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-black rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-0 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <Image src="/assets/close.svg" alt="Close the game modal" width={24} height={24} />
        </button>
        <iframe
          ref={iframeRef}
          title="Game"
          className="w-[90vw] h-[90vw] max-w-[41rem] max-h-[41rem] sm:w-[40rem] sm:h-[40rem] lg:w-[50rem] lg:h-[50rem] border-none block mx-auto"
        ></iframe>
      </div>
    </div>
  );
};

export default GameModal;
