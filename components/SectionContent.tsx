
import React from 'react';
import { ProposalSection } from '../types';
import GrowthChart from './GrowthChart';

interface SectionContentProps {
  section: ProposalSection;
}

const SectionContent: React.FC<SectionContentProps> = ({ section }) => {
  const renderContent = () => {
    switch (section) {
      case ProposalSection.EXECUTIVE_SUMMARY:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-white">1. Executive Summary: The Vibe Coding Era</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              We are moving beyond manual coding into <strong>Vibe Coding</strong>—where the focus is on vision and workflow. 
              Mohammad Amin Roshan serves as your Ambassador, directing a fleet of AI agents to turn abstract business ideas into production-ready reality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-brand-950 border border-brand-500/20">
                <h3 className="text-brand-400 font-bold mb-2">The Ambassador</h3>
                <p className="text-slate-400 text-sm">Orchestrates complex agent workflows and ensures final output alignment with vision. I am the bridge between "The Idea" and "The Code".</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50">
                <h3 className="text-slate-200 font-bold mb-2">Autonomous Agents</h3>
                <p className="text-slate-400 text-sm">Digital workforce executing parallel tasks across code, media, and marketing on isolated hardware.</p>
              </div>
            </div>
          </div>
        );

      case ProposalSection.CORE_VALUE:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-white">2. Core Value: Conversational-to-Functional (C2F)</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              My primary value is translating your daily, colloquial ideas and conversations into fully functional applications. 
              This isn't just a website; it's a <strong>demonstration of potential</strong>. I handle the heavy lifting of turning "what's in your head" into "code that works."
            </p>
            <div className="flex flex-col items-center justify-center p-8 rounded-3xl bg-slate-900 border border-slate-800 mt-6 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50"></div>
               <div className="flex items-center gap-8 md:gap-16">
                  <div className="text-center">
                    <div className="text-xs font-mono text-slate-500 mb-2 uppercase">Input</div>
                    <div className="text-xl font-medium text-slate-300">"Vibe" / Idea</div>
                  </div>
                  <div className="text-brand-500 animate-pulse">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-mono text-slate-500 mb-2 uppercase">Ambassador Process</div>
                    <div className="text-xl font-bold text-brand-400">Vibe + Logic</div>
                  </div>
                  <div className="text-brand-500 animate-pulse hidden sm:block">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <div className="text-center hidden sm:block">
                    <div className="text-xs font-mono text-slate-500 mb-2 uppercase">Output</div>
                    <div className="text-xl font-bold text-emerald-400">Functional App</div>
                  </div>
               </div>
            </div>
          </div>
        );

      case ProposalSection.SYSTEM_ARCHITECTURE:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-white">3. Operational Pipeline: The Innovation Factory</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              You handle me a task—an idea, a webpage, or a complex app. This is the exact workflow I've designed to ensure infinite scalability and absolute quality:
            </p>
            <div className="relative mt-10">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 hidden md:block z-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
                {[
                  { title: 'Intake', desc: 'I receive the task, idea, or reference material.', icon: '📥' },
                  { title: 'Atomize', desc: 'Breaking vision into tasks for premium bots (Claude, Cursor, Agents).', icon: '🧪' },
                  { title: 'Execute', desc: 'Merging human coding with high-velocity Vibe Coding results.', icon: '⚡' },
                  { title: 'Evaluate', desc: 'The Ambassador tests every line for functionality and UX.', icon: '⚖️' },
                  { title: 'Deliver', desc: 'Handing you a polished, production-ready product.', icon: '📦' }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-500/50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl mb-4">
                      {step.icon}
                    </div>
                    <h4 className="text-brand-400 font-bold mb-2 uppercase tracking-tighter text-sm">{step.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case ProposalSection.HARDWARE_ISOLATION:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-white">4. Hardware Isolation: The Mac Mini Sandbox</h2>
            <div className="p-4 bg-red-950/20 border border-red-500/20 rounded-xl mb-6">
              <p className="text-red-400 text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Security First Paradigm
              </p>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg">
              To ensure 100% data privacy:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <li className="p-6 rounded-2xl glass-card">
                <div className="text-brand-400 font-bold mb-3">Dedicated Infrastructure</div>
                <p className="text-slate-400 text-sm">All agents operate strictly on a Dedicated Mac Mini (Hardware Sandbox).</p>
              </li>
              <li className="p-6 rounded-2xl glass-card border-brand-500/10">
                <div className="text-brand-400 font-bold mb-3">Physical Firewall</div>
                <p className="text-slate-400 text-sm">Agents have no access to your personal devices or sensitive files.</p>
              </li>
              <li className="p-6 rounded-2xl glass-card">
                <div className="text-brand-400 font-bold mb-3">Ambassador Audit</div>
                <p className="text-slate-400 text-sm">The Ambassador (Amin) evaluates all outputs before they reach you.</p>
              </li>
            </ul>
          </div>
        );

      case ProposalSection.GROWTH_CURVE:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-white">5. The Growth Curve: Exponential Efficiency</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Initial stages involve building the framework (high difficulty), but once set, 
              production velocity increases exponentially. Tasks that took weeks will eventually take hours.
            </p>
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 mt-6">
              <GrowthChart />
              <div className="mt-6 flex justify-between items-center text-xs font-mono text-slate-500">
                <span>Day 0: Infrastructure Setup</span>
                <span className="text-brand-500 font-bold">Day 30: Full Automation Velocity</span>
              </div>
            </div>
          </div>
        );

      case ProposalSection.INFINITE_SCALABILITY:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-white">6. Infinite Scalability</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Capable of launching daily projects across sectors:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {[
                { title: 'Forex Strategy Testing', icon: '📈', desc: 'Backtesting complex algorithms with multi-agent simulation.' },
                { title: 'Media Automation', icon: '🎬', desc: 'Automated content pipelines for YouTube and TikTok growth.' },
                { title: 'Dynamic SEO', icon: '🌐', desc: 'Real-time content adaptation and technical performance tuning.' },
                { title: 'Custom AI Agents', icon: '🤖', desc: 'Purpose-built entities for specialized business niches.' },
                { title: 'Data Scraping', icon: '🔍', desc: 'High-volume market intelligence collection and analysis.' },
                { title: 'Rapid Prototyping', icon: '⚡', desc: 'Idea-to-MVP in under 24 hours via Vibe Coding.' }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900 hover:bg-slate-800/80 border border-slate-800 transition-all cursor-default group">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-8 md:p-12 rounded-[2rem] glass-card min-h-[500px] glow-cyan">
      {renderContent()}
    </div>
  );
};

export default SectionContent;
