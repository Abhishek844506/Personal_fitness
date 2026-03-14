import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// TODO: Replace with actual image imports
// import macroImage from 'figma:asset/c234a0d51c3e29c97ff314cc1a78332dd44408c8.png';
const backgroundImage = '/fitlife-bgimg.png';
const macroImage = '';

export function CalorieMacro() {
  const navigate = useNavigate();

  return (
    <div className="size-full flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-orange-900/50" />
      
      {/* Back Button */}
      <button
        onClick={() => navigate('/meal-plan')}
        className="absolute top-8 left-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 hover:border-orange-500/50 transition-all duration-300"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </button>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-6 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Daily Calorie & Macro Target
          </h1>
          <p className="text-white/80 text-lg">
            Track your daily nutritional goals
          </p>
        </div>

        {/* Macro Table Image */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
          <img 
            src={macroImage} 
            alt="Daily Calorie & Macro Target Table"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
