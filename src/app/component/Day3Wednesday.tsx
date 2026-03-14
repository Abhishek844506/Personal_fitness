import { ArrowLeft, Dumbbell, AlertCircle, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// local Day3 Wednesday images stored under src/assets/Day3WednesdayImages
import img1 from '../../assets/Day3WednesdayImages/1.jpg';
import img2 from '../../assets/Day3WednesdayImages/2.jpg';
import img3 from '../../assets/Day3WednesdayImages/3.jpg';
import img4 from '../../assets/Day3WednesdayImages/4.jpg';
import img5 from '../../assets/Day3WednesdayImages/5.jpg';

// map imports to the constants used by the component
const gobletSquatImage = img1;
const rdlImage = img2;
const lungesImage = img3;
const gluteKickbacksImage = img4;
const plankDeadBugImage = img5;

export function Day3Wednesday() {
  const navigate = useNavigate();

  const exercises = [
    {
      name: 'Barbell/Dumbbell Goblet Squat',
      sets: '4',
      reps: '12–15',
      rest: '90 sec',
      image: gobletSquatImage,
      howTo: "Hold one dumbbell (10–12kg) vertically at chest level with both hands. Stand feet shoulder-width, toes slightly out. Squat down until thighs are parallel to floor (or slightly below). Keep chest up, knees track over toes, heels stay on floor. Drive through heels to stand. This is the safest squat variation for home training.",
      mistakes: "1) Knees caving inward (valgus collapse) — weak glutes and poor hip mobility. Push knees out actively throughout movement. 2) Heels rising — tight calves/ankles. Place small plate under heels as a temporary fix. 3) Rounding lower back at bottom — often due to insufficient depth or mobility. Work on hip flexor stretching daily.",
      proTip: "Record yourself from the side. Your shin angle and torso angle should be roughly parallel at the bottom. This is a quick form check that catches most squat errors."
    },
    {
      name: 'Dumbbell Romanian Deadlift (RDL)',
      sets: '3',
      reps: '12',
      rest: '75 sec',
      image: rdlImage,
      howTo: "Hold dumbbells in front of thighs, stand tall. Hinge at hips, sending them backward as you lower the weights down your legs (they should drag along your shins). Feel a deep hamstring stretch. At the bottom (when hips are fully extended back), squeeze glutes and drive hips forward to stand. Do NOT bend knees excessively — this is a hip hinge, not a squat.",
      mistakes: "1) Rounding back — this is a back injury, not a hamstring exercise. Keep chest up, slight arch in lower back. 2) Bending knees too much — converts to a squat. Keep legs relatively straight (slight knee bend only). 3) Looking down — keep neck neutral by looking about 2 meters in front of you.",
      proTip: "Before each rep, take a breath in at the top, brace core, then hinge. Exhale at the top. This 'valsalva maneuver' protects your spine and helps you lift more."
    },
    {
      name: 'Dumbbell Lunges (Walking or Stationary)',
      sets: '3',
      reps: '10 each leg',
      rest: '75 sec',
      image: lungesImage,
      howTo: "Hold dumbbells at sides (5–7.5kg each). Step forward into a lunge, dropping back knee toward floor (don't let it slam). Front shin should be vertical. Push through front heel to return. For stationary: do all reps on one leg before switching. Walking lunges cover distance.",
      mistakes: "1) Front knee going past toes — places excessive stress on knee joint. Step far enough forward. 2) Leaning torso forward — reduces quad activation. Stay tall and upright. 3) Back knee slamming floor — uncontrolled. Lower with control, 1-2cm from floor.",
      proTip: "Lunges have a strong balance component. If you wobble, do them near a wall for support initially. Balance will improve within 2 weeks."
    },
    {
      name: 'Resistance Band Glute Kickbacks',
      sets: '3',
      reps: '20 each leg',
      rest: '45 sec',
      image: gluteKickbacksImage,
      howTo: "Loop band around ankles. Stand holding a wall or chair. Kick one leg back (hip extension), squeezing glute hard at top. Keep leg straight. Hold contraction for 1 second. This isolates glutes without lower back loading — perfect for growing the posterior chain.",
      mistakes: "1) Bending the kicking knee — reduces glute isolation. Keep leg straight. 2) Rotating hips — you're compensating with hip flexors. Keep hips squared to wall. 3) Going too fast — band kickbacks are not meant to be rushed. Slow and controlled with a squeeze at top.",
      proTip: "Glutes are the largest muscle in your body. Developed glutes transform how clothes fit on your body — trouser fit, overall physique shape."
    },
    {
      name: 'Plank + Dead Bug Superset',
      sets: '3 rounds',
      reps: 'Plank 45 sec + Dead Bug 10 reps',
      rest: '60 sec',
      image: plankDeadBugImage,
      howTo: "PLANK: Forearms on floor, body straight from head to heels. Squeeze abs, glutes, and quads simultaneously. Do not let hips rise or sag. DEAD BUG: Lie on back, arms pointing to ceiling, knees bent 90°. Lower opposite arm and leg toward floor without back lifting. Return. Alternate sides.",
      mistakes: "PLANK: 1) Hips too high (downward dog shape) — not a core exercise anymore. 2) Holding breath — exhale steadily through the hold. DEAD BUG: 1) Lower back lifting off floor — you've lost core control. Reduce range of motion. 2) Moving too fast — core stability exercises require SLOW controlled movement.",
      proTip: "Dead bug is arguably better than crunches for core strength. It teaches anti-extension — the core's primary function. This protects your spine in all other exercises."
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
            DAY 3 — Wednesday
          </h1>
          <p className="text-orange-400 text-2xl font-semibold mb-2">
            LEGS + CORE
          </p>
          <p className="text-white/80 text-lg">
            Quads + Hamstrings + Glutes + Abs
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
