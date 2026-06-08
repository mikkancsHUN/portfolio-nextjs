'use client';

import React from 'react';

const SAINTS = [
  { left: '60px', delay: '0.6s', size: 50 },
  { left: '60%', delay: '3s', size: 60 },
  { left: '20%', delay: '2s', size: 50 },
  { left: '30%', delay: '5s', size: 80 },
  { left: '40%', delay: '1s', size: 50 },
  { left: '50%', delay: '7s', size: 50 },
  { left: '60%', delay: '6s', size: 100 },
  { left: '70%', delay: '8s', size: 50 },
  { left: '10%', delay: '10s', size: 80 },
  { left: '90%', delay: '4s', size: 50 },
];

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0">
      {SAINTS.map((saint, index) => (
        <span
          key={index}
          className="fixed -top-[120px] bg-cover bg-center animate-fall"
          style={{
            left: saint.left,
            animationDelay: saint.delay,
            backgroundImage: "url('/saints-logo.ico')",
            width: `${saint.size}px`,
            height: `${saint.size}px`,
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; filter: blur(0); }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; filter: blur(4px); }
        }
        .animate-fall { animation: fall 10s linear infinite; backface-visibility: hidden;}
      `}</style>
    </div>
  );
}