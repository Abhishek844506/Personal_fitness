import { ArrowLeft, Dumbbell, AlertCircle, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// local Day4 Thursday images stored under src/assets/Day4ThursdayImages
import img1 from '../../assets/Day4ThursdayImages/1.jpg';
import img2 from '../../assets/Day4ThursdayImages/2.jpg';
import img3 from '../../assets/Day4ThursdayImages/3.jpg';
import img4 from '../../assets/Day4ThursdayImages/4.jpg';

const floorPressImage = img1;
const overheadPressImage = img2;
const arnoldPressImage = img3;
const tricepDipsImage = img4;

export function Day4Thursday() {
  const navigate = useNavigate();

  const exercises = [
    {
      name: 'Dumbbell Floor Press (Increase Weight)',
      sets: '4',
      reps: '8–10',
      rest: '75 sec',
      image: floorPressImage,
      howTo: "Same as Day 1 but attempt to use slightly more weight or perform 1-2 extra reps. Progressive overload is the only way muscles grow. Log your reps from Day 1 and beat them today. If you did 10 reps with 10kg, aim for 11 reps or use 11kg.",
      mistakes: "Same as Day 1 — arched back, flared elbows, bouncing. Additionally on heavy days: 4) Neglecting slow eccentric — when lifting heavier, there's a tendency to just drop the weight. Still control the lowering phase.",
      proTip: "Rest 75-90 seconds on heavy days. Your muscles need slightly longer recovery when lifting near-maximal loads."
    },
    {
      name: 'Barbell Overhead Press',
      sets: '4',
      reps: '8–10',
      rest: '90 sec',
      image: overheadPressImage,
      howTo: "Use the 5ft barbell with plates. Stand feet shoulder-width, grip slightly wider than shoulders. Bar rests on upper chest/front deltoid. Press straight up, head tilts slightly back as bar passes face. Fully lock out at top. Lower to collarbone level. This is the king of shoulder exercises.",
      mistakes: "1) Pressing in front of face (bar forward path) — inefficient. Bar should travel in slight arc back to over your head. 2) Using lower body momentum (leg drive) — if you're doing this, the weight is too heavy. 3) Not locking out elbows at top — partial ROM, partial gains.",
      proTip: "The overhead press is the best indicator of raw upper body strength. Track this lift closely. If this number goes up, your entire shoulder and tricep development follows."
    },
    {
      name: 'Dumbbell Arnold Press',
      sets: '3',
      reps: '10–12',
      rest: '60 sec',
      image: arnoldPressImage,
      howTo: "Start with dumbbells at shoulder height, palms facing you. As you press up, rotate palms to face forward. At top, fully extend arms. Reverse rotation as you lower. This exercise hits all three heads of the deltoid in one movement — invented by Arnold Schwarzenegger himself.",
      mistakes: "1) Rotating wrists incorrectly — rotation should happen DURING the press, not before. 2) Going too heavy — the rotation makes this harder. Start lighter than your regular overhead press. 3) Rushing the rotation — you lose the benefit of hitting multiple delt heads if you rotate too fast.",
      proTip: "This is one of the most complete shoulder exercises. The rotation also improves shoulder joint mobility and health over time."
    },
    {
      name: 'Tricep Dips (Using Chair/Bench)',
      sets: '3',
      reps: '12–15',
      rest: '60 sec',
      image: tricepDipsImage,
      howTo: "Place hands on edge of chair behind you, fingers facing forward. Legs extended or bent. Lower body by bending elbows until upper arms are parallel to floor. Press back up. Add resistance band across thighs for extra load. Keep elbows close to body (not flaring).",
      mistakes: "1) Elbows flaring wide — shifts load to shoulders, not triceps. Keep elbows pointing straight back. 2) Dipping too low — can cause shoulder impingement. Stop when upper arm is parallel to floor. 3) Shrugging shoulders — keep shoulders down and back, shoulder blades retracted.",
      proTip: "Dips are one of the best compound tricep exercises. Combined with the overhead extension from Day 1, these give you complete tricep development covering all three heads."
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
            DAY 4 — Thursday
          </h1>
          <p className="text-orange-400 text-2xl font-semibold mb-2">
            PUSH (Heavy)
          </p>
          <p className="text-white/80 text-lg">
            Chest + Shoulders + Triceps
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
