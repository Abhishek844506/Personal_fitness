import { ArrowLeft, Dumbbell, AlertCircle, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// local Day6 Saturday images stored under src/assets/Day6SaturdayImages
import img1 from '../../assets/Day6SaturdayImages/1.jpg';
import img2 from '../../assets/Day6SaturdayImages/2.jpg';
import img3 from '../../assets/Day6SaturdayImages/3.jpg';

const thrusterImage = img1;
const uprightRowImage = img2;
const twentyOnesImage = img3;

export function Day6Saturday() {
  const navigate = useNavigate();

  const exercises = [
    {
      name: 'Dumbbell Thrusters (Squat + Press)',
      sets: '3',
      reps: '12',
      rest: '60 sec',
      image: thrusterImage,
      howTo: "Hold dumbbells at shoulders. Squat to parallel, then as you stand up, use the momentum to drive dumbbells overhead into a full press. One fluid movement. This works quads, glutes, shoulders, and triceps simultaneously — massive calorie burn and muscle stimulus in one exercise.",
      mistakes: "1) Squatting too shallow — you're not getting leg activation. Squat to at least parallel. 2) Pressing separately from the squat — should be one continuous movement, using leg drive to assist the press. 3) Arching back on the press — see overhead press mistakes.",
      proTip: "Thrusters are metabolically demanding. Your heart rate will spike. This is intentional — it keeps your metabolism elevated for hours after training."
    },
    {
      name: 'Barbell/Dumbbell Upright Row',
      sets: '3',
      reps: '12',
      rest: '60 sec',
      image: uprightRowImage,
      howTo: "Hold barbell or dumbbells with shoulder-width overhand grip. Row straight up to chin level, elbows flaring high above hands. Pause at top. Lower slowly. Works upper traps and medial delts — gives you that 'capped shoulder' look that makes clothes fit better.",
      mistakes: "1) Gripping too narrow — increases shoulder impingement risk dramatically. Keep grip at or slightly wider than shoulder width. 2) Pulling too high — above chin level stresses AC joint. Stop at chin. 3) Leaning back — leads with hips and reduces upper body work.",
      proTip: "Traps connect your neck to your shoulders. Developed traps dramatically improve how shirts and jackets sit on your body — it's one of the first things people notice."
    },
    {
      name: "21s — Barbell or Dumbbell Curl Technique",
      sets: '3',
      reps: '21 (7+7+7)',
      rest: '90 sec',
      image: twentyOnesImage,
      howTo: "A brutal bicep finisher: 7 reps from bottom to halfway up (lower half of ROM), then 7 reps from halfway to top (upper half), then 7 full range reps. Total = 21. This attacks the bicep from all angles and creates intense pump and growth stimulus.",
      mistakes: "1) Using too heavy weight — you'll fail the last 7 reps. Use 30-40% less than your normal curl weight. 2) Rushing through phases — each group of 7 has a purpose. Control them. 3) Dropping weight during set — resist the urge. The burn is the point — push through it.",
      proTip: "The pump you get from 21s is real muscle growth stimulus. The cell swelling (pump) triggers anabolic pathways. This is why Arnold trained for the pump — it wasn't just vanity."
    }
  ];

  return (
    <div className="size-full relative overflow-y-auto">
      <div 
        className="fixed inset-0 bg-cover bg-center"
      />
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-orange-900/75" />
      <button
        onClick={() => navigate('/week-1')}
        className="fixed top-8 left-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 hover:border-orange-500/50 transition-all duration-300"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </button>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-3">
            DAY 6 — Saturday
          </h1>
          <p className="text-orange-400 text-2xl font-semibold mb-2">
            FULL BODY + ARMS
          </p>
          <p className="text-white/80 text-lg">
            Conditioning + Volume
          </p>
        </div>
        <div className="space-y-8">
          {exercises.map((exercise, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8"
            >
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
              <div className="mb-6 rounded-xl overflow-hidden">
                <img 
                  src={exercise.image} 
                  alt={exercise.name}
                  className="w-full h-auto"
                />
              </div>
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
