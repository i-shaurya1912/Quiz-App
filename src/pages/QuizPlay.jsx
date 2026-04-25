import React from 'react';
import { Link } from 'react-router-dom';

const QuizPlay = () => {
  return (
    <div className="bg-background font-body text-on-surface selection:bg-primary/30 min-h-screen flex flex-col relative w-full overflow-x-hidden">
      
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-zinc-900/40 backdrop-blur-xl border-b border-white/10 z-50 shadow-[0_0_40px_-10px_rgba(161,166,255,0.08)]">
        <div className="flex items-center gap-4">
          <Link to="/library" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-all duration-300 active:scale-95 text-zinc-400">
            <span className="material-symbols-outlined">close</span>
          </Link>
          <h1 className="font-lexend font-bold tracking-tight text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#a1a6ff] to-[#5860ff]">Luminous Quiz</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end mr-4 hidden md:flex">
            <span className="font-label text-[10px] uppercase tracking-[0.1em] text-zinc-500">Observatory Status</span>
            <span className="text-tertiary font-headline font-bold text-sm">Active Journey</span>
          </div>
          <div className="w-10 h-10 rounded-full border border-indigo-400/30 p-0.5 overflow-hidden">
            <img alt="Avatar" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-mBYShqAqAp_aLsT3AWH8WaqDLws68lKCO8KRFo2Cmf-WpUwjPglKMr7S9hgSyl5GwzU8Ygh5b7D62TP6s_qy4PTstZbYxG74bx9k_3JKRQfjjcMaZmVLZTqizabD5oRyMAjGaGC9nT0kIYaekU9gaxV9p6WBa3-99vmt-sEy1hy-Ps6YZdJZkOZRqkeYENstLFwMs3NFcvLC1wadKG9WNV4YCcdH0EiZgmk3DQYVASvlMOtEORAIuwmKfucvdQSyUONgOkUc5LGd"/>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-24 pb-32 px-6 max-w-5xl mx-auto w-full flex flex-col justify-center relative z-10">
        {/* Instrumentation Header (Timer & Progress) */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-primary-container text-sm">schedule</span>
              <span className="font-label text-xs uppercase tracking-widest text-zinc-500">Chrono Remaining</span>
            </div>
            <div className="font-headline text-5xl font-extrabold tracking-tighter text-on-surface">
              09:<span className="text-primary">59</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-end">
              <span className="font-label text-xs uppercase tracking-widest text-zinc-500">Sync Progress</span>
              <span className="font-headline font-bold text-xl text-primary-fixed-dim">04 <span className="text-zinc-600">/ 10</span></span>
            </div>
            {/* Animated Progress Bar Container */}
            <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
              <div className="h-full w-[40%] bg-gradient-to-r from-tertiary to-tertiary-container relative">
                <div className="absolute right-0 top-0 h-full w-2 bg-white blur-[4px]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Question Section */}
        <section className="space-y-10">
          <div className="relative">
            <span className="absolute -left-8 -top-4 font-headline text-6xl font-black text-white/5 select-none pointer-events-none">Q4</span>
            <h2 className="font-lexend font-medium text-3xl md:text-4xl text-on-surface leading-tight tracking-tight max-w-4xl">
              Which quantum mechanical principle states that two identical fermions cannot occupy the same quantum state simultaneously?
            </h2>
          </div>

          {/* Options Grid (Glassmorphism Buttons) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Option 1: Selected State */}
            <button className="glass-card group text-left p-8 rounded-lg border-2 border-primary/40 bg-primary/5 transition-all duration-300 active:scale-[0.98] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <span className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">Alpha</span>
              <p className="font-lexend text-xl text-on-surface">Pauli Exclusion Principle</p>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-transparent opacity-50"></div>
            </button>

            {/* Option 2 */}
            <button className="glass-card group text-left p-8 rounded-lg border-2 border-transparent hover:border-white/10 hover:bg-surface-bright/40 transition-all duration-300 active:scale-[0.98]">
              <span className="font-label text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 mb-2 block">Beta</span>
              <p className="font-lexend text-xl text-on-surface group-hover:text-primary-container transition-colors">Heisenberg Uncertainty</p>
            </button>

            {/* Option 3 */}
            <button className="glass-card group text-left p-8 rounded-lg border-2 border-transparent hover:border-white/10 hover:bg-surface-bright/40 transition-all duration-300 active:scale-[0.98]">
              <span className="font-label text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 mb-2 block">Gamma</span>
              <p className="font-lexend text-xl text-on-surface group-hover:text-primary-container transition-colors">Quantum Entanglement</p>
            </button>

            {/* Option 4 */}
            <button className="glass-card group text-left p-8 rounded-lg border-2 border-transparent hover:border-white/10 hover:bg-surface-bright/40 transition-all duration-300 active:scale-[0.98]">
              <span className="font-label text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 mb-2 block">Delta</span>
              <p className="font-lexend text-xl text-on-surface group-hover:text-primary-container transition-colors">Superposition Principle</p>
            </button>
          </div>
        </section>
      </main>

      {/* Navigation Bar (Fixed Bottom) */}
      <nav className="fixed bottom-0 w-full glass-card border-t border-white/5 py-6 px-10 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-6">
          <button className="flex items-center gap-3 font-label text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors group">
            <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Previous
          </button>
          <div className="flex items-center gap-2 hidden sm:flex">
            <div className="h-1 w-1 rounded-full bg-primary/20"></div>
            <div className="h-1 w-1 rounded-full bg-primary/20"></div>
            <div className="h-1 w-1 rounded-full bg-primary/20"></div>
            <div className="h-1.5 w-6 rounded-full bg-primary"></div>
            <div className="h-1 w-1 rounded-full bg-zinc-700"></div>
            <div className="h-1 w-1 rounded-full bg-zinc-700"></div>
            <div className="h-1 w-1 rounded-full bg-zinc-700"></div>
          </div>
          <Link to="/results" className="bg-gradient-to-r from-primary to-primary-dim text-on-primary py-4 px-10 rounded-full font-headline font-bold text-sm uppercase tracking-widest neon-button-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
            Next Segment
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </nav>

      {/* Decorative Background Elements */}
      <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-[-1]"></div>
    </div>
  );
};

export default QuizPlay;
