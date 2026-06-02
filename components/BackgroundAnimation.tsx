'use client';

import React from 'react';

export default function BackgroundAnimation() {
  // Generálunk 10 különböző stílusú liliomot a régi CSS-ed alapján
  const saints = [
    { left: '60px', delay: '0.6s', size: 'w-12 h-12' },
    { left: '60%', delay: '3s', size: 'w-16 h-16' },
    { left: '20%', delay: '2s', size: 'w-12 h-12' },
    { left: '30%', delay: '5s', size: 'w-20 h-20' },
    { left: '40%', delay: '1s', size: 'w-12 h-12' },
    { left: '50%', delay: '7s', size: 'w-12 h-12' },
    { left: '60%', delay: '6s', size: 'w-24 h-24' },
    { left: '70%', delay: '8s', size: 'w-12 h-12' },
    { left: '10%', delay: '10s', size: 'w-20 h-20' },
    { left: '90%', delay: '4s', size: 'w-12 h-12' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
      {saints.map((saint, index) => (
        <span
          key={index}
          className="fixed -top-[120px] bg-cover bg-center animate-fall"
          style={{
            left: saint.left,
            animationDelay: saint.delay,
            backgroundImage: "url('/saints-logo.ico')", // a public mappából olvassa
            width: saint.size.split(' ')[0] === 'w-12' ? '50px' : saint.size.split(' ')[0] === 'w-16' ? '60px' : saint.size.split(' ')[0] === 'w-20' ? '80px' : '100px',
            height: saint.size.split(' ')[0] === 'w-12' ? '50px' : saint.size.split(' ')[0] === 'w-16' ? '60px' : saint.size.split(' ')[0] === 'w-20' ? '80px' : '100px',
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            filter: blur(0);
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0;
            filter: blur(4px);
          }
        }
        .animate-fall {
          animation: fall 10s linear infinite;
        }
      `}</style>
    </div>
  );
}