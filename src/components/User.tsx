import { useEffect, useState } from "react";

interface UserData {
  id: string;
  name: string;
  email: string;
}

export default function UserPage() {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Check for authenticated user in LocalStorage
    const savedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    // 2. If no token, redirect back to login immediately
    if (!token || !savedUser) {
      window.location.href = "/";
      return;
    }

    try {
      setUser(JSON.parse(savedUser));
    } catch (err) {
      console.error("Error parsing user data");
      localStorage.clear();
      window.location.href = "/";
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // Wipe JWT and user data
    window.location.href = "/"; // Send back to Sign In
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      {/* Cinematic Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-red-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation Bar */}
      <nav className="relative z-20 flex justify-between items-center px-8 py-6 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="text-2xl font-black text-red-600 tracking-tighter italic">
          CINEHUB
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-sm font-medium text-gray-500">
            {user?.email}
          </span>
          <button
            onClick={handleLogout}
            className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-full transition-all active:scale-95 shadow-lg shadow-red-600/20"
          >
            Sign Out
          </button>
        </div>
      </nav>

      {/* Dashboard Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Welcome, <span className="text-red-600">{user?.name}</span>.
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Enjoy your personalized cinematic experience. Access your watchlist, 
            history, and account settings all in one place.
          </p>
        </header>

        {/* User Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Watchlist */}
          <div className="group p-8 rounded-3xl bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-red-600/50 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">My Watchlist</h3>
            <p className="text-gray-500 text-sm">You have 0 items saved to watch later.</p>
          </div>

          {/* Card 2: Settings */}
          <div className="group p-8 rounded-3xl bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-red-600/50 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Account Details</h3>
            <p className="text-gray-500 text-sm">Update your name, email, and security settings.</p>
          </div>

          {/* Card 3: Billing */}
          <div className="group p-8 rounded-3xl bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-red-600/50 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Subscription</h3>
            <p className="text-gray-500 text-sm">Plan: Premium Ultra HD (Active)</p>
          </div>
        </div>

        {/* Action Footer */}
        <section className="mt-12 p-10 rounded-3xl bg-gradient-to-r from-red-600 to-red-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h2 className="text-2xl font-bold mb-1">Ready to explore?</h2>
            <p className="text-red-100 opacity-80">Discover thousands of movies and TV shows.</p>
          </div>
          <button className="px-8 py-3 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-colors">
            Browse Movies
          </button>
        </section>
      </main>
    </div>
  );
}