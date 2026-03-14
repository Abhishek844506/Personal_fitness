import { Zap, Salad, Target, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const backgroundImage = '/fitlife-bgimg.png';

export function MealPlan() {
  const navigate = useNavigate();

  const mealOptions = [
    {
      title: 'Pre-Workout Meal',
      icon: Zap,
      description: 'Fuel your body before training',
      path: '/pre-workout'
    },
    {
      title: 'Post-Workout Meal',
      icon: Salad,
      description: 'Recovery nutrition after exercise',
      path: '/post-workout'
    },
    {
      title: 'Daily Calorie & Macro Target',
      icon: Target,
      description: 'Track your daily nutritional goals',
      path: '/calorie-macro'
    }
  ];

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
        onClick={() => navigate('/dashboard')}
        className="absolute top-8 left-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 hover:border-orange-500/50 transition-all duration-300"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </button>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight mb-3">
            Meal Plan
          </h1>
          <p className="text-white/80 text-lg">
            Choose your nutrition path
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mealOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <button
                key={index}
                onClick={() => navigate(option.path)}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      {option.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {option.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}