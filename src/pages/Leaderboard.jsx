import React from 'react';
import { Link } from 'react-router-dom';

const Leaderboard = () => {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-zinc-900/40 backdrop-blur-xl border-b border-white/10 shadow-[0_0_40px_-10px_rgba(161,166,255,0.08)] z-50">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-indigo-400">explore</span>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#a1a6ff] to-[#5860ff] font-lexend tracking-tight">Luminous Quiz</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-6 text-sm font-lexend tracking-wide">
            <Link to="/library" className="text-zinc-400 hover:bg-white/5 transition-all duration-300 px-3 py-1 rounded-full">Library</Link>
            <Link to="/create" className="text-zinc-400 hover:bg-white/5 transition-all duration-300 px-3 py-1 rounded-full">Create</Link>
            <Link to="/dashboard" className="text-zinc-400 hover:bg-white/5 transition-all duration-300 px-3 py-1 rounded-full">Dashboard</Link>
            <Link to="/leaderboard" className="text-[#a1a6ff] font-semibold">Leaderboard</Link>
          </div>
          <img alt="User Profile" className="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5 active:scale-95 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBALvR3Edida3lP-yPs7PiFYl4ZZR4RiMsA0hfnTrojqS-XTiX454SuqPiivqRN6sraX8ilzXH-2f44DvKCPe5ew7L6ic1j_oKrGSsEVmG4Q5J2kpaKWy-Nr9Pkf2Dt1xZobkdqcdWda4IbwCWWPlSCh4HqgW4m6FR9sAKhWxAJFXLU4KGPCSb7FPXm1IypJ-2zlDc_JcRdHeaQBcLkCk2_LZI5hzRd9xmGdGXehjjOTv271veu4b3GQQ5h1tYP89fD-Tbacodp5CJS"/>
        </div>
      </header>

      {/* NavigationDrawer */}
      <aside className="fixed left-0 top-0 h-full pt-20 flex flex-col bg-[#0e0e0f] w-64 border-r border-zinc-800/30 hidden md:flex z-40">
        <div className="px-6 py-8">
          <h2 className="text-lg font-black text-white font-lexend mb-8">Observatory</h2>
          <nav className="space-y-2">
            <Link to="/library" className="flex items-center gap-3 px-4 py-3 rounded-lg font-lexend text-sm tracking-wide text-zinc-500 hover:bg-zinc-800/50 hover:text-white transition-colors duration-200">
              <span className="material-symbols-outlined">auto_stories</span>
              Library
            </Link>
            <Link to="/create" className="flex items-center gap-3 px-4 py-3 rounded-lg font-lexend text-sm tracking-wide text-zinc-500 hover:bg-zinc-800/50 hover:text-white transition-colors duration-200">
              <span className="material-symbols-outlined">add_circle</span>
              Create
            </Link>
            <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg font-lexend text-sm tracking-wide text-zinc-500 hover:bg-zinc-800/50 hover:text-white transition-colors duration-200">
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </Link>
            <Link to="/leaderboard" className="flex items-center gap-3 px-4 py-3 rounded-lg font-lexend text-sm tracking-wide text-[#a1a6ff] bg-indigo-500/10 border-r-4 border-[#a1a6ff] transition-colors duration-200">
              <span className="material-symbols-outlined">leaderboard</span>
              Leaderboard
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pt-24 md:pl-64 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Header Section */}
          <div className="mb-16">
            <h2 className="text-[3.5rem] font-bold font-headline tracking-tighter text-on-surface mb-4 leading-none">Global Rankings</h2>
            <p className="text-on-surface-variant max-w-xl text-lg font-body">Witness the elite minds of the Observatory. The most brilliant stars shine brightest in our constellation.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
            <div className="flex p-1 bg-surface-container-low rounded-full border border-white/5">
              <button className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 text-on-surface-variant hover:text-on-surface">Today</button>
              <button className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-primary/10 text-primary border border-primary/20">This Week</button>
              <button className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 text-on-surface-variant hover:text-on-surface">All Time</button>
            </div>
            <div className="flex items-center gap-4 text-sm text-on-surface-variant font-label tracking-wider">
              <span>LAST UPDATED: 2 MINS AGO</span>
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_8px_#00fc9a]"></span>
            </div>
          </div>

          {/* Podium Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-end">
            {/* 2nd Place */}
            <div className="order-2 md:order-1 flex flex-col items-center">
              <div className="relative group mb-6">
                <div className="absolute -inset-1 bg-gradient-to-b from-zinc-400 to-transparent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative">
                  <img alt="Rank 2" className="w-24 h-24 rounded-full border-4 border-zinc-500/30 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0qbdgoOluHXgMF2S6vUYkCJK6mPvC4jm6NXdgeGFyrEGoTnAgStI_JPWP60iMaswDqd6xF44q6gTzgBLoKt6MTxxvCrd3cK8nm3zB-z3kPSLlne0wOrgJCEPte3hr8SrmRDgVyzzYwiqQEpVRq_WWLGcA5cQyRdbA_uL01qYxRzhBYStjKzgSRqkuSHInXK8ZHtxXhS2yAyQ0CQI9pr4cad3qf5zn1ZvTIe-Og01m6Dc94cPlogNhkhhxbGtvzqVzVmPwsHzF32C4"/>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-zinc-500 flex items-center justify-center text-black font-bold text-xs">2</div>
                </div>
              </div>
              <h3 className="text-xl font-headline font-bold text-white mb-1">Elias Thorne</h3>
              <p className="text-primary font-lexend font-bold text-lg">12,450 pts</p>
            </div>
            
            {/* 1st Place */}
            <div className="order-1 md:order-2 flex flex-col items-center">
              <div className="relative group mb-8 scale-110">
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition duration-500"></div>
                <div className="relative">
                  <img alt="Rank 1" className="w-32 h-32 rounded-full border-4 border-primary shadow-[0_0_30px_rgba(161,166,255,0.3)] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzcyecU361r6K0oHW5ujgkUqF5S0ucKxUVd0g256GIdwTuDuBhCybGXYvXcOzsDdQyYYq0imEhSHIdJnXamru_HoNIPjDw4vz5VQRvRHPIOYXGzw-qyelK5I-7S_b0UlP9QyXnDW1nQC6rSAhFD3BdIFX7OWwImmEYeHhaiiKJHkYqtodg2k7fScicdOLm1yAomSGmY27nkkKyf-UIhKYqTTy2LMzWOZBdcCAmfh5QF1vZzJWD8rQktEvs7_RQUc365ugLh66WA8lf"/>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-bold text-xs tracking-widest shadow-lg">CHAMPION</div>
                </div>
              </div>
              <h3 className="text-2xl font-headline font-extrabold text-white mb-1 neon-text-primary">Sarah Chen</h3>
              <p className="text-tertiary font-lexend font-bold text-xl">14,820 pts</p>
            </div>
            
            {/* 3rd Place */}
            <div className="order-3 md:order-3 flex flex-col items-center">
              <div className="relative group mb-6">
                <div className="absolute -inset-1 bg-gradient-to-b from-orange-400/50 to-transparent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative">
                  <img alt="Rank 3" className="w-24 h-24 rounded-full border-4 border-orange-700/30 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjOyXu0BV6uV7Xb1lZ23GDXZO-soRcKGzmeopywGosZ02-XG0c8p4DjLtUCcdAhGkJ6SAgbXGXh0H-9l_5Xgz-aV8s_lm7xD91zl25UqfZolgmu0epfiuFeW4wCs93pArmoUSkOd3kF41XQ6J1n5pBLcfTzEjhYVi1fcGTydjJmflFOA3_wkXuQFtnhc7OIOUtvBC0gF7MVm8NxALOjRjpY8CDN8EcrnKnCp2OjUWWJhMQsCUdUXffPVmFb3qeHn6LxYkjnALGop42"/>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-orange-700 flex items-center justify-center text-white font-bold text-xs">3</div>
                </div>
              </div>
              <h3 className="text-xl font-headline font-bold text-white mb-1">Marcus Void</h3>
              <p className="text-primary font-lexend font-bold text-lg">11,900 pts</p>
            </div>
          </div>

          {/* Leaderboard Table */}
          <div className="glass-card rounded-xl overflow-hidden border border-white/5">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-highest/50">
                <tr>
                  <th className="px-8 py-5 text-xs font-label tracking-widest text-on-surface-variant uppercase">Rank</th>
                  <th className="px-8 py-5 text-xs font-label tracking-widest text-on-surface-variant uppercase">User Name</th>
                  <th className="px-8 py-5 text-xs font-label tracking-widest text-on-surface-variant uppercase">Score</th>
                  <th className="px-8 py-5 text-xs font-label tracking-widest text-on-surface-variant uppercase">Badges</th>
                  <th className="px-8 py-5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="group hover:bg-white/5 transition-all duration-300">
                  <td className="px-8 py-6">
                    <span className="font-headline font-bold text-xl text-zinc-500 group-hover:text-white transition-colors">04</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-xs">JD</div>
                      <span className="font-semibold text-on-surface">Julian Darko</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="font-lexend font-bold text-primary">10,540</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex gap-2">
                      <span className="material-symbols-outlined text-tertiary text-lg">auto_awesome</span>
                      <span className="material-symbols-outlined text-secondary text-lg">workspace_premium</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="material-symbols-outlined text-zinc-600 group-hover:text-primary transition-colors">chevron_right</span>
                  </td>
                </tr>
                <tr className="group hover:bg-white/5 transition-all duration-300 bg-primary/5">
                  <td className="px-8 py-6">
                    <span className="font-headline font-bold text-xl text-primary transition-colors">05</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <img className="w-10 h-10 rounded-full border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpgG6zGUB29W9MKgdvFbw-AAklNYjTwVC3taJeh04xIl7IZ0Pnf2PVDlfzpLSBqZRVSDkeUbeAQHMkgFwJm4afRpqxvbWt0Zrc0AvcjkY3-3otSDgIOF3ozPVP2M29C1iw6IllMW8xetr99s-y6hJndypRUP3d7h2DKk4IJZIkTXgREgq8oAJlfQyfRbtM3Lu9isPT1YiFcUq6f3IQaTvYRMJ-0_67nrHu1U47RRCEP2KykHjvvYgm1gMCvvbKgNtBKIsiLOTenDkW" alt="Avatar"/>
                      <div>
                        <span className="font-semibold text-on-surface">Alex Mercer (You)</span>
                        <p className="text-[10px] text-primary-container font-label">TRENDING UP</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="font-lexend font-bold text-primary">9,820</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex gap-2">
                      <span className="material-symbols-outlined text-tertiary text-lg">bolt</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="material-symbols-outlined text-primary">chevron_right</span>
                  </td>
                </tr>
                <tr className="group hover:bg-white/5 transition-all duration-300">
                  <td className="px-8 py-6">
                    <span className="font-headline font-bold text-xl text-zinc-500 group-hover:text-white transition-colors">06</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-xs">SK</div>
                      <span className="font-semibold text-on-surface">Sanya Khan</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="font-lexend font-bold text-primary">9,110</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex gap-2">
                      <span className="material-symbols-outlined text-secondary text-lg">star</span>
                      <span className="material-symbols-outlined text-zinc-600 text-lg">verified</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="material-symbols-outlined text-zinc-600 group-hover:text-primary transition-colors">chevron_right</span>
                  </td>
                </tr>
                <tr className="group hover:bg-white/5 transition-all duration-300">
                  <td className="px-8 py-6">
                    <span className="font-headline font-bold text-xl text-zinc-500 group-hover:text-white transition-colors">07</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-xs">LR</div>
                      <span className="font-semibold text-on-surface">Leo Rodriguez</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="font-lexend font-bold text-primary">8,950</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex gap-2">
                      <span className="material-symbols-outlined text-tertiary text-lg">psychology</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="material-symbols-outlined text-zinc-600 group-hover:text-primary transition-colors">chevron_right</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer Section */}
          <footer className="mt-20 pt-12 border-t border-zinc-800/30 flex flex-col md:flex-row items-center justify-between gap-4 px-10 pb-12">
            <p className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em]">© 2024 Luminous Noir. All rights reserved.</p>
            <div className="flex gap-8">
              <a className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em] hover:text-indigo-400 transition-opacity" href="#">Privacy</a>
              <a className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em] hover:text-indigo-400 transition-opacity" href="#">Terms</a>
              <a className="font-inter text-xs text-zinc-500 uppercase tracking-[0.05em] hover:text-indigo-400 transition-opacity" href="#">Support</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;
