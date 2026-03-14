import { ArrowLeft, Dumbbell, AlertCircle, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// local Day1 Monday images stored under src/assets/Day1MondayImages
import img1 from '../../assets/Day1MondayImages/1.jpg';
import img2 from '../../assets/Day1MondayImages/2.jpg';
import img3 from '../../assets/Day1MondayImages/3.jpg';
import img4 from '../../assets/Day1MondayImages/4.jpg';
import img5 from '../../assets/Day1MondayImages/5.jpg';

// map imports to the constants used by the component
const floorPressImage = img1;
const overheadPressImage = img2;
const lateralRaisesImage = img3;
const tricepExtensionImage = img4;
// use one of the existing images for push‑ups; change as needed
const pushUpsImage = img5;

export function Day1Monday() {
  const navigate = useNavigate();

  const exercises = [
    {
      name: 'Dumbbell Bench Press (Floor Press)',
      sets: '4',
      reps: '10–12',
      rest: '60 sec',
      image: floorPressImage,
      howTo: "Lie flat on the floor, hold dumbbells at chest level (elbows at 45°). Press up explosively, lower slowly in 3 seconds. Touch elbows to floor lightly — this is your range of motion. Keep core braced throughout. Use 5kg dumbbells (10kg total load) as starting weight.",
      mistakes: "1) Flaring elbows out 90° — puts massive strain on shoulder joint, causes rotator cuff tears. Keep elbows at 45°. 2) Bouncing weight off chest — removes tension from pecs. Lower with control. 3) Not locking out at top — you're leaving gains behind. Fully extend arms at top.",
      proTip: "Squeeze your chest at the top like you're trying to crush a pencil between your pecs. This activates more muscle fibers."
    },
    {
      name: 'Dumbbell Overhead Press (Seated or Standing)',
      sets: '3',
      reps: '10–12',
      rest: '60 sec',
      image: overheadPressImage,
      howTo: "Hold dumbbells at shoulder height, palms facing forward. Press straight up overhead until arms are fully extended. Lower slowly back to shoulder level. Keep your core braced and avoid arching your lower back. Start with 5kg dumbbells.",
      mistakes: "1) Arching lower back — indicates core is weak or weight is too heavy. This causes lumbar injury. Brace abs hard. 2) Pressing forward instead of straight up — puts more stress on the front delt and less on mid-delt (the muscle that makes shoulders look wide). 3) Not going full range of motion — missing the top stretch.",
      proTip: "Tilt head slightly back as the barbell/dumbbell passes your face so you maintain a vertical bar path. Don't lean back excessively."
    },
    {
      name: 'Dumbbell Lateral Raises',
      sets: '3',
      reps: '15–20',
      rest: '45 sec',
      image: lateralRaisesImage,
      howTo: "Stand with dumbbells at sides (1kg to start — yes, this is harder than it looks). Raise arms to sides until parallel with floor, with a slight bend in elbows. Lead with your pinkies (externally rotate). Lower slowly in 3 seconds. DO NOT swing your body.",
      mistakes: "1) Using momentum and swinging — the most common mistake. This works your traps, not your delts. Slow down. 2) Going too heavy — lateral raises are an isolation move. Even 1–2kg is challenging when done correctly. 3) Shrugging shoulders — also activates traps. Keep shoulders down and packed.",
      proTip: "Imagine you're pouring water from a jug at the top of the movement (pinky slightly higher than thumb). This targets the side delt perfectly."
    },
    {
      name: 'Barbell/Dumbbell Tricep Overhead Extension',
      sets: '3',
      reps: '12',
      rest: '60 sec',
      image: tricepExtensionImage,
      howTo: "Stand or sit. Hold one dumbbell (5kg) with both hands overhead, arms extended. Lower the weight behind your head by bending elbows, keeping elbows pointing forward and close to ears. Extend back to start. This is the best exercise for tricep long head (which makes arms look bigger from all angles).",
      mistakes: "1) Flaring elbows out — reduces tricep isolation. Keep elbows locked forward. 2) Moving upper arms — only forearms should move. 3) Going too fast — you lose the stretch, which is where growth happens in this exercise. Hold the stretched position for 1 second.",
      proTip: "The tricep makes up 2/3 of your upper arm. Prioritize this! The overhead position gives you the full stretch that short-head exercises miss."
    },
    {
      name: 'Resistance Band Push-Ups (or Regular Push-Ups)',
      sets: '3',
      reps: 'Max reps',
      rest: '60 sec',
      image: pushUpsImage,
      howTo: "Loop resistance band across your back, hold ends in hands. Get into push-up position. Lower chest to floor (3-second count), then press up powerfully. The band adds resistance at the top (hardest part). If too hard, do regular push-ups. Keep body in straight plank line throughout.",
      mistakes: "1) Sagging hips — lower back injury waiting to happen. Keep core and glutes squeezed. 2) Partial range of motion — chest must touch or nearly touch floor for full pec activation. 3) Flared elbows — same as bench press, protect your shoulders. Elbows at 45°.",
      proTip: "At the top of each push-up, actively push the floor away and protract your shoulder blades (round shoulders forward). This activates the serratus anterior and gives you that 'carved chest' look."
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
            DAY 1 — Monday
          </h1>
          <p className="text-orange-400 text-2xl font-semibold mb-2">
            PUSH DAY
          </p>
          <p className="text-white/80 text-lg">
            Chest + Shoulders + Triceps
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
