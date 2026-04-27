import React from 'react';
import { Link } from 'react-router-dom';

const CreateQuiz = () => {
  return (
    <div className="bg-background text-on-background min-h-screen">

      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-zinc-900/40 backdrop-blur-xl border-b border-white/10 z-50 shadow-[0_0_40px_-10px_rgba(161,166,255,0.08)]">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="p-2 hover:bg-white/5 transition-all duration-300 active:scale-95 text-zinc-400">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#a1a6ff] to-[#5860ff] font-headline tracking-tight">Luminous Quiz</h1>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8">
            <Link to="/library" className="text-zinc-400 font-lexend text-sm tracking-wide hover:text-indigo-400 transition-all duration-300">Library</Link>
            <Link to="/create" className="text-indigo-300 font-semibold font-lexend text-sm tracking-wide">Create</Link>
            <Link to="/dashboard" className="text-zinc-400 font-lexend text-sm tracking-wide hover:text-indigo-400 transition-all duration-300">Dashboard</Link>
          </nav>
          <div className="w-10 h-10 rounded-full overflow-hidden border border-indigo-400/20">
            <img alt="User Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD1873-eMmrsPqKdKUmwDas6xwJXb6RfZ3z-SgA1zINy2bRw58K99Xv01MACESkE2eq9ZKUfCplHnWcUsSlWE5-0EeH8NxsQVZ00N5gG_ziNjV35i5Tirt_kH9FpEMfuGIOqOHB4IX8I8AML_ZHJyQOQUwPv9SXY2LHQsDt_z90-BjVYgx7j-cDrOl3dhaYvK4RbVmCuFbuBQcl-lN6GksZs31zbmzW8SBpS62osc2F9X5nygVeDplAvZHeKH9wv9UvhGoJ0tdDBNR"/>
          </div>
        </div>
      </header>
      
      <main className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        {/* Toast Notification () - you can make this dynamic with state */}
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-3 px-6 py-3 rounded-full bg-surface-bright border border-tertiary/20 shadow-[0_0_20px_rgba(0,252,154,0.1)]">
          <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          <span className="text-sm font-medium text-on-surface">Quiz ready to configure!</span>
        </div>
        
        <section className="mb-12">
          <h2 className="text-5xl font-headline font-bold text-on-surface mb-2 tracking-tight">Create New Quiz</h2>
          <p className="text-on-surface-variant text-lg">Architect your knowledge challenge in the Observatory.</p>
        </section>
        
        {/* Form Sections */}
        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
          {/* Metadata Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass-card p-8 rounded-lg">
              <label className="block text-xs font-label text-on-surface-variant mb-3 tracking-[0.05em]">QUIZ TITLE</label>
              <input className="w-full bg-surface-container-lowest border-none outline-none focus:ring-0 text-xl font-headline text-on-surface placeholder:text-zinc-700 p-0 mb-8 focus:border-b-2 focus:border-secondary transition-all" placeholder="e.g., Quantum Mechanics Fundamentals" type="text"/>
              
              <label className="block text-xs font-label text-on-surface-variant mb-3 tracking-[0.05em]">DESCRIPTION</label>
              <textarea className="w-full bg-surface-container-lowest border-none outline-none focus:ring-0 text-body text-on-surface-variant placeholder:text-zinc-700 p-0 resize-none" placeholder="Describe the scope and difficulty of this quiz..." rows="4"></textarea>
            </div>
            
            <div className="glass-card p-8 rounded-lg flex flex-col justify-between border-l-4 border-indigo-500/30">
              <div>
                <span className="material-symbols-outlined text-indigo-400 text-4xl mb-4">auto_awesome</span>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Quiz Settings</h3>
                <p className="text-sm text-on-surface-variant">Set global parameters for this session.</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-xs font-label">TIME LIMIT</span>
                  <span className="text-primary font-bold">15 MIN</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-xs font-label">DIFFICULTY</span>
                  <span className="text-secondary font-bold">EXPERT</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dynamic Question List */}
          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <h3 className="text-3xl font-headline font-bold text-on-surface">Question Path</h3>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-white hover:bg-surface-bright transition-all active:scale-95 text-sm font-medium" type="button">
                  <span className="material-symbols-outlined text-sm">delete</span>
                  Remove Last
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-500/10 text-primary border border-primary/20 hover:bg-indigo-500/20 transition-all active:scale-95 text-sm font-medium" type="button">
                  {/* <span className="material-symbols-outlined text-sm">add</span> */}
                  <span className="material-symbols-outlined text-sm">add</span>
                  Add Question
                </button>
              </div>
            </div>
            
            {/* Question Block 01 */}
            <div className="glass-card p-10 rounded-lg relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
              <div className="flex gap-6 items-start">
                <span className="text-4xl font-headline font-black text-white/10 select-none">01</span>
                <div className="flex-1 space-y-8">
                  <div>
                    <label className="block text-xs font-label text-on-surface-variant mb-4 tracking-[0.05em]">QUESTION PROMPT</label>
                    <input className="w-full bg-transparent border-none outline-none focus:ring-0 text-2xl font-headline text-on-surface placeholder:text-zinc-800 p-0 border-b border-zinc-800 focus:border-primary transition-colors pb-4" placeholder="Enter your question here..." type="text"/>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Option A */}
                    <div className="relative group/option transition-all hover:scale-[1.01]">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                        <input className="w-5 h-5 bg-zinc-900 border-zinc-700 text-tertiary focus:ring-tertiary/20" name="correct_1" type="radio"/>
                        <span className="text-xs font-bold text-zinc-500">A</span>
                      </div>
                      <input className="w-full bg-surface-container-lowest pl-16 pr-6 py-5 rounded-xl border border-transparent outline-none focus:border-primary/40 focus:ring-0 text-on-surface" placeholder="Option A text" type="text"/>
                    </div>
                    {/* Option B */}
                    <div className="relative group/option transition-all hover:scale-[1.01]">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                        <input className="w-5 h-5 bg-zinc-900 border-zinc-700 text-tertiary focus:ring-tertiary/20" name="correct_1" type="radio"/>
                        <span className="text-xs font-bold text-zinc-500">B</span>
                      </div>
                      <input className="w-full bg-surface-container-lowest pl-16 pr-6 py-5 rounded-xl border border-transparent outline-none focus:border-primary/40 focus:ring-0 text-on-surface" placeholder="Option B text" type="text"/>
                    </div>
                    {/* Option C */}
                    <div className="relative group/option transition-all hover:scale-[1.01]">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                        <input className="w-5 h-5 bg-zinc-900 border-zinc-700 text-tertiary focus:ring-tertiary/20" name="correct_1" type="radio"/>
                        <span className="text-xs font-bold text-zinc-500">C</span>
                      </div>
                      <input className="w-full bg-surface-container-lowest pl-16 pr-6 py-5 rounded-xl border border-transparent outline-none focus:border-primary/40 focus:ring-0 text-on-surface" placeholder="Option C text" type="text"/>
                    </div>
                    {/* Option D */}
                    <div className="relative group/option transition-all hover:scale-[1.01]">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                        <input className="w-5 h-5 bg-zinc-900 border-zinc-700 text-tertiary focus:ring-tertiary/20" name="correct_1" type="radio"/>
                        <span className="text-xs font-bold text-zinc-500">D</span>
                      </div>
                      <input className="w-full bg-surface-container-lowest pl-16 pr-6 py-5 rounded-xl border border-transparent outline-none focus:border-primary/40 focus:ring-0 text-on-surface" placeholder="Option D text" type="text"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer Action */}
            <div className="pt-12 flex flex-col items-center gap-6">
              <button className="w-full md:w-auto px-16 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-headline font-bold text-lg uppercase tracking-wider neon-glow hover:scale-105 active:scale-95 transition-all duration-300" type="submit">
                Save Quiz
              </button>
              <p className="text-xs font-label text-zinc-600">DRAFT AUTO-SAVED AT 14:02 PM</p>
            </div>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-[#0e0e0f] border-t border-zinc-800/30 py-12 px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-zinc-500 font-inter text-xs uppercase tracking-[0.05em]">
          © 2024 Luminous Noir. All rights reserved.
        </div>
        <div className="flex gap-8">
          <a className="text-zinc-500 font-inter text-xs uppercase tracking-[0.05em] hover:text-indigo-400 transition-opacity" href="#">Privacy</a>
          <a className="text-zinc-500 font-inter text-xs uppercase tracking-[0.05em] hover:text-indigo-400 transition-opacity" href="#">Terms</a>
          <a className="text-zinc-500 font-inter text-xs uppercase tracking-[0.05em] hover:text-indigo-400 transition-opacity" href="#">Support</a>
        </div>
      </footer>

      {/* Bottom Nav for Mobile */}
      <nav className="md:hidden fixed bottom-0 w-full bg-zinc-900/80 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex justify-around items-center z-50">
        <button className="flex flex-col items-center gap-1 text-zinc-500">
          <span className="material-symbols-outlined">auto_stories</span>
          <span className="text-[10px] font-label">LIBRARY</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#a1a6ff]">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
          <span className="text-[10px] font-label">CREATE</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-500">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-label">DASHBOARD</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-500">
          <span className="material-symbols-outlined">leaderboard</span>
          <span className="text-[10px] font-label">RANK</span>
        </button>
      </nav>
    </div>
  );
};

export default CreateQuiz;
