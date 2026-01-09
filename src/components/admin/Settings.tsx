import React, { useState } from 'react';
import { 
  Save, Shield, Globe, Database, 
  Cpu, Lock, Eye, EyeOff, AlertTriangle 
} from 'lucide-react';

const Settings: React.FC = () => {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER ACTIONS */}
      <div className="flex justify-between items-end border-b border-gray-200 dark:border-gray-800 pb-6">
        <div>
          <p className="text-red-600 dark:text-red-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1">System Configuration</p>
          <h2 className="text-2xl font-black italic uppercase text-gray-900 dark:text-white">Core Parameters</h2>
        </div>
        <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-xl text-xs font-black transition-all shadow-lg shadow-red-600/20 active:scale-95">
          <Save size={16} /> SAVE CHANGES
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: GENERAL & SEO */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 space-y-4 shadow-sm dark:shadow-none">
            <div className="flex items-center gap-3 mb-2">
              <Globe className="text-blue-600 dark:text-blue-500" size={18} />
              <h3 className="font-bold text-sm uppercase tracking-wider text-gray-900 dark:text-white">Site Metadata</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase ml-1">Platform Name</label>
                <input type="text" defaultValue="CineHub Streaming" className="w-full bg-gray-50 dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:border-red-600 outline-none transition-all placeholder:text-gray-400" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase ml-1">Support Email</label>
                <input type="email" defaultValue="ops@cinehub.com" className="w-full bg-gray-50 dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:border-red-600 outline-none transition-all placeholder:text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase ml-1">SEO Description</label>
              <textarea rows={3} className="w-full bg-gray-50 dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:border-red-600 outline-none transition-all resize-none" defaultValue="The ultimate destination for premium cinema and original series." />
            </div>
          </section>

          <section className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 space-y-4 shadow-sm dark:shadow-none">
            <div className="flex items-center gap-3 mb-2">
              <Cpu className="text-purple-600 dark:text-purple-500" size={18} />
              <h3 className="font-bold text-sm uppercase tracking-wider text-gray-900 dark:text-white">API & Integration</h3>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase ml-1">TMDB API Key</label>
              <div className="relative">
                <input 
                  type={showApiKey ? "text" : "password"} 
                  defaultValue="8db2938475hn293847562938475"
                  className="w-full bg-gray-50 dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm font-mono text-gray-900 dark:text-white focus:border-red-600 outline-none transition-all pr-12" 
                />
                <button 
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {showApiKey ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: SECURITY & STATUS */}
        <div className="space-y-6">
          <section className="bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#111] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 shadow-sm dark:shadow-none">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Shield className="text-red-600 dark:text-red-500" size={18} />
                <h3 className="font-bold text-sm uppercase tracking-wider text-gray-900 dark:text-white">Security</h3>
              </div>
              <span className="bg-green-500/10 text-green-600 dark:text-green-500 text-[9px] font-black px-2 py-0.5 rounded border border-green-200 dark:border-green-500/20 uppercase">Protected</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#0f0f0f] rounded-2xl border border-gray-100 dark:border-gray-800 transition-colors">
                <div>
                  <p className="text-xs font-black text-gray-900 dark:text-white uppercase">Maintenance Mode</p>
                  <p className="text-[10px] text-gray-400 italic">Site will be offline</p>
                </div>
                <button 
                  onClick={() => setMaintenanceMode(!maintenanceMode)}
                  className={`w-10 h-5 rounded-full transition-all relative ${maintenanceMode ? 'bg-red-600 shadow-lg shadow-red-600/30' : 'bg-gray-300 dark:bg-gray-700'}`}
                >
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm transition-all ${maintenanceMode ? 'left-6' : 'left-1'}`} />
                </button>
              </div>

              <button className="w-full flex items-center justify-center gap-2 p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all text-gray-700 dark:text-white">
                <Database size={14} /> Flush System Cache
              </button>
              
              <button className="w-full flex items-center justify-center gap-2 p-3 border border-red-200 dark:border-red-900/30 text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                <Lock size={14} /> Rotate SSL Keys
              </button>
            </div>
          </section>

          <div className="bg-red-50 dark:bg-red-600/5 border border-red-100 dark:border-red-600/20 rounded-3xl p-6">
            <div className="flex items-center gap-2 text-red-600 dark:text-red-500 mb-2">
              <AlertTriangle size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">Danger Zone</span>
            </div>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 font-medium">Wipe platform data and reset all system parameters to factory defaults.</p>
            <button className="text-[10px] font-black text-red-600 hover:text-red-700 dark:hover:text-red-400 underline decoration-2 underline-offset-4 uppercase tracking-tighter transition-colors">
              Factory Reset System
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;