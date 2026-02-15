
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/50 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-slate-300 font-bold tracking-tight">Mohammad Amin Roshan</span>
          <span className="text-slate-500 text-sm font-mono tracking-widest uppercase">The Ambassador</span>
        </div>
        
        <div className="text-slate-500 text-xs text-center md:text-right">
          <p>© 2024 Strategic Proposal Dashboard</p>
          <p className="mt-1">Prepared exclusively for Mr. Herness | Hardware Sandbox Version 1.0.4</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
