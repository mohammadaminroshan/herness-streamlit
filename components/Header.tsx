
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full glass-card border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center shadow-lg shadow-brand-500/20">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="font-mono text-sm tracking-wider uppercase text-slate-200">
              The Ambassador System
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-slate-400 font-medium">Mac Mini Sandbox: Online</span>
            </div>
            <div className="text-sm font-medium text-slate-300 border-l border-slate-800 pl-6">
              Client: <span className="text-brand-400">Mr. Herness</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
