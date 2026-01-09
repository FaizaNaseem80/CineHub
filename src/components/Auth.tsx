import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleValidation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      setError("Your password must contain between 6 and 60 characters.");
      return;
    }

    console.log("Form is valid! Proceeding...");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-sans relative overflow-hidden bg-gray-100 dark:bg-black transition-colors">
      {/* Background Gradient & Blur for cinematic dark mode */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-black/90 dark:via-black/70 dark:to-black/90 dark:block" />

    

      {/* Form Card */}
      <div className="relative z-10 w-full max-w-[450px] rounded-xl p-10 sm:p-16 shadow-2xl dark:shadow-black/80 bg-white dark:bg-gray-900/90 text-black dark:text-white transform transition-transform hover:scale-105">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {isLogin ? "Sign In" : "Sign Up"}
        </h2>

        <form className="space-y-4" onSubmit={handleValidation}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-4 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-red-600 outline-none transition-all"
            />
          )}

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email or phone number"
            className={`w-full px-5 py-4 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 ${
              error && !email.includes("@")
                ? "border-b-2 border-orange-500"
                : "focus:ring-red-600"
            }`}
          />

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={`w-full px-5 py-4 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 ${
                error && password.length < 6
                  ? "border-b-2 border-orange-500"
                  : "focus:ring-red-600"
              }`}
            />
            {error && (
              <p className="text-orange-500 text-xs mt-2 ml-1 animate-pulse">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-6 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-lg active:scale-95 transition-all shadow-lg dark:shadow-black/40"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className="flex justify-between items-center text-sm mt-4 text-gray-600 dark:text-gray-400">
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="mr-2 w-4 h-4 accent-red-600" />
            Remember me
          </label>
          <span className="hover:underline cursor-pointer">Need help?</span>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 dark:text-gray-400 text-lg">
            {isLogin ? "New to CineHub?" : "Already a member?"}{" "}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
              className="text-black dark:text-white hover:underline font-semibold"
            >
              {isLogin ? "Sign up now" : "Sign in"}
            </button>
          </p>

          <p className="text-xs text-gray-600 dark:text-gray-500 mt-6 leading-tight">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <span className="text-blue-600 hover:underline ml-1 cursor-pointer">
              Learn more.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}