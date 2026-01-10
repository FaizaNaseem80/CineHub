import { useState } from "react";
import { login, signup } from "../services/authApi";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        const data = await login(email, password);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect Logic
        if (email === "adminCineHub@gmail.com") {
          window.location.href = "/admin"; // Make sure this route exists in App.tsx
        } else {
          window.location.href = "/user";  // Make sure this route exists in App.tsx
        }
      } else {
        await signup(name, email, password);
        alert("Signup successful! Please sign in.");
        setIsLogin(true);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black p-4">
      <div className="w-full max-w-[400px] bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          {isLogin ? "Sign In" : "Register"}
        </h2>

        <form onSubmit={handleAuth} className="space-y-5">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-red-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-red-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-red-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
          >
            {loading ? "Please wait..." : isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          {isLogin ? "New here?" : "Already have an account?"}{" "}
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-red-600 font-bold hover:underline"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
}