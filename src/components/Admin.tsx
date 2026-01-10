import React, { useState, useEffect } from 'react';
import { 
  LogOut, LayoutDashboard, Users, Film, ListOrdered, 
  Settings as SettingsIcon, Bell, Search, ChevronLeft, 
  ChevronRight, Sun, Moon 
} from 'lucide-react';

// Imports
import UserLogs from './admin/UserLogs';
import SettingsPage from './admin/Settings'; 
import GenreCategory from './admin/GenreCategory'; 
import UserManagement from './admin/UserManagement';
import DashboardOverview from './admin/DashboardAdmin';

export const Admin = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Sync theme with HTML class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'User Logs', icon: <ListOrdered size={20} /> },
    { name: 'User Management', icon: <Users size={20} /> },
    { name: 'Genre & Category', icon: <Film size={20} /> },
    { name: 'Settings', icon: <SettingsIcon size={20} /> },
  ];

  return (
    <div className="flex h-screen transition-colors duration-300 bg-gray-50 dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100 font-sans overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white dark:bg-[#1a1a1a] transition-all duration-300 border-r border-gray-200 dark:border-gray-800 flex flex-col z-20 shrink-0`}>
        <div className="p-6 flex items-center gap-3">
          <div className="bg-red-600 p-1.5 rounded-lg shrink-0 shadow-lg shadow-red-600/20">
            <Film className="text-white" size={24} />
          </div>
          {isSidebarOpen && <span className="text-xl font-black tracking-tighter italic dark:text-white text-black">CINEHUB</span>}
        </div>

        <nav className="mt-6 px-4 flex-1 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`flex items-center gap-4 w-full p-3 rounded-xl transition-all duration-300 group ${
                activeTab === item.name 
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' 
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-red-600'
              }`}
            >
              <span className="shrink-0">{item.icon}</span>
              {isSidebarOpen && <span className="font-bold text-xs uppercase tracking-widest">{item.name}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <button className="flex items-center gap-4 w-full p-3 text-gray-400 hover:text-red-500 transition-colors">
            <LogOut size={20} />
            {isSidebarOpen && <span className="text-xs font-bold uppercase tracking-widest">Logout</span>}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 relative">
        
        {/* TOP HEADER */}
        <header className="h-16 bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-8 shrink-0 z-10">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-gray-400">
              {isSidebarOpen ? <ChevronLeft size={20}/> : <ChevronRight size={20}/>}
            </button>
            <div className="flex items-center gap-3 bg-gray-100 dark:bg-[#262626] px-4 py-2 rounded-full w-64 lg:w-96 border border-transparent focus-within:border-red-500/50 transition-all">
              <Search size={16} className="text-gray-400" />
              <input type="text" placeholder="Search system..." className="bg-transparent border-none focus:ring-0 text-xs w-full outline-none placeholder:text-gray-500 dark:text-white text-black" />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* THEME TOGGLE */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-yellow-400 hover:scale-110 transition-all"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="relative text-gray-400 hover:text-red-500 transition-colors">
              <Bell size={20} />
              <span className="absolute -top-0.5 -right-0.5 bg-red-600 w-2 h-2 rounded-full border-2 border-white dark:border-[#1a1a1a]"></span>
            </button>
            
            <div className="flex items-center gap-3 border-l border-gray-200 dark:border-gray-800 pl-6">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-black text-gray-900 dark:text-white">ADMIN_MASTER</p>
                <p className="text-[9px] text-gray-400 font-bold uppercase">CineHub Ops</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center font-black text-xs text-white shadow-lg">AD</div>
            </div>
          </div>
        </header>

        {/* SCROLLABLE PAGE CONTENT */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-gray-50 dark:bg-[#0f0f0f]">
          <div className="mb-10">
            <div className="flex items-center gap-2 text-red-500 mb-1">
               <div className="h-1 w-8 bg-red-600 rounded-full"></div>
               <span className="text-[10px] font-black uppercase tracking-widest">CineHub Management</span>
            </div>
            <h1 className="text-4xl font-black tracking-tighter uppercase italic text-gray-900 dark:text-white">{activeTab}</h1>
          </div>

          <div className="relative">
            {activeTab === 'Dashboard' && <DashboardOverview />}
            {activeTab === 'User Logs' && <UserLogs />}
            {activeTab === 'User Management' && <UserManagement />}
            {activeTab === 'Genre & Category' && <GenreCategory />}
            {activeTab === 'Settings' && <SettingsPage />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;