import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="ambient-orb bg-primary top-[-20%] left-[-10%]"></div>
      <div className="ambient-orb bg-secondary bottom-[-20%] right-[-10%]"></div>
      
      <main className="w-full max-w-md px-6 py-12 relative z-10">
        <div className="flex flex-col items-center mb-10">
          <Link to="/" className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-container-high border border-white/5 shadow-[0_0_30px_-5px_rgba(161,166,255,0.2)] hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              rocket_launch
            </span>
          </Link>
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter text-on-surface mb-2">Luminous Noir</h1>
          <p className="font-body text-on-surface-variant text-sm tracking-wide">Enter the Observatory</p>
        </div>
        
        <div className="glass-card rounded-lg p-8 shadow-2xl relative">
          <div className="mb-8">
            <h2 className="font-headline text-2xl font-semibold text-on-surface">Welcome Back</h2>
            <p className="font-body text-on-surface-variant text-sm mt-1">Please enter your credentials to continue.</p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-2 px-1">Email Address</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl transition-colors group-focus-within:text-secondary">
                  mail
                </span>
                <input className="w-full bg-surface-container-lowest border-none rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-body" placeholder="name@example.com" type="email" />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2 px-1">
                <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block">Password</label>
                <a className="font-label text-[10px] uppercase tracking-widest text-secondary hover:text-secondary-fixed-dim transition-colors" href="#">Forgot?</a>
              </div>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl transition-colors group-focus-within:text-secondary">
                  lock
                </span>
                <input className="w-full bg-surface-container-lowest border-none rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-body" placeholder="••••••••" type="password" />
              </div>
            </div>
            
            <div className="pt-2">
              <Link to="/dashboard" className="w-full bg-gradient-main text-on-primary font-headline font-bold py-4 rounded-full neon-glow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group" type="submit">
                Login
                <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>
          </form>
          
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
            <p className="font-body text-on-surface-variant text-sm">Don't have an account?</p>
            <Link to="/signup" className="font-headline text-sm font-bold text-primary hover:text-primary-container transition-colors tracking-tight">Create New Account</Link>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center gap-6 opacity-40">
          <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
            <span className="material-symbols-outlined">groups</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
            <span className="material-symbols-outlined">cloud</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
            <span className="material-symbols-outlined">public</span>
          </div>
        </div>
      </main>
      
      <div className="fixed bottom-0 w-full h-1/3 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <img className="absolute bottom-0 w-full h-full object-cover opacity-20 mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDunJtWkoUAE2DaBOL-oO1cNQ81yyX54kcpzsHKcAnyU1m5g0A5mWz9B3Gn0ImUx78gXfotxIAyl1tG-fBwHpToQgzKraNfUDAEtKwRJ7mWj4gPefoG9kLyVOjLlOxk1-3q22b_6BOM6bZA1JTS7lYJ-aaQwkkkpzLxYZhjGYNoaCFBklD6x34mFRrcS0pJk4BghYTN-S2H_7HaZkm1YMQBt91Ds9AqTfZNq-jnumC9iife_OiAyYeiJ9DinQ_nAy8a-PWqJmIlEzGv" alt="Background decoration"/>
      </div>
    </div>
  );
};

export default Login;
