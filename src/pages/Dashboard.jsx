import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="bg-background text-on-background min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-zinc-900/40 backdrop-blur-xl docked z-50 border-b border-white/10 shadow-[0_0_40px_-10px_rgba(161,166,255,0.08)]">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-indigo-400" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
          <h1 className="font-lexend font-bold tracking-tight text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#a1a6ff] to-[#5860ff]">Luminous Quiz</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-zinc-400 hover:bg-white/5 p-2 rounded-full transition-all duration-300 active:scale-95">search</button>
          <button className="material-symbols-outlined text-zinc-400 hover:bg-white/5 p-2 rounded-full transition-all duration-300 active:scale-95">notifications</button>
          <div className="w-10 h-10 rounded-full overflow-hidden border border-indigo-500/30">
            <img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQOjv4nlHIOr_lx8F6jqhBXCdBNYaJcPaIFhsFIq_wDbIc25uJHs6o9LbxcuI_0_ULtsEXfzPxhN5ztrlSDBrFuRFjK3hDgxOqKD8uahT7ZHdl6GG-FZg0b1MT2hZfLAVAj2k-mczo-08lz6fB0E2j42imWGoz5IINULwieOSB9mOU9OM7cDHElRZpjdKzsGRLg73HbENNwU57yX2AzHoila4MvxF_JeRIYl2UiV8-gSVthqtWi0YpZsfBtI27FHD-QSefcPOGiXgJ"/>
          </div>
        </div>
      </header>

      {/* NavigationDrawer */}
      <aside className="fixed left-0 top-0 h-full pt-20 flex flex-col w-64 border-r border-zinc-800/30 bg-[#0e0e0f] z-40">
        <div className="px-6 py-4">
          <h2 className="text-lg font-black text-white font-lexend">Observatory</h2>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          <Link to="/library" className="flex items-center gap-3 px-4 py-3 font-lexend text-sm tracking-wide text-zinc-500 hover:bg-zinc-800/50 hover:text-white transition-colors duration-200 rounded-lg">
            <span className="material-symbols-outlined">auto_stories</span>
            Library
          </Link>
          <Link to="/create" className="flex items-center gap-3 px-4 py-3 font-lexend text-sm tracking-wide text-zinc-500 hover:bg-zinc-800/50 hover:text-white transition-colors duration-200 rounded-lg">
            <span className="material-symbols-outlined">add_circle</span>
            Create
          </Link>
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 font-lexend text-sm tracking-wide text-[#a1a6ff] bg-indigo-500/10 border-r-4 border-[#a1a6ff] transition-colors duration-200">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </Link>
          <Link to="/leaderboard" className="flex items-center gap-3 px-4 py-3 font-lexend text-sm tracking-wide text-zinc-500 hover:bg-zinc-800/50 hover:text-white transition-colors duration-200 rounded-lg">
            <span className="material-symbols-outlined">leaderboard</span>
            Leaderboard
          </Link>
        </nav>
        <div className="p-6">
          <div className="glass-card p-4 rounded-lg bg-surface-container-high/40">
            <p className="text-xs text-on-surface-variant font-label mb-2">PRO PLAN</p>
            <p className="text-sm font-body text-white mb-3">Unlock unlimited quizes and analytics.</p>
            <button className="w-full py-2 bg-gradient-to-r from-primary to-primary-dim text-on-primary text-xs font-bold rounded-full active:scale-95 transition-transform">UPGRADE</button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 pt-24 pb-12 px-10 min-h-screen">
        {/* Welcome Header */}
        <header className="mb-12">
          <h2 className="font-headline text-[3.5rem] font-bold -tracking-[0.02em] leading-tight text-white mb-2">Hello, Alex!</h2>
          <p className="font-body text-on-surface-variant text-lg">Your cognitive expedition is progressing at a superior pace.</p>
        </header>

        {/* Stats Grid (Bento Style) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-8 rounded-lg neon-glow relative overflow-hidden group hover:bg-surface-bright transition-all duration-300">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-secondary mb-4">menu_book</span>
              <p className="font-label text-on-surface-variant text-[0.75rem] tracking-[0.05em]">TOTAL QUIZZES CREATED</p>
              <h3 className="font-headline text-5xl font-bold mt-2">12</h3>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[8rem]">menu_book</span>
            </div>
          </div>
          <div className="glass-card p-8 rounded-lg neon-glow relative overflow-hidden group hover:bg-surface-bright transition-all duration-300">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary mb-4">bolt</span>
              <p className="font-label text-on-surface-variant text-[0.75rem] tracking-[0.05em]">TOTAL ATTEMPTS</p>
              <h3 className="font-headline text-5xl font-bold mt-2">45</h3>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[8rem]">bolt</span>
            </div>
          </div>
          <div className="glass-card p-8 rounded-lg neon-glow relative overflow-hidden group hover:bg-surface-bright transition-all duration-300">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-tertiary mb-4">trending_up</span>
              <p className="font-label text-on-surface-variant text-[0.75rem] tracking-[0.05em]">AVG SCORE</p>
              <h3 className="font-headline text-5xl font-bold mt-2">78<span className="text-2xl">%</span></h3>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[8rem]">trending_up</span>
            </div>
          </div>
        </section>

        {/* Insights and Activity Section */}
        <section className="asymmetric-grid gap-10">
          {/* Performance Trends Chart */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-headline text-[1.75rem] font-medium text-white">Performance Trends</h3>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs text-on-surface-variant border border-white/5">Week</span>
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs font-semibold border border-indigo-500/30">Month</span>
              </div>
            </div>
            <div className="glass-card p-8 rounded-lg h-80 flex flex-col justify-end">
              {/* Simple Mock Bar Chart */}
              <div className="flex items-end justify-between h-full gap-4">
                <div className="w-full bg-surface-container relative group">
                  <div className="absolute bottom-0 w-full bg-indigo-500/20 group-hover:bg-indigo-500/40 transition-all rounded-t-sm" style={{height: '40%'}}></div>
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-primary-dim to-primary rounded-t-sm" style={{height: '25%'}}></div>
                </div>
                <div className="w-full bg-surface-container relative group">
                  <div className="absolute bottom-0 w-full bg-indigo-500/20 group-hover:bg-indigo-500/40 transition-all rounded-t-sm" style={{height: '60%'}}></div>
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-primary-dim to-primary rounded-t-sm" style={{height: '45%'}}></div>
                </div>
                <div className="w-full bg-surface-container relative group">
                  <div className="absolute bottom-0 w-full bg-indigo-500/20 group-hover:bg-indigo-500/40 transition-all rounded-t-sm" style={{height: '50%'}}></div>
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-primary-dim to-primary rounded-t-sm" style={{height: '38%'}}></div>
                </div>
                <div className="w-full bg-surface-container relative group">
                  <div className="absolute bottom-0 w-full bg-indigo-500/20 group-hover:bg-indigo-500/40 transition-all rounded-t-sm" style={{height: '85%'}}></div>
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-primary-dim to-primary rounded-t-sm" style={{height: '72%'}}></div>
                </div>
                <div className="w-full bg-surface-container relative group">
                  <div className="absolute bottom-0 w-full bg-indigo-500/20 group-hover:bg-indigo-500/40 transition-all rounded-t-sm" style={{height: '55%'}}></div>
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-primary-dim to-primary rounded-t-sm" style={{height: '40%'}}></div>
                </div>
                <div className="w-full bg-surface-container relative group">
                  <div className="absolute bottom-0 w-full bg-indigo-500/20 group-hover:bg-indigo-500/40 transition-all rounded-t-sm" style={{height: '90%'}}></div>
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-primary-dim to-primary rounded-t-sm" style={{height: '78%'}}></div>
                </div>
                <div className="w-full bg-surface-container relative group">
                  <div className="absolute bottom-0 w-full bg-indigo-500/20 group-hover:bg-indigo-500/40 transition-all rounded-t-sm" style={{height: '75%'}}></div>
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-primary-dim to-primary rounded-t-sm" style={{height: '65%'}}></div>
                </div>
              </div>
              <div className="flex justify-between mt-6 text-[10px] text-on-surface-variant font-label">
                <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-headline text-[1.75rem] font-medium text-white">Recent Activity</h3>
              <button className="text-xs text-primary font-label hover:underline">VIEW ALL</button>
            </div>
            <div className="space-y-4">
              {/* Activity Card 1 */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <span className="material-symbols-outlined text-primary">psychology</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-body text-sm font-semibold text-white">Quantum Physics Basics</h4>
                  <p className="text-xs text-on-surface-variant">Played 2 hours ago</p>
                </div>
                {/* <div className="text-right"> */}
                <div className="text-right">
                  
                  <div className="text-sm font-lexend font-bold text-tertiary">92%</div>
                  <div className="text-[10px] text-on-surface-variant font-label">A+ GRADE</div>
                </div>
              </div>
              {/* Activity Card 2 */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary">architecture</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-body text-sm font-semibold text-white">Art Deco Movements</h4>
                  <p className="text-xs text-on-surface-variant">Played yesterday</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-lexend font-bold text-secondary">74%</div>
                  <div className="text-[10px] text-on-surface-variant font-label">B GRADE</div>
                </div>
              </div>
              {/* Activity Card 3 */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
                  <span className="material-symbols-outlined text-tertiary">language</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-body text-sm font-semibold text-white">Global Geopolitics</h4>
                  <p className="text-xs text-on-surface-variant">Played 3 days ago</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-lexend font-bold text-primary">68%</div>
                  <div className="text-[10px] text-on-surface-variant font-label">C GRADE</div>
                </div>
              </div>
            </div>

            {/* Call to Action Card */}
            <div className="relative rounded-lg overflow-hidden h-32 flex items-center p-6 bg-surface-container">
              <img alt="Promo background" className="absolute inset-0 w-full h-full object-cover opacity-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZnZBPnqkvOhyu_b6qkCoXYXCNYfcrXZXf7BQ50g3mRCOb01Oqtaigm-7WvKNIu1x8hmli-j1-GQDo1nEKvSQU8z1FZ2_JFrdhmdJpVN-YKnxTBwPaWHk46FIlXJU2A3kKZd_CxJNQ83qAt82rqHxtcDFp9sGcU8mFNhKf9jtrNjfAiOEbY9N6M7uYNxJMx2m7eVZG1ECpnzwJO6wJsK4tpOmPbBfe68lLpUSizH-7t5zm-uyNORBKYTyHxy4asZ3Jz8-wfwG38mwq"/>
              <div className="relative z-10 flex items-center justify-between w-full">
                <div>
                  <p className="text-white font-bold font-headline text-lg">Ready for a new challenge?</p>
                  <p className="text-on-surface-variant text-xs">Explore the trending library.</p>
                </div>
                <button className="px-6 py-2 bg-white text-black font-bold text-xs rounded-full hover:scale-105 transition-transform active:scale-95">GO EXPLORE</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="ml-64 flex flex-col md:flex-row items-center justify-between px-10 gap-4 py-12 bg-[#0e0e0f] border-t border-zinc-800/30">
        <p className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em]">© 2024 Luminous Noir. All rights reserved.</p>
        <div className="flex gap-8">
          <a className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em] hover:text-indigo-400 transition-opacity" href="#">Privacy</a>
          <a className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em] hover:text-indigo-400 transition-opacity" href="#">Terms</a>
          <a className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em] hover:text-indigo-400 transition-opacity" href="#">Support</a>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
