import { ArrowLeft, Zap, Dumbbell, Repeat, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Week2To4Plan() {
  const navigate = useNavigate();

  const progressionBlueprint = [
    {
      week: "Week 2 (Days 8–14)",
      changes:
        "Add 1–2 reps to each exercise. If you reach the top of the rep range (e.g., 12 reps), add 1–2.5kg next session. Increase rest on compound lifts to 90 seconds.",
      focus: "Volume increase + First weight progression",
    },
    {
      week: "Week 3 (Days 15–21)",
      changes:
        "Add one extra working set to all compound exercises (bench press, rows, squats, deadlift go from 4 sets to 5 sets). Keep accessory exercises at 3 sets. May feel fatigued — this is normal.",
      focus: "Maximum volume overload — hardest week",
    },
    {
      week: "Week 4 (Days 22–28)",
      changes:
        "Deload: Reduce weight by 10–15%, reduce sets by 1. This is intentional recovery that allows supercompensation — you'll come back stronger. Keep reps the same.",
      focus: "Strategic deload for long-term growth",
    },
  ];

  const progressionTracker = [
    {
      exercise: "DB Floor Press",
      week1: "4×10 @ 10kg",
      week2: "4×12 @ 10kg",
      week3: "5×10 @ 11kg",
      week4: "4×10 @ 10kg",
    },
    {
      exercise: "Overhead Press",
      week1: "3×10 @ 5kg",
      week2: "3×12 @ 5kg",
      week3: "4×10 @ 6kg",
      week4: "3×10 @ 5kg",
    },
    {
      exercise: "Bent Over Row",
      week1: "4×10 @ Bar",
      week2: "4×12 @ Bar+2.5",
      week3: "5×10 @ Bar+5",
      week4: "4×10 @ Bar+2.5",
    },
    {
      exercise: "Goblet Squat",
      week1: "4×12 @ 10kg",
      week2: "4×15 @ 10kg",
      week3: "5×12 @ 12kg",
      week4: "4×12 @ 10kg",
    },
    {
      exercise: "RDL",
      week1: "3×12 @ 10kg",
      week2: "3×12 @ 11kg",
      week3: "4×12 @ 12kg",
      week4: "3×12 @ 10kg",
    },
    {
      exercise: "Deadlift",
      week1: "4×6 @ Bar",
      week2: "4×8 @ Bar+5",
      week3: "5×6 @ Bar+7.5",
      week4: "4×6 @ Bar+5",
    },
  ];

  return (
    <div className="size-full relative overflow-y-auto">
      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-orange-900/75" />

      {/* Back Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="fixed top-8 left-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 hover:border-orange-500/50 transition-all duration-300"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-3">
            WEEKS 2-4 PROGRESSION GUIDE — Progressive Overload Protocol
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            The training split remains the same every week (Mon = Push, Tue = Pull, etc). What changes is
            <strong className="text-white"> INTENSITY</strong> and <strong className="text-white">VOLUME</strong>. Here is your progression blueprint:
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <h2 className="text-white text-2xl font-bold mb-4">Progression Blueprint</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="text-white/70">
                    <th className="px-4 py-3">Week</th>
                    <th className="px-4 py-3">Changes to Apply</th>
                    <th className="px-4 py-3">Focus</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  {progressionBlueprint.map((row) => (
                    <tr key={row.week} className="border-t border-white/10">
                      <td className="px-4 py-4 font-semibold">{row.week}</td>
                      <td className="px-4 py-4">{row.changes}</td>
                      <td className="px-4 py-4">{row.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <h2 className="text-white text-2xl font-bold mb-4">
              Exercise Progression Tracker — Week by Week
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="text-white/70">
                    <th className="px-4 py-3">Exercise</th>
                    <th className="px-4 py-3">Week 1</th>
                    <th className="px-4 py-3">Week 2</th>
                    <th className="px-4 py-3">Week 3</th>
                    <th className="px-4 py-3">Week 4</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  {progressionTracker.map((row) => (
                    <tr key={row.exercise} className="border-t border-white/10">
                      <td className="px-4 py-4 font-semibold">{row.exercise}</td>
                      <td className="px-4 py-4">{row.week1}</td>
                      <td className="px-4 py-4">{row.week2}</td>
                      <td className="px-4 py-4">{row.week3}</td>
                      <td className="px-4 py-4">{row.week4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/week-1")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold transition-all duration-300"
          >
            <Zap className="w-5 h-5" />
            Review Week 1
          </button>
        </div>
      </div>
    </div>
  );
}
