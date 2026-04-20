import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-zinc-900/40 backdrop-blur-xl border-b border-white/10 shadow-[0_0_40px_-10px_rgba(161,166,255,0.08)] z-50">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-indigo-400 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
          <h1 className="text-2xl font-lexend font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#a1a6ff] to-[#5860ff]">Luminous Quiz</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-indigo-300 font-semibold font-lexend text-sm tracking-wide transition-all duration-300">Home</Link>
          <Link to="/library" className="text-zinc-400 font-lexend text-sm tracking-wide hover:bg-white/5 hover:text-white px-3 py-1 rounded-full transition-all duration-300">Library</Link>
          <Link to="/leaderboard" className="text-zinc-400 font-lexend text-sm tracking-wide hover:bg-white/5 hover:text-white px-3 py-1 rounded-full transition-all duration-300">Leaderboard</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-zinc-400 text-sm font-label tracking-wider hover:text-white transition-colors">LOGIN</Link>
          <Link to="/dashboard" className="w-10 h-10 rounded-full border border-white/10 overflow-hidden active:scale-95 transition-transform cursor-pointer block">
            <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQOjv4nlHIOr_lx8F6jqhBXCdBNYaJcPaIFhsFIq_wDbIc25uJHs6o9LbxcuI_0_ULtsEXfzPxhN5ztrlSDBrFuRFjK3hDgxOqKD8uahT7ZHdl6GG-FZg0b1MT2hZfLAVAj2k-mczo-08lz6fB0E2j42imWGoz5IINULwieOSB9mOU9OM7cDHElRZpjdKzsGRLg73HbENNwU57yX2AzHoila4MvxF_JeRIYl2UiV8-gSVthqtWi0YpZsfBtI27FHD-QSefcPOGiXgJ"/>
          </Link>
        </div>
      </header>

      <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden flex-grow">
        {/* Background Elements */}
        <div className="absolute top-40 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-80 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-32 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
            <span className="text-[10px] font-label tracking-[0.2em] text-on-surface-variant">NOW LIVE: GLOBAL TOURNAMENTS</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter mb-6">
            Create &amp; <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary">Play Quizzes</span>
          </h2>
          <p className="max-w-2xl text-lg md:text-xl text-on-surface-variant font-body leading-relaxed mb-12">
            The ultimate platform for interactive learning and competition. Harness the power of neon-infused data to master any subject.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/create" className="group relative px-10 py-4 rounded-full bg-gradient-to-br from-secondary-container to-secondary text-on-secondary font-headline font-bold text-lg transition-all duration-300 active:scale-95 neon-glow-purple">
              <span className="flex items-center gap-2">
                Create Quiz
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">add_circle</span>
              </span>
            </Link>
            <Link to="/play" className="group relative px-10 py-4 rounded-full bg-gradient-to-br from-primary to-primary-dim text-on-primary font-headline font-bold text-lg transition-all duration-300 active:scale-95 neon-glow-blue">
              <span className="flex items-center gap-2">
                Play Quiz
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">play_arrow</span>
              </span>
            </Link>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Large Card 1 */}
          <div className="md:col-span-7 glass-card rounded-lg p-10 flex flex-col justify-between group hover:bg-surface-bright/40 transition-all duration-500 hover:translate-y-[-4px]">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 border border-secondary/20">
                <span className="material-symbols-outlined text-secondary text-3xl">auto_stories</span>
              </div>
              <h3 className="text-3xl font-headline font-semibold mb-4">Dynamic Creation</h3>
              <p className="text-on-surface-variant font-body leading-relaxed text-lg">
                Build immersive assessments with our AI-assisted editor. Drag-and-drop media, interactive logic, and real-time previews.
              </p>
            </div>
            <div className="mt-12 overflow-hidden rounded-xl h-48 relative border border-white/5">
              <img alt="Dashboard Interface" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCopccpfj5jq8k71UwaB1PBVztbvXQVfAX5a3RG-_yK7U1CGhIoBmD0XctxEyzS_fJEkPQT3d1nO4bgjG0WNYFJGb5Ibp_i2irnenblgcuFD1SqQmAzP0B5LL6JF0XTjl2NOvkpW7SOD4g1czrjyxduID9F6HIoQVPJ9SiqUWyhAknVfV2hg6phD1wyJAKpn8s5p_gUQ0ToWjsUAdtLA6XVOKFfzn8n9rc_5_PXDvjtbTwB-sqpYDpftTLzgoI9llbuHIp3CsQuDeQ-"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
            </div>
          </div>
          
          {/* Small Card 1 */}
          <div className="md:col-span-5 glass-card rounded-lg p-10 flex flex-col group hover:bg-surface-bright/40 transition-all duration-500 hover:translate-y-[-4px]">
            <div className="w-14 h-14 rounded-2xl bg-tertiary/10 flex items-center justify-center mb-8 border border-tertiary/20">
              <span className="material-symbols-outlined text-tertiary text-3xl">analytics</span>
            </div>
            <h3 className="text-2xl font-headline font-semibold mb-4">Instant Results</h3>
            <p className="text-on-surface-variant font-body leading-relaxed mb-8">
              Analyze performance with clinical precision. Deep-dive into metrics immediately after completion.
            </p>
            <div className="flex-grow flex items-end">
              <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-tertiary to-tertiary-container w-[75%] shadow-[0_0_10px_#00fc9a]"></div>
              </div>
            </div>
          </div>

          {/* Full Width Content */}
          <div className="md:col-span-12 glass-card rounded-lg p-10 flex flex-col md:flex-row items-center gap-12 group hover:bg-surface-bright/40 transition-all duration-500">
            <div className="flex-1">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                <span className="material-symbols-outlined text-primary text-3xl">leaderboard</span>
              </div>
              <h3 className="text-3xl font-headline font-semibold mb-4">Global Leaderboard</h3>
              <p className="text-on-surface-variant font-body leading-relaxed text-lg max-w-xl">
                Compete against the world’s brightest minds. Climb the ranks and earn exclusive badges in the Luminous Observatory.
              </p>
            </div>
            <div className="flex-1 w-full grid grid-cols-1 gap-3">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest/50 border border-white/5">
                <span className="text-secondary font-headline font-bold">01</span>
                <div className="w-8 h-8 rounded-full bg-zinc-800"></div>
                <span className="flex-grow font-body text-sm">Xenon_Pulse</span>
                <span className="text-primary font-bold">12,450 pts</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest/50 border border-white/5">
                <span className="text-secondary/60 font-headline font-bold">02</span>
                <div className="w-8 h-8 rounded-full bg-zinc-800"></div>
                <span className="flex-grow font-body text-sm">Neon_Ghost</span>
                <span className="text-primary font-bold">11,820 pts</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-zinc-800/30 bg-[#0e0e0f] py-12 px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-indigo-400 text-xl">explore</span>
            <span className="font-lexend font-bold text-white tracking-tight">Luminous Noir</span>
          </div>
          <div className="flex gap-6">
            <a className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em] hover:text-indigo-400 transition-opacity" href="#">Privacy</a>
            <a className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em] hover:text-indigo-400 transition-opacity" href="#">Terms</a>
            <a className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em] hover:text-indigo-400 transition-opacity" href="#">Support</a>
          </div>
        </div>
        <p className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em]">
          © 2024 Luminous Noir. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default LandingPage;
