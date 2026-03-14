import {
  ArrowLeft,
  Dumbbell,
  TrendingUp,
  Flame,
  Zap,
  Target,
  Activity,
  BedDouble,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const backgroundImage = "/fitlife-bgimg.png";

export function WarmUpWeekPlan() {
  const navigate = useNavigate();

  const weekPlan = [
    {
      day: "DAY 1 — Monday",
      type: "PUSH DAY",
      focus: "Chest + Shoulders + Triceps",
      icon: Dumbbell,
      path: "/day-1",
    },
    {
      day: "DAY 2 — Tuesday",
      type: "PULL DAY",
      focus: "Back + Biceps + Rear Delts",
      icon: TrendingUp,
      path: "/day-2",
    },
    {
      day: "DAY 3 — Wednesday",
      type: "LEGS + CORE",
      focus: "Quads + Hamstrings + Glutes + Abs",
      icon: Flame,
      path: "/day-3",
    },
    {
      day: "DAY 4 — Thursday",
      type: "PUSH (Heavy)",
      focus: "Chest + Shoulders + Triceps",
      icon: Zap,
      path: "/day-4",
    },
    {
      day: "DAY 5 — Friday",
      type: "PULL (Heavy)",
      focus: "Back + Biceps + Rear Delts",
      icon: Target,
      path: "/day-5",
    },
    {
      day: "DAY 6 — Saturday",
      type: "FULL BODY + ARMS",
      focus: "Conditioning + Volume",
      icon: Activity,
      path: "/day-6",
    },
    {
      day: "DAY 7 — Sunday",
      type: "🛌 REST & RECOVERY",
      focus: "Mandatory",
      icon: BedDouble,
      path: "/day-7",
      isRest: true,
    },
  ];

  return (
    <div className="size-full relative overflow-y-auto">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-orange-900/50" />

      {/* Back Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="fixed top-8 left-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 hover:border-orange-500/50 transition-all duration-300"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-3">
            WEEK 1 (Days 1–6) — Foundation & Form — Build the
            Base
          </h1>
          <p className="text-white/80 text-lg">
            Week 1 Goal: Master form. Start with moderate
            weights. Feel the muscle work (mind-muscle
            connection). Don't ego-lift.
          </p>
        </div>

        {/* Week Plan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {weekPlan.map((day, index) => {
            const Icon = day.icon;
            const isClickable = !!day.path;

            if (isClickable) {
              return (
                <button
                  key={index}
                  onClick={() => navigate(day.path)}
                  className={`group ${
                    day.isRest
                      ? "bg-blue-500/20 border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/50"
                      : "bg-white/10 border-white/20 hover:bg-white/20 hover:border-orange-500/50"
                  } backdrop-blur-md border rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                    day.isRest
                      ? "hover:shadow-blue-500/20"
                      : "hover:shadow-orange-500/20"
                  } cursor-pointer`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`${
                        day.isRest
                          ? "bg-gradient-to-br from-blue-500 to-blue-600"
                          : "bg-gradient-to-br from-orange-500 to-orange-600"
                      } p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="text-white text-xl font-bold mb-1">
                        {day.day}
                      </h3>
                      <p
                        className={`${
                          day.isRest
                            ? "text-blue-300"
                            : "text-orange-400"
                        } font-semibold text-sm mb-2`}
                      >
                        {day.type}
                      </p>
                      <p className="text-white/70 text-sm">
                        {day.focus}
                      </p>
                    </div>
                  </div>
                </button>
              );
            }

            return (
              <div
                key={index}
                className={`group ${
                  day.isRest
                    ? "bg-blue-500/20 border-blue-400/30"
                    : "bg-white/10 border-white/20"
                } backdrop-blur-md border rounded-2xl p-6`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`${
                      day.isRest
                        ? "bg-gradient-to-br from-blue-500 to-blue-600"
                        : "bg-gradient-to-br from-orange-500 to-orange-600"
                    } p-3 rounded-full flex-shrink-0`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-white text-xl font-bold mb-1">
                      {day.day}
                    </h3>
                    <p
                      className={`${
                        day.isRest
                          ? "text-blue-300"
                          : "text-orange-400"
                      } font-semibold text-sm mb-2`}
                    >
                      {day.type}
                    </p>
                    <p className="text-white/70 text-sm">
                      {day.focus}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}