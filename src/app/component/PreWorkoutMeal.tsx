import { ArrowLeft, AlertCircle, Zap, Droplet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const backgroundImage = '/fitlife-bgimg.png';

export function PreWorkoutMeal() {
  const navigate = useNavigate();

  return (
    <div className="size-full relative overflow-y-auto">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-orange-900/50" />
      
      {/* Back Button */}
      <button
        onClick={() => navigate('/meal-plan')}
        className="fixed top-8 left-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 hover:border-orange-500/50 transition-all duration-300"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </button>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Pre-Workout Meal
          </h1>
          <p className="text-white/80 text-lg">
            Fuel your body before training
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-orange-500/20 backdrop-blur-md border border-orange-500/40 rounded-2xl p-6 mb-8">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
            <div className="text-white/90">
              <p className="mb-3">
                Since you have bloating and indigestion issues, all foods below are easy to digest, anti-inflammatory,
                and muscle-building.
              </p>
              <p className="font-semibold text-orange-300">
                AVOID raw onions, carbonated drinks, cruciferous veggies (cabbage, broccoli in
                large amounts), fried foods, and excess dairy.
              </p>
            </div>
          </div>
        </div>

        {/* Pre-Workout Meal Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-full">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-white text-2xl font-bold">
              Pre-Workout Meal (60-90 min before training)
            </h2>
          </div>

          <p className="text-white/90 mb-6 italic">
            Goal: Fast energy + muscle protection. Keep it light and easy to digest.
          </p>

          {/* Option A */}
          <div className="mb-6 bg-white/5 rounded-xl p-5 border border-white/10">
            <h3 className="text-orange-400 font-bold text-lg mb-3">
              Option A — Banana + Peanut Butter + Oats:
            </h3>
            <ul className="text-white/90 space-y-2 ml-4">
              <li className="list-disc">
                1 banana (fast carbs) + 1 tbsp peanut butter (healthy fats + protein) + small bowl oats
                (sustained energy)
              </li>
            </ul>
          </div>

          {/* Option B */}
          <div className="mb-6 bg-white/5 rounded-xl p-5 border border-white/10">
            <h3 className="text-orange-400 font-bold text-lg mb-3">
              Option B — Rice + Egg Whites:
            </h3>
            <ul className="text-white/90 space-y-2 ml-4">
              <li className="list-disc">
                1 cup cooked rice + 3-4 egg whites (scrambled, low oil) — easy on stomach, great protein
              </li>
            </ul>
          </div>

          {/* Option C */}
          <div className="mb-6 bg-white/5 rounded-xl p-5 border border-white/10">
            <h3 className="text-orange-400 font-bold text-lg mb-3">
              Option C — Bread + Boiled Eggs:
            </h3>
            <ul className="text-white/90 space-y-2 ml-4">
              <li className="list-disc">
                2 whole wheat bread slices + 2 boiled eggs + a glass of warm water with lemon (aids
                digestion)
              </li>
            </ul>
          </div>

          {/* Hydration */}
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-5 border border-blue-400/30">
            <div className="flex items-center gap-3 mb-2">
              <Droplet className="w-5 h-5 text-blue-400" />
              <h3 className="text-blue-300 font-bold text-lg">
                Hydration:
              </h3>
            </div>
            <p className="text-white/90">
              Drink 300-400ml water 30 mins before workout. Add a pinch of pink salt for electrolytes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
