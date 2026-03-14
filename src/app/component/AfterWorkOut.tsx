import { ArrowLeft, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const backgroundImage = '/fitlife-bgimg.png';

export function AfterWorkOut() {
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
            After Workout Plan
          </h1>
          <p className="text-white/80 text-lg">
            Cool down & recovery guidance
          </p>
        </div>

        {/* Cool Down Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-sky-500 to-indigo-500 p-3 rounded-full">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-white text-2xl font-bold">
              Post-Workout Cool Down (10 mins — Every Day)
            </h2>
          </div>

          <p className="text-white/90 mb-6 italic">
            Skipping cool-down leads to muscle tightness, injury, and poor recovery. This is the
            difference between an amateur and someone who actually gets results long-term.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-white/90">
              <thead>
                <tr className="text-sm text-white/70 uppercase tracking-wide">
                  <th className="py-2 pr-4">Stretch</th>
                  <th className="py-2 pr-4">Hold Time</th>
                  <th className="py-2">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="text-white/90">
                <tr className="border-t border-white/10">
                  <td className="py-3 pr-4 align-top font-semibold">Chest Doorway Stretch</td>
                  <td className="py-3 pr-4 align-top">30 sec</td>
                  <td className="py-3">
                    Prevents tight pecs and rounded shoulders (very common with bench pressing)
                  </td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 pr-4 align-top font-semibold">
                    Lat Stretch (Hanging or Side Bend)
                  </td>
                  <td className="py-3 pr-4 align-top">30 sec each</td>
                  <td className="py-3">
                    Releases lat tightness from rows and deadlifts
                  </td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 pr-4 align-top font-semibold">
                    Pigeon Pose (or Figure-4 Stretch)
                  </td>
                  <td className="py-3 pr-4 align-top">45 sec each</td>
                  <td className="py-3">
                    Hip flexor and glute release — essential after leg day
                  </td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 pr-4 align-top font-semibold">Hamstring Stretch (Floor)</td>
                  <td className="py-3 pr-4 align-top">30 sec each</td>
                  <td className="py-3">
                    Prevents lower back tightness from deadlifts and squats
                  </td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 pr-4 align-top font-semibold">
                    Tricep Overhead Stretch
                  </td>
                  <td className="py-3 pr-4 align-top">30 sec each arm</td>
                  <td className="py-3">Elbow joint decompression after pressing</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 pr-4 align-top font-semibold">
                    Shoulder Cross-Body Stretch
                  </td>
                  <td className="py-3 pr-4 align-top">30 sec each</td>
                  <td className="py-3">Rear delt and rotator cuff release</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 pr-4 align-top font-semibold">Child&apos;s Pose</td>
                  <td className="py-3 pr-4 align-top">60 sec</td>
                  <td className="py-3">
                    Full spinal decompression — the best cool-down finisher.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Gut Health Protocol */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-full">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-white text-2xl font-bold">
                Gut Health Protocol — For Your Bloating & Indigestion
              </h2>
            </div>

            <p className="text-white/90 mb-4">
              As someone with digestive sensitivity, following these rules will let you eat enough to build muscle
              without discomfort:
            </p>

            <ul className="list-disc pl-5 text-white/90 space-y-2">
              <li>Eat slowly and chew thoroughly — most bloating comes from swallowing air during fast eating</li>
              <li>Drink warm water with meals (not cold water — cold water slows digestion)</li>
              <li>Ajwain (carom seeds) + warm water after meals — powerful natural digestive aid</li>
              <li>Ginger tea (before bed or after meals) — reduces inflammation in gut lining</li>
              <li>Probiotics daily — 1 small cup of curd (plain, not flavored) with lunch</li>
              <li>
                AVOID: Beans in large quantities, raw cruciferous veggies, carbonated drinks, fried foods,
                spicy food before bed
              </li>
              <li>Split meals into 5 smaller meals rather than 3 large ones — easier on your digestive system while maintaining high calorie intake</li>
            </ul>
          </div>

          {/* Sleep & Recovery */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-violet-500 to-fuchsia-500 p-3 rounded-full">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-white text-2xl font-bold">
                Sleep & Recovery — The Forgotten Anabolic
              </h2>
            </div>

            <p className="text-white/90 mb-4">
              Growth hormone (GH) — the primary muscle-building hormone — is released in large pulses during
              deep sleep stages. Without adequate sleep, your training is 40-60% less effective.
            </p>

            <ul className="list-disc pl-5 text-white/90 space-y-2">
              <li>Target 7.5–9 hours per night — non-negotiable for muscle growth at 25</li>
              <li>Sleep before 11:30 PM — the 10 PM-2 AM window has the highest GH release</li>
              <li>Warm milk with turmeric (haldi doodh) before bed — improves sleep quality, reduces muscle soreness</li>
              <li>No screens 30 minutes before bed — blue light suppresses melatonin by up to 50%</li>
              <li>Keep bedroom cool and dark — optimal GH release happens in cooler temperatures</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
