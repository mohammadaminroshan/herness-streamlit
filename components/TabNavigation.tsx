
import React from 'react';
import { ProposalSection } from '../types';

interface TabNavigationProps {
  activeTab: ProposalSection;
  onTabChange: (tab: ProposalSection) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const sections = Object.values(ProposalSection);

  return (
    <div className="flex flex-wrap justify-center gap-2 p-1 bg-slate-900/50 border border-slate-800/50 rounded-2xl max-w-4xl mx-auto">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => onTabChange(section)}
          className={`
            px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
            ${activeTab === section 
              ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30 scale-105' 
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }
          `}
        >
          {section}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
