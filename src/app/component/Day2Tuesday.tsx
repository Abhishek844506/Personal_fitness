import { ArrowLeft, Dumbbell, AlertCircle, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// local Day2 Tuesday images stored under src/assets/Day2TuesdayImages
import img1 from '../../assets/Day2TuesdayImages/1.jpg';
import img2 from '../../assets/Day2TuesdayImages/2.jpg';
import img3 from '../../assets/Day2TuesdayImages/3.jpg';
import img4 from '../../assets/Day2TuesdayImages/4.jpg';
import img5 from '../../assets/Day2TuesdayImages/5.jpg';

// map imports to the constants used by the component
const barbellRowImage = img1;
const singleArmRowImage = img2;
const bandFacePullsImage = img3;
const hammerCurlsImage = img4;
const reverseCurlImage = img5;

export function Day2Tuesday() {
  const navigate = useNavigate();

  const exercises = [
    {
      name: 'Barbell Bent-Over Row',
      sets: '4',
      reps: '8–10',
      rest: '90 sec',
      image: barbellRowImage,
      howTo: "Stand with feet hip-width apart. Hold barbell with overhand grip (hands shoulder-width). Hinge at hips until torso is at 45°. Row the bar to your lower chest/upper abdomen, squeezing shoulder blades together at top. Lower slowly. Use controlled weight — start with just the barbell.",
      mistakes: "1) Rounding the lower back — the #1 cause of disc herniation in beginners. Hinge from hips with a flat back, chest up. 2) Using biceps to pull instead of back — think 'elbows drive back', not 'hands pull'. 3) Standing too upright — reduces back activation. Maintain 45° torso angle.",
      proTip: "Before pulling, take a deep breath, brace your core like someone's about to punch you. This protects your spine. Exhale at the top of the pull."
    },
    {
      name: 'Dumbbell Single-Arm Row',
      sets: '4',
      reps: '10–12 each side',
      rest: '60 sec',
      image: singleArmRowImage,
      howTo: "Place one hand and knee on a bench or chair. Hold dumbbell in opposite hand. Row elbow straight back, pulling dumbbell to hip level. At top, rotate shoulder back and squeeze lat hard. Lower slowly. Use 7.5–10kg. This is one of the best back exercises available to you.",
      mistakes: "1) Rotating whole torso to lift weight — this is a momentum cheat, not a back exercise. Keep torso stable. 2) Not pulling high enough — elbow should go past your hip/torso, not just to waist. 3) Rushing the eccentric — the lowering phase builds more muscle. Count 3 seconds down.",
      proTip: "Think of your arm as just a hook. Your lat (back muscle) should do the pulling, not your bicep. Mentally focus on your elbow driving toward your hip."
    },
    {
      name: 'Resistance Band Face Pulls',
      sets: '3',
      reps: '20',
      rest: '45 sec',
      image: bandFacePullsImage,
      howTo: "Anchor resistance band at face height (door frame). Stand back, hold band with both hands, palms down. Pull band toward your face, splitting hands apart as they reach face level, elbows high. This is an upper back and rear delt exercise that also improves posture massively.",
      mistakes: "1) Pulling too low — makes this a front delt exercise. Pull toward forehead, elbows HIGH. 2) Going too heavy (high band resistance) — causes form breakdown. Use lighter resistance, higher reps. 3) Skipping this exercise — most people do. This is the single best exercise for fixing bad posture and shoulder health.",
      proTip: "This exercise is non-negotiable for long-term shoulder health. Most pressing injuries come from neglecting rear delts. Do this EVERY training day if possible."
    },
    {
      name: 'Dumbbell Hammer Curls',
      sets: '3',
      reps: '12 each arm',
      rest: '60 sec',
      image: hammerCurlsImage,
      howTo: "Stand with dumbbells at sides, palms facing your body (neutral grip — like holding hammers). Curl one arm at a time or both simultaneously. Keep elbows glued to your sides. At top, squeeze bicep and brachialis hard. Lower slowly. Use 5–7.5kg.",
      mistakes: "1) Swinging elbows forward — reduces bicep tension. Elbows stay back. 2) Body swinging — you're using momentum, not muscles. Lean against a wall if needed. 3) Not supinating (for regular curls) — for hammer curls, maintain neutral grip throughout for brachialis targeting.",
      proTip: "Hammer curls target the brachialis — the muscle UNDER your bicep that pushes the bicep up and makes your arm look thicker from all angles. Don't neglect these."
    },
    {
      name: 'Barbell/Dumbbell Reverse Curl',
      sets: '2',
      reps: '15',
      rest: '45 sec',
      image: reverseCurlImage,
      howTo: "Hold barbell or dumbbells with OVERHAND grip (palms facing down). Curl weight up, keeping elbows at sides. This targets brachioradialis (forearm muscle) and the outer bicep. Use light weight — your forearms will fatigue quickly.",
      mistakes: "1) Using too heavy weight — form completely breaks down. Start with just the barbell or 2.5kg dumbbells. 2) Letting wrists collapse — keep wrists neutral/straight throughout. 3) Skipping forearm training — forearms are visible in t-shirts and short sleeves. Don't neglect them.",
      proTip: "Strong forearms improve your grip strength, which directly improves performance on all pulling exercises like rows and deadlifts."
    }
  ];

  return (
    <div className="size-full relative overflow-y-auto">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
      />
      
      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-orange-900/75" />
      
      {/* Back Button */}
      <button
        onClick={() => navigate('/week-1')}
        className="fixed top-8 left-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 hover:border-orange-500/50 transition-all duration-300"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </button>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-3">
            DAY 2 — Tuesday
          </h1>
          <p className="text-orange-400 text-2xl font-semibold mb-2">
            PULL DAY
          </p>
          <p className="text-white/80 text-lg">
            Back + Biceps
          </p>
        </div>

        {/* Exercises */}
        <div className="space-y-8">
          {exercises.map((exercise, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8"
            >
              {/* Exercise Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-full flex-shrink-0">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-white text-2xl font-bold mb-3">
                    {index + 1}. {exercise.name}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-white/90">
                    <span className="bg-white/10 px-4 py-2 rounded-lg">
                      <strong>Sets:</strong> {exercise.sets}
                    </span>
                    <span className="bg-white/10 px-4 py-2 rounded-lg">
                      <strong>Reps:</strong> {exercise.reps}
                    </span>
                    <span className="bg-white/10 px-4 py-2 rounded-lg">
                      <strong>Rest:</strong> {exercise.rest}
                    </span>
                  </div>
                </div>
              </div>

              {/* Exercise Image */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <img 
                  src={exercise.image} 
                  alt={exercise.name}
                  className="w-full h-auto"
                />
              </div>

              {/* How To Do It */}
              <div className="mb-6 bg-green-500/20 border border-green-400/30 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Dumbbell className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-green-300 font-bold text-lg mb-2">
                      How To Do It Correctly:
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {exercise.howTo}
                    </p>
                  </div>
                </div>
              </div>

              {/* Common Mistakes */}
              <div className="mb-6 bg-red-500/20 border border-red-400/30 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-red-300 font-bold text-lg mb-2">
                      Common Mistakes & Causes:
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {exercise.mistakes}
                    </p>
                  </div>
                </div>
              </div>

              {/* Pro Tip */}
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-blue-300 font-bold text-lg mb-2">
                      Pro Tip:
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {exercise.proTip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}