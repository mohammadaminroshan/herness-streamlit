import React, { useState } from 'react';

const StrategyTool = () => {
  const [task, setTask] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [roadmap, setRoadmap] = useState<any[]>([]);

  // این تابع مثل یک هوش مصنوعی کوچک عمل می‌کند
  const simulateAI = (input: string) => {
    const text = input.toUpperCase();
    return [
      { title: `ANALYZING ${text}`, desc: `Orchestrating agents to map out the best strategy for ${input}.` },
      { title: "ATOMIC BREAKDOWN", desc: `Decomposing ${input} into high-performance sub-tasks.` },
      { title: "SANDBOX BUILD", desc: "Executing the primary code structure in the Mac Mini environment." },
      { title: "VIBE CHECK", desc: "The Ambassador (Amin) is auditing the output for premium quality." },
      { title: "SYSTEM READY", desc: `The ${input} infrastructure is now fully functional and deployed.` }
    ];
  };

  const handleStart = () => {
    if (!task) return alert("Please enter an idea!");
    setIsProcessing(true);
    setActiveStep(0);
    setRoadmap(simulateAI(task));

    let current = 0;
    const interval = setInterval(() => {
      current++;
      setActiveStep(current);
      if (current >= 5) {
        clearInterval(interval);
        setIsProcessing(false);
      }
    }, 900);
  };

  return (
    <div className="p-6 bg-[#050a15] rounded-xl border border-blue-900/30 shadow-2xl">
      <h3 className="text-cyan-400 text-[10px] mb-4 uppercase font-black tracking-widest">Live Ambassador Orchestration</h3>
      <textarea
        className="w-full h-24 p-4 bg-[#0a1224] text-white rounded-lg border border-blue-900/50 outline-none focus:border-cyan-400"
        placeholder="Enter your vision..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleStart} disabled={isProcessing} className="mt-4 w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-bold">
        {isProcessing ? 'Generating Atomic Roadmap...' : 'Initiate Operational Pipeline'}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-8">
        {(roadmap.length > 0 ? roadmap : [1,2,3,4,5]).map((step, index) => (
          <div key={index} className={`p-3 rounded-lg border transition-all duration-700 ${index + 1 <= activeStep ? 'border-cyan-400 bg-cyan-900/20 shadow-[0_0_10px_rgba(6,182,212,0.2)]' : 'border-gray-800 opacity-20'}`}>
            <div className="text-cyan-400 font-bold text-[9px] mb-1">{typeof step === 'object' ? step.title : 'PHASE'}</div>
            <p className="text-gray-300 text-[10px] leading-tight">{typeof step === 'object' ? step.desc : 'Waiting...'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyTool;
