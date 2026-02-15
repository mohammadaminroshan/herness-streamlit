
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TabNavigation from './components/TabNavigation';
import SectionContent from './components/SectionContent';
import StrategyTool from './components/StrategyTool';
import { ProposalSection } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProposalSection>(ProposalSection.EXECUTIVE_SUMMARY);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-500/30">
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-8">
          {/* Main Proposal Tabs */}
          <div className="space-y-6">
            <div className="flex flex-col items-center text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                Strategic Proposal: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300">Autonomous Agent Infrastructure</span>
              </h1>
              <p className="text-slate-400 text-lg max-w-2xl">
                From "Project Execution" to "Innovation Factory" &mdash; Transitioning into the Vibe Coding Era.
              </p>
            </div>

            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
            
            <div className="mt-8 transition-all duration-300 ease-in-out">
              <SectionContent section={activeTab} />
            </div>
          </div>

          {/* Interactive Strategy Tool - Persistent Call to Action */}
          <div className="mt-12 pt-12 border-t border-slate-800/50">
            <StrategyTool />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
