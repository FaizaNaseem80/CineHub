import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Layers, 
  Tag, 
  Edit2, 
  Trash2, 
  Move
} from 'lucide-react';

interface TaxonomyItem {
  id: number;
  name: string;
  slug: string;
  count: number;
  type: 'Genre' | 'Category';
}

const GenreCategory: React.FC = () => {
  const [items] = useState<TaxonomyItem[]>([
    { id: 1, name: "Action", slug: "action", count: 452, type: 'Genre' },
    { id: 2, name: "Movies", slug: "movies", count: 1240, type: 'Category' },
    { id: 3, name: "Horror", slug: "horror", count: 120, type: 'Genre' },
    { id: 4, name: "TV Series", slug: "tv-series", count: 850, type: 'Category' },
    { id: 5, name: "Sci-Fi", slug: "sci-fi", count: 310, type: 'Genre' },
  ]);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* STATS SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-red-600/20 via-transparent to-transparent dark:from-red-600/10 border border-red-200 dark:border-red-600/20 p-6 rounded-2xl bg-white dark:bg-[#1a1a1a]">
          <div className="flex items-center gap-3 text-red-600 dark:text-red-500 mb-2">
            <Tag size={20} />
            <span className="text-[10px] font-black uppercase tracking-widest">Active Genres</span>
          </div>
          <h3 className="text-3xl font-black italic text-gray-900 dark:text-white">24</h3>
        </div>

        <div className="bg-gradient-to-br from-blue-600/20 via-transparent to-transparent dark:from-blue-600/10 border border-blue-200 dark:border-blue-600/20 p-6 rounded-2xl bg-white dark:bg-[#1a1a1a]">
          <div className="flex items-center gap-3 text-blue-600 dark:text-blue-500 mb-2">
            <Layers size={20} />
            <span className="text-[10px] font-black uppercase tracking-widest">Main Categories</span>
          </div>
          <h3 className="text-3xl font-black italic text-gray-900 dark:text-white">08</h3>
        </div>
      </div>

      {/* ACTION BAR */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 bg-white dark:bg-[#1a1a1a] p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="relative w-full lg:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={16} />
          <input 
            type="text" 
            placeholder="Search genres or categories..." 
            className="w-full bg-gray-50 dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-gray-900 dark:text-white focus:border-red-600 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
          />
        </div>
        <div className="flex gap-3 w-full lg:w-auto">
          <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 dark:bg-red-600 hover:bg-black dark:hover:bg-red-700 text-white px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg dark:shadow-red-600/20 active:scale-95">
            <Plus size={16} /> Add New
          </button>
        </div>
      </div>

      {/* LIST TABLE */}
      <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm dark:shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-[#262626]/50 border-b border-gray-200 dark:border-gray-800">
              <tr>
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">Name / Slug</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">Type</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">Item Count</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800/50">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="cursor-grab text-gray-300 dark:text-gray-600 hover:text-red-500 transition-colors">
                        <Move size={14} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-red-600 transition-colors transition-duration-300">{item.name}</p>
                        <p className="text-[10px] font-mono font-bold text-gray-400 dark:text-gray-600">/{item.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded border shadow-sm ${
                      item.type === 'Genre' 
                      ? 'text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-400/20 bg-purple-50 dark:bg-purple-400/10' 
                      : 'text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-400/20 bg-blue-50 dark:bg-blue-400/10'
                    }`}>
                      {item.type.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-4">
                     <div className="flex items-center gap-3">
                        <div className="flex-1 h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden max-w-[80px]">
                          <div 
                            className="h-full bg-red-600 rounded-full transition-all duration-1000" 
                            style={{ width: `${Math.min((item.count/1500)*100, 100)}%` }}
                          ></div>
                        </div>
                        <span className="text-[11px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-tighter">{item.count} items</span>
                     </div>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0 translate-x-2">
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all">
                        <Edit2 size={14} />
                      </button>
                      <button className="p-2 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-500 transition-all">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GenreCategory;