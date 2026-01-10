// Ensure this matches your backend PORT (usually 5000 or 8080)
const API_URL = "http://localhost:5000/api"; 

export const login = async (email: string, password: string) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(res);
};

export const signup = async (name: string, email: string, password: string) => {
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }), // name is REQUIRED for your sqlite controller
  });
  return handleResponse(res);
};

// Helper to catch the "Unexpected token <" error
async function handleResponse(res: Response) {
  const contentType = res.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    const text = await res.text();
    console.error("Server returned HTML instead of JSON. Check your backend routes:", text);
    throw new Error("Server Error: Route not found (404) or Server Crash (500).");
  }
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Request failed");
  return data;
}