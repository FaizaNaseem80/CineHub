import React from 'react';
import { Download, Filter, Trash2 } from 'lucide-react';

const UserLogs = () => {
  const logs = [
    { id: 1, user: "alex_smith", action: "Login", ip: "192.168.1.1", status: "Success", time: "2026-01-09 14:20" },
    { id: 2, user: "sarah_j", action: "Subscription Upgrade", ip: "102.14.52.1", status: "Completed", time: "2026-01-09 13:45" },
    { id: 3, user: "mike_r", action: "Password Change", ip: "45.22.11.0", status: "Warning", time: "2026-01-09 12:10" },
    { id: 4, user: "unknown", action: "Failed Login", ip: "210.15.0.2", status: "Failed", time: "2026-01-09 11:30" },
    { id: 5, user: "admin_01", action: "Deleted Movie ID: #44", ip: "192.168.1.5", status: "Admin Action", time: "2026-01-09 10:05" },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Success': 
      case 'Completed': 
        return 'bg-green-500/10 text-green-600 dark:text-green-500 border-green-200 dark:border-green-500/20';
      case 'Failed': 
        return 'bg-red-500/10 text-red-600 dark:text-red-500 border-red-200 dark:border-red-500/20';
      case 'Warning': 
        return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 border-yellow-200 dark:border-yellow-500/20';
      case 'Admin Action': 
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-500 border-purple-200 dark:border-purple-500/20';
      default: 
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-500 border-blue-200 dark:border-blue-500/20';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Control Bar */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm dark:shadow-none">
            <Filter size={16} /> Filter Logs
          </button>
          <button className="flex items-center gap-2 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm dark:shadow-none">
            <Download size={16} /> Export CSV
          </button>
        </div>
        <button className="flex items-center gap-2 text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 text-sm font-bold px-4 transition-colors">
          <Trash2 size={16} /> Clear All Logs
        </button>
      </div>

      {/* Logs Table */}
      <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm dark:shadow-none">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-[#262626]/50 border-b border-gray-200 dark:border-gray-800">
                <th className="p-4 text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">User</th>
                <th className="p-4 text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">Action</th>
                <th className="p-4 text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">IP Address</th>
                <th className="p-4 text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">Status</th>
                <th className="p-4 text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4">
                    <span className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">@{log.user}</span>
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300 font-medium">{log.action}</td>
                  <td className="p-4 text-sm text-gray-400 dark:text-gray-500 font-mono italic">{log.ip}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase border ${getStatusStyle(log.status)}`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-400 dark:text-gray-500 font-medium">{log.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:row justify-between items-center gap-4 bg-gray-50/50 dark:bg-[#1a1a1a]">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Showing 5 of 1,240 results</p>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold hover:bg-gray-300 dark:hover:bg-gray-700 transition-all disabled:opacity-50">
              Prev
            </button>
            <button className="px-4 py-1.5 rounded-lg bg-red-600 text-white text-xs font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogs;