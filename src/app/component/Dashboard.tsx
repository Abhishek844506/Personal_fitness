import { User, UtensilsCrossed, Dumbbell, Calendar, Heart, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const backgroundImage = '/fitlife-bgimg.png';

export function Dashboard() {
  const navigate = useNavigate();

  const menuOptions = [
    {
      title: 'Your Profile',
      icon: User,
      description: 'Manage your personal information',
      path: '/profile'
    },
    {
      title: 'Meal Plan',
      icon: UtensilsCrossed,
      description: 'Nutrition and diet guidance',
      path: '/meal-plan'
    },
    {
      title: 'Warm-Up & Week Plan',
      icon: Dumbbell,
      description: 'Week 1 exercises and routines',
      path: '/week-1'
    },
    {
      title: 'Week 2–4',
      icon: Calendar,
      description: 'Advanced workout programs',
      path: '/week-2-4'
    },
    {
      title: 'After Workout Plan',
      icon: Heart,
      description: 'Cool down and recovery',
      path: '/after-workout'
    },
    {
      title: 'Result',
      icon: Trophy,
      description: 'Track your progress',
      path: '/result'
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
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight mb-3">
            FitLife
          </h1>
          <p className="text-white/80 text-lg">
            Choose your path to fitness
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuOptions.map((option, index) => {
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