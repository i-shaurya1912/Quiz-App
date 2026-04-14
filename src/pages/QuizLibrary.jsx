import React from 'react';
import { Link } from 'react-router-dom';

// const QuizLibrary = () => {
//   return (
const QuizLibrary = () => {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-zinc-900/40 backdrop-blur-xl border-b border-white/10 shadow-[0_0_40px_-10px_rgba(161,166,255,0.08)] z-50">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-indigo-400">explore</span>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#a1a6ff] to-[#5860ff] font-lexend tracking-tight">Luminous Quiz</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-white/5 transition-all duration-300 active:scale-95">
            <span className="material-symbols-outlined text-zinc-400">search</span>
          </button>
          <div className="w-10 h-10 rounded-full border border-white/10 p-0.5 overflow-hidden active:scale-95 transition-transform cursor-pointer">
            <img alt="User profile avatar" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPdL5ePkaQznURBu5uRqsxa0B0Sov2NlgI-SbxkAwfnzKBLLok5XnQzHARP0C2KHaQisj1xxH5TpGyXtmsyJcyn6ug6-zoKNcv4795_XvTc3ddGLnHYG2BHE0NkeVfFVb-4DPz00Obyq8yFe_Upb5FFnjv_hXYnASLDBb3hJx-oMJjzerZP6EujyhqKAJnnwiRrnwZ8jR4-pFQyV4Wvf7kUX39NcnBAW2jrf3kCpL--GUuS0cwEFhJCIZfVI-MpDz-Hk8HRMZ7fknE"/>
          </div>
        </div>
      </header>

      <div className="flex pt-20">
        {/* NavigationDrawer (Sidebar) */}
        <aside className="fixed left-0 top-0 h-full pt-20 flex flex-col w-64 border-r border-zinc-800/30 bg-[#0e0e0f] bg-zinc-900/50 hidden md:flex z-40">
          <div className="px-6 py-8">
            <h2 className="text-lg font-black text-white font-lexend tracking-wide mb-8">Observatory</h2>
            <nav className="space-y-2">
              <Link to="/library" className="flex items-center gap-4 px-4 py-3 rounded-lg text-[#a1a6ff] bg-indigo-500/10 border-r-4 border-[#a1a6ff] font-lexend text-sm tracking-wide transition-colors duration-200">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
                <span>Library</span>
              </Link>
              <Link to="/create" className="flex items-center gap-4 px-4 py-3 rounded-lg text-zinc-500 hover:bg-zinc-800/50 hover:text-white font-lexend text-sm tracking-wide transition-colors duration-200">
                <span className="material-symbols-outlined">add_circle</span>
                <span>Create</span>
              </Link>
              <Link to="/dashboard" className="flex items-center gap-4 px-4 py-3 rounded-lg text-zinc-500 hover:bg-zinc-800/50 hover:text-white font-lexend text-sm tracking-wide transition-colors duration-200">
                <span className="material-symbols-outlined">dashboard</span>
                <span>Dashboard</span>
              </Link>
              <Link to="/leaderboard" className="flex items-center gap-4 px-4 py-3 rounded-lg text-zinc-500 hover:bg-zinc-800/50 hover:text-white font-lexend text-sm tracking-wide transition-colors duration-200">
                <span className="material-symbols-outlined">leaderboard</span>
                <span>Leaderboard</span>
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 md:ml-64 px-6 md:px-12 py-10 min-h-screen">
          {/* Search & Filter Section */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="mb-10">
              <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-on-surface">Explore Knowledge</h2>
              <p className="text-on-surface-variant max-w-xl text-lg">Challenge your intellect across vast galaxies of data. Choose your path through the celestial library.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Glassmorphic Search Bar */}
              <div className="relative w-full md:flex-1 group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input className="w-full bg-surface-container-lowest border-none outline-none py-5 pl-14 pr-6 rounded-2xl text-lg focus:ring-0 placeholder:text-zinc-600 font-body transition-all focus:bg-surface-container-low shadow-inner" placeholder="Search quizzes by title or category..." type="text"/>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary group-focus-within:w-full transition-all duration-500"></div>
              </div>
              {/* Difficulty Filters */}
              <div className="flex p-1.5 bg-surface-container-high rounded-full border border-white/5">
                <button className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary text-on-primary shadow-lg transition-all">All</button>
                <button className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-all">Easy</button>
                <button className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-all">Medium</button>
                <button className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-all">Hard</button>
              </div>
            </div>
          </div>

          {/* Quiz Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quiz Card 1 */}
              <div className="glass-card rounded-lg overflow-hidden flex flex-col group hover:scale-[1.02] transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVFQ7c9RICf9KLjcC7k_vPvLvwZFRynCVp6PK0p8SdGnb9I-CGi3u-7B6uiPDIFqBVFyY6eRDQcRT9Y56-M5D3rZzQmCqdZ77vTwVoxKEC8ZOcAPhhG1BmlAdUvw4MKb01ONeE4zBlntLK3gMBieERSIzYtA5KdtViwjOVNugJ7gJx9BvaI9Q9qPZhfUPmI4id7C9rytjibL0z8Hjy-svuVjvZdHb6NwGhMtb7bPIVODR2tEFCsGoiMzex5yXsy9XFsMQMszCIbi2n" alt="Thumbnail"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4 bg-tertiary/10 backdrop-blur-md text-tertiary border border-tertiary/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Physics</div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">Quantum Mechanics 101</h3>
                    <div className="flex items-center gap-1 text-zinc-500">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-xs font-medium">4.9</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-lg">help_center</span>
                      <span className="text-sm">20 Questions</span>
                    </div>
                    <div className="flex items-center gap-2 text-secondary">
                      <span className="material-symbols-outlined text-lg">speed</span>
                      <span className="text-sm font-semibold">Hard</span>
                    </div>
                  </div>
                  <Link to="/play" className="w-full py-4 rounded-full neon-btn text-on-primary font-bold tracking-wide uppercase text-xs active:scale-95 transition-transform flex items-center justify-center gap-2">
                    Attempt Now
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Quiz Card 2 */}
              <div className="glass-card rounded-lg overflow-hidden flex flex-col group hover:scale-[1.02] transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdIVP96RrnsIKi5CxiMuaKdAgzRlKaVav-fff1UDxUdPtMHpdIrQPYsGcVoN2dhTALZXI8o-AT6osbR6tuVvUIuy0jNxcCfiiwbI11ZwYBcMDzC4H5Vf5L5OnqOIx8TZFO0_ObFveVuYui_PuQUTH1M4KchFy_AYJ7by_gDii7O8GKzMGW5Rk-fWI0w1UExKxfFrruSqbF7cZF5qyfMZEqxhpLsni_DILHa56g_eRXa0lC1wj-9UAn165yToxCsaDeOJ09SSH1FpPW" alt="Thumbnail"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4 bg-primary/10 backdrop-blur-md text-primary border border-primary/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Tech</div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">Future of AI Ethics</h3>
                    <div className="flex items-center gap-1 text-zinc-500">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-xs font-medium">4.7</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-lg">help_center</span>
                      <span className="text-sm">15 Questions</span>
                    </div>
                    <div className="flex items-center gap-2 text-tertiary-dim">
                      <span className="material-symbols-outlined text-lg">speed</span>
                      <span className="text-sm font-semibold">Easy</span>
                    </div>
                  </div>
                  <Link to="/play" className="w-full py-4 rounded-full neon-btn text-on-primary font-bold tracking-wide uppercase text-xs active:scale-95 transition-transform flex items-center justify-center gap-2">
                    Attempt Now
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Quiz Card 3 */}
              <div className="glass-card rounded-lg overflow-hidden flex flex-col group hover:scale-[1.02] transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOHokzcNMS2LSDfAzHEtJ-X4uBr0-rKt6N2yKd3eJgV000elZfCTrmBI-YYxW5TR9_-AqBZEfR60x0TapDTxmp300I6RKAwmaD4Z6WcgrX0JQoXk8imwUlovl6GqM4gfyAjgucD2KIlNR2864gID3_qvcuhpndf6W1RCPDlGV4Y-cWQSHG_c0X7GrkIQUtvDu_ckHOji37mSYpns3opYcNT5P3oMMMaMEV6QAvFFSKWbYYpE3QgYFCIJ6-8TbmCmK4c_vpgQSC3-LZ" alt="Thumbnail"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4 bg-secondary/10 backdrop-blur-md text-secondary border border-secondary/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Science</div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">Genetic Horizons</h3>
                    <div className="flex items-center gap-1 text-zinc-500">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-xs font-medium">4.8</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-lg">help_center</span>
                      <span className="text-sm">12 Questions</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-container">
                      <span className="material-symbols-outlined text-lg">speed</span>
                      <span className="text-sm font-semibold">Medium</span>
                    </div>
                  </div>
                  <Link to="/play" className="w-full py-4 rounded-full neon-btn text-on-primary font-bold tracking-wide uppercase text-xs active:scale-95 transition-transform flex items-center justify-center gap-2">
                    Attempt Now
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Empty State */}
            <div className="hidden flex-col items-center justify-center py-24 text-center">
              <div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center mb-6 border border-white/5">
                <span className="material-symbols-outlined text-5xl text-zinc-600">search_off</span>
              </div>
              <h4 className="text-2xl font-headline font-bold text-white mb-2">No Quizzes Found</h4>
              <p className="text-on-surface-variant max-w-xs mx-auto">We couldn't find any results for your search. Try adjusting your filters or keywords.</p>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[#0e0e0f] w-full py-12 md:pl-64 border-t border-zinc-800/30 flex flex-col md:flex-row items-center justify-between px-10 gap-4 mt-20">
        <p className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em]">© 2024 Luminous Noir. All rights reserved.</p>
        <div className="flex gap-8">
          <a className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em] hover:text-indigo-400 transition-opacity" href="#">Privacy</a>
          <a className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em] hover:text-indigo-400 transition-opacity" href="#">Terms</a>
          <a className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em] hover:text-indigo-400 transition-opacity" href="#">Support</a>
        </div>
      </footer>

      {/* Mobile Bottom NavBar */}
      <nav className="md:hidden fixed bottom-0 w-full bg-zinc-900/80 backdrop-blur-xl border-t border-white/10 px-6 py-3 flex justify-between items-center z-50">
        <button className="flex flex-col items-center gap-1 text-[#a1a6ff]">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Library</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-500">
          <span className="material-symbols-outlined">add_circle</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Create</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-500">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Dash</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-500">
          <span className="material-symbols-outlined">leaderboard</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Rank</span>
        </button>
      </nav>
    </div>
  );
};

export default QuizLibrary;
