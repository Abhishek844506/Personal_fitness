import { createBrowserRouter } from 'react-router-dom';
import { Home } from './component/Home';
import { Dashboard } from './component/Dashboard';
import { MealPlan } from './component/MealPlan';
import { PreWorkoutMeal } from './component/PreWorkoutMeal';
import { PostWorkoutMeal } from './component/PostWorkoutMeal';
import { AfterWorkOut } from './component/AfterWorkOut';
import { CalorieMacro } from './component/CalorieMacro';
import { WarmUpWeekPlan } from './component/WarmUpWeekPlan';
import { Week2To4Plan } from './component/Week2To4Plan';
import { Day1Monday } from './component/Day1Monday';
import { Result } from './component/Result';
import { Day2Tuesday } from './component/Day2Tuesday';
import { Day3Wednesday } from './component/Day3Wednesday';
import { Day4Thursday } from './component/Day4Thursday';
import { Day5Friday } from './component/Day5Friday';
import { Day6Saturday } from './component/Day6Saturday';
import { Day7Sunday } from './component/Day7Sunday';
import { Profile } from './component/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/dashboard',
    Component: Dashboard,
  },
  {
    path: '/profile',
    Component: Profile,
  },
  {
    path: '/meal-plan',
    Component: MealPlan,
  },
  {
    path: '/pre-workout',
    Component: PreWorkoutMeal,
  },
  {
    path: '/post-workout',
    Component: PostWorkoutMeal,
  },
  {
    path: '/after-workout',
    Component: AfterWorkOut,
  },
  {
    path: '/calorie-macro',
    Component: CalorieMacro,
  },
  {
    path: '/result',
    Component: Result,
  },
  {
    path: '/week-1',
    Component: WarmUpWeekPlan,
  },
  {
    path: '/week-2-4',
    Component: Week2To4Plan,
  },
  {
    path: '/day-1',
    Component: Day1Monday,
  },
  {
    path: '/day-2',
    Component: Day2Tuesday,
  },
  {
    path: '/day-3',
    Component: Day3Wednesday,
  },
  {
    path: '/day-4',
    Component: Day4Thursday,
  },
  {
    path: '/day-5',
    Component: Day5Friday,
  },
  {
    path: '/day-6',
    Component: Day6Saturday,
  },
  {
    path: '/day-7',
    Component: Day7Sunday,
  }
]);