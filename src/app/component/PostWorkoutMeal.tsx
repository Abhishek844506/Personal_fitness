import { ArrowLeft, AlertCircle, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const backgroundImage = '/fitlife-bgimg.png';

export function PostWorkoutMeal() {
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
            Post-Workout Meal
          </h1>
          <p className="text-white/80 text-lg">
            Recovery nutrition after exercise
          </p>
        </div>

        {/* Post-Workout Meal Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-full">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-white text-2xl font-bold">
              Post-Workout Meal (within 30-45 min after training)
            </h2>
          </div>

          <p className="text-white/90 mb-6 italic">
            Goal: Muscle repair + glycogen replenishment. This is your most important meal.
          </p>

          {/* Option A */}
          <div className="mb-6 bg-white/5 rounded-xl p-5 border border-white/10">
            <h3 className="text-orange-400 font-bold text-lg mb-3">
              Option A — Rice + Chicken/Paneer + Curd:
            </h3>
            <ul className="text-white/90 space-y-2 ml-4">
              <li className="list-disc">
                1.5 cups rice + 150g chicken breast or paneer (boiled/grilled) + small bowl curd (probiotics
                help digestion)
              </li>
            </ul>
          </div>

          {/* Option B */}
          <div className="mb-6 bg-white/5 rounded-xl p-5 border border-white/10">
            <h3 className="text-orange-400 font-bold text-lg mb-3">
              Option B — Roti + Dal + Eggs:
            </h3>
            <ul className="text-white/90 space-y-2 ml-4">
              <li className="list-disc">
                2 rotis + 1 bowl moong dal (easy to digest, high protein) + 2 whole eggs — classic muscle
                meal
              </li>
            </ul>
          </div>

          {/* Option C */}
          <div className="mb-6 bg-white/5 rounded-xl p-5 border border-white/10">
            <h3 className="text-orange-400 font-bold text-lg mb-3">
              Option C — Banana Protein Shake (if no appetite):
            </h3>
            <ul className="text-white/90 space-y-2 ml-4">
              <li className="list-disc">
                1 banana + 1 cup milk (warm) + 1 tbsp peanut butter + small pinch of turmeric (anti-
                inflammatory)
              </li>
            </ul>
          </div>

          {/* Bloating Tip */}
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-5 border border-green-400/30">
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle className="w-5 h-5 text-green-400" />
              <h3 className="text-green-300 font-bold text-lg">
                Bloating Tip:
              </h3>
            </div>
            <p className="text-white/90">
              Avoid excess salt, carbonated drinks, and eating too fast post-workout.
              Chew slowly. Add ajwain (carom seeds) to meals — natural remedy for indigestion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
