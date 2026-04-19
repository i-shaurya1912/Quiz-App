import React from 'react';
import { Link } from 'react-router-dom';

const QuizResults = () => {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30 min-h-screen flex flex-col">
      
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-zinc-900/40 backdrop-blur-xl border-b border-white/10 z-50 shadow-[0_0_40px_-10px_rgba(161,166,255,0.08)]">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-indigo-400">explore</span>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#a1a6ff] to-[#5860ff] font-headline tracking-tight">Luminous Quiz</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6 mr-6">
            <Link to="/library" className="text-zinc-400 font-lexend text-sm tracking-wide hover:bg-white/5 transition-all duration-300 px-3 py-1 rounded-full cursor-pointer">Library</Link>
            <Link to="/create" className="text-zinc-400 font-lexend text-sm tracking-wide hover:bg-white/5 transition-all duration-300 px-3 py-1 rounded-full cursor-pointer">Create</Link>
            <Link to="/dashboard" className="text-indigo-300 font-semibold font-lexend text-sm tracking-wide hover:bg-white/5 transition-all duration-300 px-3 py-1 rounded-full cursor-pointer">Dashboard</Link>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/20 flex items-center justify-center overflow-hidden active:scale-95 transition-transform cursor-pointer">
            <img alt="User Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1uQFj9EFcWYThWwFNMCymxhoe12_m0_MpUVG86Zbz6LpCeozWCcvcTynoC9wJKFwEtsIe0RomHcmE_JWqZhmhAaSneyGdLAWqLbsyoD6YgO7SppNk_4ovLqhOTjEI0dDWOKHMMBhYu7pRwmAwfV5CHOQYh6t3RC9AeYQXLiP_jxp0R6zSGeM5KYDqfYDVFXYAbFqQcbA3V8DeQcDJFJ498XR0pLfxa9_k_cawVzb6PAtXWRsyibZ1rD6vMUZ2dl1xlL7RfKWdodiV"/>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-24 pb-12 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Result Summary Section (Bento Style) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Big Score Display */}
          <section className="glass-card rounded-lg p-8 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-700"></div>
            <h2 className="text-label-md font-label uppercase tracking-[0.2em] text-on-surface-variant mb-6 text-sm">Final Assessment</h2>
            
            <div className="relative w-48 h-48 flex items-center justify-center mb-6">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                <circle className="text-surface-variant" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="6"></circle>
                <circle cx="50" cy="50" fill="none" r="45" stroke="url(#gradient-score)" strokeDasharray="283" strokeDashoffset="42" strokeLinecap="round" strokeWidth="8"></circle>
                <defs>
                  <linearGradient id="gradient-score" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#a1a6ff"></stop>
                    <stop offset="100%" stopColor="#5860ff"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-6xl font-headline text-on-surface leading-none font-bold">85<span className="text-primary text-2xl">%</span></span>
                <span className="text-on-surface-variant text-xs font-label uppercase tracking-widest mt-1">Mastery</span>
              </div>
            </div>
            
            <div className="bg-tertiary-container/10 border border-tertiary-container/20 px-6 py-2 rounded-full mb-2">
              <span className="text-tertiary-dim font-headline font-bold text-lg">Excellent!</span>
            </div>
            <p className="text-on-surface-variant text-sm text-center">You've demonstrated a deep understanding of the Observatory's mysteries.</p>
          </section>

          {/* Stats Breakdown Card */}
          <section className="grid grid-cols-2 gap-4">
            <div className="glass-card rounded-lg p-6 flex flex-col gap-2">
              <span className="material-symbols-outlined text-tertiary-container text-3xl">check_circle</span>
              <span className="text-3xl font-headline font-bold text-on-surface">17</span>
              <span className="text-xs font-label uppercase text-on-surface-variant">Correct</span>
            </div>
            <div className="glass-card rounded-lg p-6 flex flex-col gap-2">
              <span className="material-symbols-outlined text-error text-3xl">cancel</span>
              <span className="text-3xl font-headline font-bold text-on-surface">03</span>
              <span className="text-xs font-label uppercase text-on-surface-variant">Incorrect</span>
            </div>
          </section>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/play" className="flex-1 bg-gradient-to-br from-primary to-primary-dim text-on-primary font-lexend font-bold py-4 px-8 rounded-full neon-glow-primary active:scale-95 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">replay</span>
              Retry Quiz
            </Link>
            <Link to="/" className="flex-1 bg-surface-container-high hover:bg-surface-bright text-on-surface font-lexend font-bold py-4 px-8 rounded-full border border-outline-variant/20 active:scale-95 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">home</span>
              Go Home
            </Link>
          </div>
        </div>

        {/* Scrollable Question Review */}
        <div className="lg:col-span-7 space-y-4 h-full">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-headline font-bold text-on-surface">Question Review</h3>
            <span className="text-on-surface-variant text-xs font-label uppercase tracking-widest">20 Total Questions</span>
          </div>
          
          <div className="space-y-4 max-h-[calc(100vh-280px)] overflow-y-auto pr-2">
            {/* Correct Item */}
            <div className="glass-card rounded-lg p-6 group hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="bg-surface-container-lowest w-10 h-10 rounded-lg flex items-center justify-center font-headline font-bold text-on-surface-variant">01</div>
                <div className="flex-grow">
                  <p className="text-lg font-headline font-semibold text-on-surface leading-snug">What is the light-gathering power of a telescope determined by?</p>
                </div>
                <span className="material-symbols-outlined text-tertiary-container">check_circle</span>
              </div>
              <div className="space-y-3 pl-14">
                <div className="bg-tertiary-container/10 border border-tertiary-container/30 rounded-xl p-4 flex items-center justify-between">
                  <span className="text-on-surface-variant text-sm">Your Answer: <span className="text-on-surface font-semibold ml-1">Aperture Diameter</span></span>
                  <span className="text-tertiary text-xs font-bold uppercase tracking-widest">Correct</span>
                </div>
              </div>
            </div>

            {/* Wrong Item */}
            <div className="glass-card rounded-lg p-6 group hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="bg-surface-container-lowest w-10 h-10 rounded-lg flex items-center justify-center font-headline font-bold text-on-surface-variant">02</div>
                <div className="flex-grow">
                  <p className="text-lg font-headline font-semibold text-on-surface leading-snug">Which celestial body emits its own radio waves through pulsars?</p>
                </div>
                <span className="material-symbols-outlined text-error">error</span>
              </div>
              <div className="space-y-3 pl-14">
                <div className="bg-error/10 border border-error/30 rounded-xl p-4 mb-2">
                  <span className="text-on-surface-variant text-sm">Your Answer: <span className="text-error font-semibold ml-1">Red Dwarf Star</span></span>
                </div>
                <div className="bg-surface-container-lowest/50 border border-outline-variant/30 rounded-xl p-4 flex items-center justify-between">
                  <span className="text-on-surface-variant text-sm">Correct Answer: <span className="text-tertiary-dim font-semibold ml-1">Neutron Star</span></span>
                </div>
              </div>
            </div>

            {/* Correct Item 2 */}
            <div className="glass-card rounded-lg p-6 group hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="bg-surface-container-lowest w-10 h-10 rounded-lg flex items-center justify-center font-headline font-bold text-on-surface-variant">03</div>
                <div className="flex-grow">
                  <p className="text-lg font-headline font-semibold text-on-surface leading-snug">The distance light travels in one vacuum year is approximately?</p>
                </div>
                <span className="material-symbols-outlined text-tertiary-container">check_circle</span>
              </div>
              <div className="space-y-3 pl-14">
                <div className="bg-tertiary-container/10 border border-tertiary-container/30 rounded-xl p-4 flex items-center justify-between">
                  <span className="text-on-surface-variant text-sm">Your Answer: <span className="text-on-surface font-semibold ml-1">9.46 Trillion KM</span></span>
                  <span className="text-tertiary text-xs font-bold uppercase tracking-widest">Correct</span>
                </div>
              </div>
            </div>

            {/* Correct Item 3 */}
            <div className="glass-card rounded-lg p-6 group hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="bg-surface-container-lowest w-10 h-10 rounded-lg flex items-center justify-center font-headline font-bold text-on-surface-variant">04</div>
                <div className="flex-grow">
                  <p className="text-lg font-headline font-semibold text-on-surface leading-snug">What is the most abundant element in the visible universe?</p>
                </div>
                <span className="material-symbols-outlined text-tertiary-container">check_circle</span>
              </div>
              <div className="space-y-3 pl-14">
                <div className="bg-tertiary-container/10 border border-tertiary-container/30 rounded-xl p-4 flex items-center justify-between">
                  <span className="text-on-surface-variant text-sm">Your Answer: <span className="text-on-surface font-semibold ml-1">Hydrogen</span></span>
                  <span className="text-tertiary text-xs font-bold uppercase tracking-widest">Correct</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0e0e0f] border-t border-zinc-800/30 flex flex-col md:flex-row items-center justify-between px-10 py-12 gap-4">
        <div className="flex items-center gap-6 order-2 md:order-1">
          <span className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em] cursor-pointer hover:text-indigo-400 opacity-100">Privacy</span>
          <span className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em] cursor-pointer hover:text-indigo-400 opacity-100">Terms</span>
          <span className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em] cursor-pointer hover:text-indigo-400 opacity-100">Support</span>
        </div>
        <span className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em] order-1 md:order-2">© 2024 Luminous Noir. All rights reserved.</span>
        <div className="flex gap-4 order-3">
          <span className="material-symbols-outlined text-zinc-500 hover:text-indigo-400 transition-opacity cursor-pointer">share</span>
          <span className="material-symbols-outlined text-zinc-500 hover:text-indigo-400 transition-opacity cursor-pointer">download</span>
        </div>
      </footer>
    </div>
  );
};

export default QuizResults;
