import { ArrowLeft, User, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
const backgroundImage = '/fitlife-bgimg.png';

export function Profile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    goal: '',
    experience: ''
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setFormData(JSON.parse(savedProfile));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // Save to localStorage for persistence
    localStorage.setItem('userProfile', JSON.stringify(formData));
    alert('Profile saved successfully!');
    navigate('/dashboard');
  };

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
            Your Profile
          </h1>
          <p className="text-white/80 text-lg">
            Set up your details to start your fitness journey
          </p>
        </div>

        {/* Profile Form */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-3 rounded-full">
              <User className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-white text-2xl font-bold">
              Basic Information
            </h2>
          </div>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-white/90 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange-500/50"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-white/90 font-semibold mb-2">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange-500/50"
                placeholder="Enter your age"
                min="16"
                max="100"
                required
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-white/90 font-semibold mb-2">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500/50"
                required
              >
                <option value="" disabled>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Height */}
            <div>
              <label className="block text-white/90 font-semibold mb-2">Height (cm)</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange-500/50"
                placeholder="Enter height in cm"
                min="100"
                max="250"
                required
              />
            </div>

            {/* Weight */}
            <div>
              <label className="block text-white/90 font-semibold mb-2">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange-500/50"
                placeholder="Enter weight in kg"
                min="30"
                max="200"
                required
              />
            </div>

            {/* Goal */}
            <div>
              <label className="block text-white/90 font-semibold mb-2">Fitness Goal</label>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500/50"
                required
              >
                <option value="" disabled>Select your goal</option>
                <option value="build-muscle">Build Muscle</option>
                <option value="lose-weight">Lose Weight</option>
                <option value="maintain">Maintain Fitness</option>
                <option value="strength">Increase Strength</option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-white/90 font-semibold mb-2">Experience Level</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500/50"
                required
              >
                <option value="" disabled>Select your experience</option>
                <option value="beginner">Beginner (New to fitness)</option>
                <option value="intermediate">Intermediate (Some experience)</option>
                <option value="advanced">Advanced (Experienced)</option>
              </select>
            </div>

            {/* Save Button */}
            <button
              type="button"
              onClick={handleSave}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" />
              Save Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}