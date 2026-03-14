import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// TODO: Replace with actual image import
const backgroundImage = '/fitlife-bgimg.png';

export function Day7Sunday() {
  const navigate = useNavigate();

  return (
    <div className="size-full relative overflow-y-auto">
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-orange-900/50" />
      <button
        onClick={() => navigate('/week-1')}
        className="fixed top-8 left-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 hover:border-orange-500/50 transition-all duration-300"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </button>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-3">
            DAY 7 — Sunday
          </h1>
          <p className="text-blue-400 text-2xl font-semibold mb-2">
            🛌 REST & RECOVERY
          </p>
          <p className="text-white/80 text-lg">
            Mandatory
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <p className="text-white text-xl leading-relaxed mb-6">
              Muscles don't grow in the gym — they grow when you <strong className="text-blue-400">REST</strong>. Sunday is nonnegotiable rest.
            </p>
            <h2 className="text-white text-2xl font-bold mb-6">
              Rest Day Activities (Do These):
            </h2>
            <ul className="space-y-4 text-white/90 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">•</span>
                <span>10-minute full body stretch or yoga (reduces DOMS — delayed onset muscle soreness)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">•</span>
                <span>Walk 20-30 minutes (low intensity, improves blood flow to muscles, speeds recovery)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">•</span>
                <span>Eat your full calories — rest day nutrition is just as important as training day nutrition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">•</span>
                <span>Sleep 7-9 hours — 80% of muscle protein synthesis (growth) happens during deep sleep</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">•</span>
                <span>No alcohol — it directly inhibits protein synthesis and testosterone production</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
