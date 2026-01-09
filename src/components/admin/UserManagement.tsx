import React, { useState } from 'react';
import { 
  Search, 
  UserPlus, 
  MoreVertical, 
  ShieldAlert, 
  UserCheck, 
  Mail, 
  Trash2, 
  Edit3,
  Filter
} from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  plan: 'Free' | 'Standard' | 'Premium';
  status: 'Active' | 'Banned' | 'Pending';
  joined: string;
  avatar?: string;
}

const UserManagement: React.FC = () => {
  const [users] = useState<User[]>([
    { id: 1, name: "Alex Thompson", email: "alex@example.com", plan: "Premium", status: "Active", joined: "Dec 12, 2025" },
    { id: 2, name: "Sarah Jenkins", email: "sarah.j@web.com", plan: "Free", status: "Active", joined: "Jan 04, 2026" },
    { id: 3, name: "Michael Ross", email: "mike@ross.com", plan: "Standard", status: "Banned", joined: "Nov 20, 2025" },
    { id: 4, name: "Emily Davis", email: "emily@cine.com", plan: "Premium", status: "Active", joined: "Dec 28, 2025" },
    { id: 5, name: "David Miller", email: "d.miller@gmail.com", plan: "Standard", status: "Pending", joined: "Jan 08, 2026" },
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <span className="flex items-center gap-1.5 text-green-600 dark:text-green-500 bg-green-500/10 px-2.5 py-1 rounded-full text-[10px] font-black border border-green-200 dark:border-green-500/20"><UserCheck size={12}/> ACTIVE</span>;
      case 'Banned':
        return <span className="flex items-center gap-1.5 text-red-600 dark:text-red-500 bg-red-500/10 px-2.5 py-1 rounded-full text-[10px] font-black border border-red-200 dark:border-red-500/20"><ShieldAlert size={12}/> BANNED</span>;
      default:
        return <span className="flex items-center gap-1.5 text-yellow-600 dark:text-yellow-500 bg-yellow-500/10 px-2.5 py-1 rounded-full text-[10px] font-black border border-yellow-200 dark:border-yellow-500/20">PENDING</span>;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* ACTION BAR */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 bg-white dark:bg-[#1a1a1a] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-xl">
        <div className="relative w-full lg:w-[450px] group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-red-500 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search users by name, email, or ID..." 
            className="w-full bg-gray-50 dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-700 rounded-xl py-3 pl-12 pr-4 text-sm text-gray-900 dark:text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
          />
        </div>
        
        <div className="flex gap-3 w-full lg:w-auto">
          <button className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-[#262626] hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 px-5 py-3 rounded-xl text-xs font-bold text-gray-700 dark:text-white transition-all">
            <Filter size={16} /> Filters
          </button>
          <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-red-600/20 active:scale-95">
            <UserPlus size={18} /> Add New User
          </button>
        </div>
      </div>

      {/* USERS TABLE */}
      <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm dark:shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 dark:bg-[#262626]/50 border-b border-gray-200 dark:border-gray-800">
                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">User Profile</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Access Level</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Status</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Member Since</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800/50">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-900 border border-gray-200 dark:border-gray-600 flex items-center justify-center text-sm font-black text-red-600 dark:text-red-500 shadow-inner">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        {user.status === 'Active' && <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white dark:border-[#1a1a1a] rounded-full"></div>}
                      </div>
                      <div>
                        <p className="text-sm font-black text-gray-900 dark:text-gray-100 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors cursor-pointer">{user.name}</p>
                        <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500">
                          <Mail size={12} />
                          <p className="text-[11px] font-bold tracking-tight">{user.email}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter border ${
                      user.plan === 'Premium' ? 'bg-orange-500/10 text-orange-600 dark:text-orange-500 border-orange-200 dark:border-orange-500/20' : 
                      user.plan === 'Standard' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-500 border-blue-200 dark:border-blue-500/20' : 
                      'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700'
                    }`}>
                      {user.plan}
                    </span>
                  </td>
                  <td className="p-5">
                    {getStatusBadge(user.status)}
                  </td>
                  <td className="p-5 text-xs text-gray-500 font-black uppercase tracking-tighter">
                    {user.joined}
                  </td>
                  <td className="p-5 text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all" title="Edit Profile">
                        <Edit3 size={16} />
                      </button>
                      <button className="p-2 hover:bg-red-500/10 rounded-lg text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-500 transition-all" title="Terminate Access">
                        <Trash2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* FOOTER */}
        <div className="p-5 bg-gray-50 dark:bg-[#1a1a1a] border-t border-gray-200 dark:border-gray-800 flex flex-col sm:row justify-between items-center gap-4">
          <p className="text-[10px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-widest">Showing 5 of 24.5k Registered Users</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-[10px] font-black text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all disabled:opacity-30" disabled>PREVIOUS</button>
            <button className="px-4 py-2 rounded-lg bg-red-600 text-[10px] font-black text-white hover:bg-red-700 transition-all shadow-md shadow-red-600/10 uppercase tracking-widest">Next Page</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;