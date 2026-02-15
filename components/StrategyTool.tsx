
import React, { useState, useCallback } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

const StrategyTool: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState<null | any[]>(null);
  const [showBalloons, setShowBalloons] = useState(false);

  const generateRoadmap = useCallback(async () => {
    if (!idea.trim()) return;
    
    setLoading(true);
    setRoadmap(null);
    setShowBalloons(false);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are Mohammad Amin Roshan, the Ambassador. Mr. Herness has a new task (idea, app, or page). 
        Create a 5-step roadmap using your specific Innovation Factory workflow:
        1. Intake (Defining vision)
        2. Atomization (Breaking into tasks for bots like Claude/Cursor)
        3. Execution (Merging Vibe Coding results with manual refinement)
        4. Evaluation (The Ambassador tests functionality and UX)
        5. Delivery (Final handoff).
        
        The idea is: "${idea}". 
        Make it technical, strategic, and highlight the use of premium AI tools.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                step: { type: Type.STRING },
                title: { type: Type.STRING },
                description: { type: Type.STRING }
              },
              required: ['step', 'title', 'description']
            }
          }
        }
      });

      const data = JSON.parse(response.text);
      setRoadmap(data);
      setShowBalloons(true);
      setTimeout(() => setShowBalloons(false), 3000);
    } catch (error) {
      console.error('Error generating roadmap:', error);
      // Fallback
      setRoadmap([
        { step: 'Intake', title: 'Task Reception', description: 'Receiving the task/webpage and mapping client expectations.' },
        { step: 'Atomization', title: 'Bot Deployment', description: 'Decomposing the task for premium agents (Claude/Claw/Cursor).' },
        { step: 'Execution', title: 'Hybrid Construction', description: 'Merging vibecoding results with manual architectural coding.' },
        { step: 'Evaluation', title: 'Ambassador Quality Audit', description: 'Personal evaluation of functionality and user flow.' },
        { step: 'Delivery', title: 'Product Launch', description: 'Final handoff of the functional results to the client.' },
      ]);
    } finally {
      setLoading(false);
    }
  }, [idea]);

  return (
    <div className="w-full relative">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Live Innovation Pipeline</h2>
        <p className="text-slate-400 text-center max-w-2xl">
          Enter any task, idea, or reference. Witness the Ambassador's multi-agent system atomize and execute.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="p-1 rounded-2xl bg-gradient-to-r from-brand-500/30 via-cyan-500/30 to-brand-500/30 shadow-2xl">
          <div className="bg-slate-950 rounded-xl p-6">
            <label className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">
              Submit Task / Idea to the Ambassador
            </label>
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="e.g. Build a high-performance landing page for a Forex brand that includes a live calculator..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all outline-none h-32 resize-none text-lg"
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={generateRoadmap}
                disabled={loading || !idea.trim()}
                className={`
                  px-8 py-3 rounded-xl font-bold transition-all transform active:scale-95 flex items-center gap-2
                  ${loading || !idea.trim() 
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                    : 'bg-brand-500 text-white hover:bg-brand-400 hover:-translate-y-1 shadow-lg shadow-brand-500/30'
                  }
                `}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Atomizing Task...
                  </>
                ) : 'Initiate Operational Pipeline'}
              </button>
            </div>
          </div>
        </div>

        {roadmap && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 animate-in fade-in zoom-in duration-700">
            {roadmap.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl glass-card border-slate-700/50 relative overflow-hidden group hover:border-brand-500/30 transition-all ${idx === 3 ? 'bg-brand-500/5' : ''}`}
              >
                {idx === 3 && <div className="absolute top-0 left-0 w-full h-1 bg-brand-500 animate-pulse"></div>}
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-4xl font-black italic">{idx + 1}</span>
                </div>
                <div className="text-brand-400 font-mono text-xs mb-2 uppercase tracking-widest">{item.step}</div>
                <h4 className="text-white font-bold mb-3 text-sm">{item.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        )}

        {showBalloons && (
          <div className="fixed inset-0 pointer-events-none z-[100] flex justify-center items-center">
             <div className="text-brand-400 text-9xl animate-bounce">🚀</div>
             <div className="text-cyan-400 text-7xl animate-bounce delay-100">✨</div>
             <div className="text-white text-8xl animate-bounce delay-200">💎</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StrategyTool;
