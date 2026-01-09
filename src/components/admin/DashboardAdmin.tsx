import React from 'react';
import { 
  TrendingUp, Users, Film, DollarSign, 
  ArrowUpRight, ArrowDownRight, Activity, Play 
} from 'lucide-react';

const DashboardAdmin = () => {
  const stats = [
    { label: 'Total Users', value: '24,512', change: '+12%', icon: <Users size={20} />, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Active Subs', value: '18,200', change: '+5%', icon: <Activity size={20} />, color: 'text-green-500', bg: 'bg-green-500/10' },
    { label: 'Total Movies', value: '1,402', change: '+24', icon: <Film size={20} />, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { label: 'Revenue', value: '$45,230', change: '+8%', icon: <DollarSign size={20} />, color: 'text-red-500', bg: 'bg-red-500/10' },
  ];

  const recentActivity = [
    { id: 1, user: "John Doe", action: "Subscribed to Premium", time: "2 mins ago", type: "success" },
    { id: 2, user: "The Batman", action: "New movie uploaded", time: "15 mins ago", type: "upload" },
    { id: 3, user: "Sarah Smith", action: "Reported a playback issue", time: "1 hour ago", type: "warning" },
    { id: 4, user: "System", action: "Server backup completed", time: "4 hours ago", type: "info" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      
      {/* 1. STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-[#1a1a1a] p-6 rounded-3xl border border-gray-200 dark:border-gray-800 hover:border-red-600/30 transition-all group shadow-sm dark:shadow-none">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                {stat.icon}
              </div>
              <span className={`flex items-center text-[10px] font-black px-2 py-1 rounded-full ${
                stat.change.includes('+') ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
              }`}>
                {stat.change}
                {stat.change.includes('+') ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
              </span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-3xl font-black tracking-tighter text-gray-900 dark:text-white">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 2. ANALYTICS CHART PLACEHOLDER */}
        <div className="lg:col-span-2 bg-white dark:bg-[#1a1a1a] rounded-3xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm dark:shadow-none">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Revenue Analytics</h3>
              <p className="text-xs text-gray-500">Platform earnings over the last 30 days</p>
            </div>
            <select className="bg-gray-50 dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 text-xs font-bold outline-none text-gray-900 dark:text-gray-300">
              <option>Last 30 Days</option>
              <option>Last 6 Months</option>
            </select>
          </div>
          
          <div className="h-64 w-full flex items-end gap-2 px-2">
            {[40, 70, 55, 90, 65, 80, 95, 70, 100, 85, 90, 110].map((height, i) => (
              <div key={i} className="flex-1 bg-red-600/20 dark:bg-red-600/10 border-t-2 border-red-600/40 dark:border-red-600/20 rounded-t-md hover:bg-red-600/40 dark:hover:bg-red-600/40 transition-all cursor-pointer group relative" style={{ height: `${height}%` }}>
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  ${height}k
                 </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest px-2">
            <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
          </div>
        </div>

        {/* 3. RECENT ACTIVITY FEED */}
        <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm dark:shadow-none">
          <div className="flex items-center gap-2 mb-6">
             <Activity size={18} className="text-red-500" />
             <h3 className="text-lg font-bold text-gray-900 dark:text-white">Live Feed</h3>
          </div>
          
          <div className="space-y-6">
            {recentActivity.map((log) => (
              <div key={log.id} className="flex gap-4 relative">
                <div className="relative z-10">
                  {/* Icon circle handles theme with dark: border-color */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-white dark:border-[#1a1a1a] ${
                    log.type === 'success' ? 'bg-green-500' : 
                    log.type === 'upload' ? 'bg-blue-500' : 
                    log.type === 'warning' ? 'bg-orange-500' : 'bg-gray-600'
                  }`}>
                    <Play size={12} className="text-white fill-current" />
                  </div>
                </div>
                <div className="flex-1 border-b border-gray-100 dark:border-gray-800 pb-4">
                  <div className="flex justify-between items-start">
                    <p className="text-xs font-bold text-gray-800 dark:text-gray-200">{log.user}</p>
                    <span className="text-[10px] text-gray-400 dark:text-gray-600 italic">{log.time}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">{log.action}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-3 bg-gray-50 dark:bg-[#0f0f0f] hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all text-gray-500 dark:text-gray-400">
            View All System Logs
          </button>
        </div>

      </div>
    </div>
  );
};

export default DashboardAdmin;