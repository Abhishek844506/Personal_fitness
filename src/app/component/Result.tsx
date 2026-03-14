import { ArrowLeft, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const backgroundImage = '/fitlife-bgimg.png';

export function Result() {
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
        onClick={() => navigate('/dashboard')}
        className="fixed top-8 left-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 hover:border-orange-500/50 transition-all duration-300"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </button>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Progress Tracking — How to Measure Real Results
          </h1>
          <p className="text-white/80 text-lg">
            Track the right metrics to confirm you're on the right path.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-white/90">
              <thead>
                <tr className="text-sm text-white/70 uppercase tracking-wide">
                  <th className="py-2 pr-4">What to Track</th>
                  <th className="py-2 pr-4">How Often</th>
                  <th className="py-2 pr-4">How to Measure</th>
                  <th className="py-2">What to Expect</th>
                </tr>
              </thead>
              <tbody className="text-white/90">
                <tr className="border-t border-white/10">
                  <td className="py-3 pr-4 align-top font-semibold">Body Weight</td>
                  <td className="py-3 pr-4 align-top">Every Monday</td>
                  <td className="py-3 pr-4 align-top">Same time, morning, after bathroom</td>
                  <td className="py-3">+0.5-1kg/week realistic</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 pr-4 align-top font-semibold">Chest</td>
                  <td className="py-3 pr-4 align-top">Every 2 weeks</td>
                  <td className="py-3 pr-4 align-top">Tape at nipple level, relaxed</td>
                  <td className="py-3">+1-2cm in 30 days</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 pr-4 align-top font-semibold">Arms (flexed)</td>
                  <td className="py-3 pr-4 align-top">Every 2 weeks</td>
                  <td className="py-3 pr-4 align-top">Tape at peak of bicep flex</td>
                  <td className="py-3">+1-2cm in 30 days</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 pr-4 align-top font-semibold">Shoulders</td>
                  <td className="py-3 pr-4 align-top">Every 2 weeks</td>
                  <td className="py-3 pr-4 align-top">Tape at widest point of deltoids</td>
                  <td className="py-3">+2-3cm in 30 days</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 pr-4 align-top font-semibold">Exercise Weights</td>
                  <td className="py-3 pr-4 align-top">Every session</td>
                  <td className="py-3 pr-4 align-top">Log sets, reps, weight used</td>
                  <td className="py-3">+10-20% in 30 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
          <h2 className="text-white text-2xl font-bold mb-4">
            YOUR 30-DAY COMMITMENT
          </h2>
          <p className="text-white/90 mb-4">
            You have everything you need. Equipment. Plan. Nutrition. Knowledge.
            The only variable left is YOU showing up every single day.
          </p>
          <blockquote className="text-white/80 italic border-l-4 border-orange-500 pl-4">
            “The pain you feel today will be the strength you feel tomorrow.”
          </blockquote>
        </div>
      </div>
    </div>
  );
}
