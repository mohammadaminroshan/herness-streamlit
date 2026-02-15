import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// 🔴 کلید جدیدی که ساختی را دقیقاً بین دو کوتیشن پایین قرار بده
const API_KEY = "AIzaSyDU_1U8wp_JpS8Jii7aEzV3y7MXnR1cAtQ"; 
const genAI = new GoogleGenerativeAI(API_KEY);

const StrategyTool = () => {
  const [task, setTask] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [generatedRoadmap, setGeneratedRoadmap] = useState<any[]>([]);

  const callGeminiAPI = async (userInput: string) => {
    // استفاده از مدل فلش برای سرعت بالاتر در دمو
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    
    const prompt = `Act as an AI Ambassador. For the business idea "${userInput}", generate exactly 5 atomic roadmap steps. 
    Return ONLY a JSON array of objects with "title" (very short, max 2 words) and "desc" (1 professional sentence). 
    Format: [{"title": "PHASE NAME", "desc": "actionable description"}]`;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      // تمیز کردن خروجی برای تبدیل به JSON
      const cleanedText = text.replace(/```json|```/g, "");
      return JSON.parse(cleanedText);
    } catch (error) {
      console.error("Gemini API Error:", error);
      return null;
    }
  };

  const handleStart = async () => {
    if (!task) return alert("Please enter an idea first!");
    
    setIsProcessing(true);
    setActiveStep(0);
    setGeneratedRoadmap([]);

    const roadmap = await callGeminiAPI(task);
    
    if (roadmap && roadmap.length === 5) {
      setGeneratedRoadmap(roadmap);
      // انیمیشن پله‌پله روشن شدن باکس‌ها
      for (let i = 1; i <= 5; i++) {
        await new Promise(r => setTimeout(r, 800));
        setActiveStep(i);
      }
    } else {
      alert("Something went wrong with the AI. Check your API Key!");
    }
    setIsProcessing(false);
  };

  return (
    <div className="p-6 bg-[#050a15] rounded-xl border border-blue-900/30">
      <h3 className="text-blue-400 text-xs mb-4 uppercase font-bold tracking-widest">
        Live Agent Orchestration Pipeline
      </h3>
      
      <textarea
        className="w-full h-24 p-4 bg-[#0a1224] text-white rounded-lg border border-blue-900/50 focus:border-blue-500 outline-none transition-all placeholder:text-gray-700"
        placeholder="e.g. Forex Automated Trading, SEO Content Engine, etc."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <div className="flex justify-end mt-4">
        <button
          onClick={handleStart}
          disabled={isProcessing}
          className={`px-8 py-3 rounded-xl font-bold transition-all ${
            isProcessing 
            ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
            : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] text-white'
          }`}
        >
          {isProcessing ? 'Connecting to Ambassador Brain...' : 'Initiate Operational Pipeline'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
        {(generatedRoadmap.length > 0 ? generatedRoadmap : [1,2,3,4,5]).map((step, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl border transition-all duration-700 ${
              index + 1 <= activeStep 
              ? 'bg-blue-900/20 border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.1)]' 
              : 'bg-[#0a1224] border-gray-800 opacity-40'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] text-blue-400 font-mono font-bold">
                {typeof step === 'object' ? step.title : 'PHASE'}
              </span>
              <span className={`text-2xl font-black italic ${index + 1 <= activeStep ? 'text-blue-400' : 'text-gray-900'}`}>
                {index + 1}
              </span>
            </div>
            <p className="text-gray-400 text-[10px] leading-tight min-h-[40px]">
              {typeof step === 'object' ? step.desc : 'Waiting for input...'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyTool;
