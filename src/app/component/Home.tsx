import { useNavigate } from 'react-router-dom';
const backgroundImage = '/fitlife-bgimg.png';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="size-full flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-orange-900/50" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-6">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-white text-7xl md:text-8xl font-bold tracking-tight">
            FitLife
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light">
            Transform Your Body, Elevate Your Life
          </p>
        </div>
        
        <button 
          onClick={() => navigate('/dashboard')}
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-20 py-6 rounded-full text-2xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-orange-500/50"
        >
          Let's Start
        </button>
      </div>
    </div>
  );
}
