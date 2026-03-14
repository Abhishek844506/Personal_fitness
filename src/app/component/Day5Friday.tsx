import { ArrowLeft, Dumbbell, AlertCircle, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// local Day5 Friday images stored under src/assets/Day2TuesdayImages (reusing existing assets)
import img1 from '../../assets/Day5FridayImages/1.jpg';
import img2 from '../../assets/Day5FridayImages/2.jpg';
import img3 from '../../assets/Day5FridayImages/3.jpg';

const deadliftImage = img1;
const pulloverImage = img2;
const concentrationCurlImage = img3;

export function Day5Friday() {
  const navigate = useNavigate();

  const exercises = [
    {
      name: 'Barbell Deadlift (Conventional)',
      sets: '4',
      reps: '6–8',
      rest: '120 sec',
      image: deadliftImage,
      howTo: "This is the king of all exercises. Feet hip-width apart, bar over mid-foot. Hinge down, grip bar just outside legs. Chest up, hips down, arms vertical. Take a big breath, brace core hard, then PUSH the floor away (don't think 'pull' — think 'leg press'). Bar travels straight up along shins. Lock hips through at top. Lower with control.",
      mistakes: "1) Rounding lower back — the most dangerous mistake in all of fitness. Learn this with just the bar first. 2) Hips shooting up before bar leaves floor — turns into a back exercise instead of a full body pull. Hips and shoulders should rise together. 3) Bar swinging away from body — bar should drag up your shins (wear long socks). Every inch the bar moves from your body multiplies back strain.",
      proTip: "Treat every deadlift as a max attempt, even light ones. This mindset keeps your technique sharp. 'Fake it till you make it' applies perfectly here — always brace maximally."
    },
    {
      name: 'Dumbbell Pullover',
      sets: '3',
      reps: '12',
      rest: '60 sec',
      image: pulloverImage,
      howTo: "Lie across a bench or on the floor. Hold one dumbbell (7.5–10kg) overhead with both hands. Lower it behind your head in an arc (arms slightly bent), feeling a deep stretch in your lats and chest. Pull back to starting position by contracting lats. This uniquely combines lat and chest stretch.",
      mistakes: "1) Bending elbows too much — makes it a tricep exercise, not a lat/chest stretch. Keep slight, fixed bend in elbows throughout. 2) Going too heavy — you'll lose control at full stretch. Start light and prioritize the stretch. 3) Holding breath at stretched position — breathe steadily throughout.",
      proTip: "The dumbbell pullover is one of the few exercises that effectively stretches the lat under load. Stretching under load (eccentric loading) is scientifically shown to trigger more muscle growth."
    },
    {
      name: 'Concentration Curls',
      sets: '3',
      reps: '12 each arm',
      rest: '60 sec',
      image: concentrationCurlImage,
      howTo: "Sit on a chair, legs spread. Brace elbow against inner thigh. Hold dumbbell, curl to shoulder, squeeze hard at top. Lower slowly. This eliminates ALL cheating — pure bicep isolation. Use 5–7.5kg.",
      mistakes: "1) Swinging upper arm off thigh — loses the isolation benefit. Keep elbow locked against inner thigh. 2) Not reaching full extension at bottom — the stretch at the bottom is where growth happens. Open arm fully. 3) Rushing — these are SLOW reps. 2 seconds up, 3 seconds down.",
      proTip: "Concentration curls are Arnold's favorite for building the bicep peak. The peak of your bicep is visible in all short-sleeve shirts — this makes a huge visual impact."
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
            DAY 5 — Friday
          </h1>
          <p className="text-orange-400 text-2xl font-semibold mb-2">
            PULL (Heavy)
          </p>
          <p className="text-white/80 text-lg">
            Back + Biceps + Rear Delts
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
