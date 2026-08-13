import React from 'react';

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-50 bg-grid-pattern">
      <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] rounded-full bg-primary-100/40 blur-[120px] animate-blob"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-100/40 blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] rounded-full bg-purple-100/30 blur-[100px] animate-blob" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default BackgroundEffects;
