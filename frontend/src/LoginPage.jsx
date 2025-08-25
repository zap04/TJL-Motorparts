import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:8080/api/customers/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const userData = await response.json();
      localStorage.setItem("user", JSON.stringify(userData)); // save session
      alert("Login successful!");
      window.location.href = "/"; // redirect home
    } else {
      alert("Invalid credentials");
    }
  } catch (err) {
    console.error(err);
    alert("Error connecting to server.");
  }
};

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-slate-100 flex flex-col">
      {/* Header */}
      <header className="p-4 bg-white border-b flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-orange-600">TJL Motorparts</h1>
        <nav>
          <a href="/" className="mx-2 text-slate-700 hover:underline">Home</a>
          <a href="/#categories" className="mx-2 text-slate-700 hover:underline">Categories</a>
          <a href="/#featured" className="mx-2 text-slate-700 hover:underline">Featured</a>
          <a href="/#contact" className="mx-2 text-slate-700 hover:underline">Contact</a>
        </nav>
      </header>

      {/* Login Card */}
      <section className="flex flex-1 items-center justify-center py-12">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-orange-600 mb-2">Sign in to TJL Motorparts</h2>
          <p className="text-center text-slate-500 mb-6 text-sm">
            Access premium parts and exclusive deals
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block font-medium mb-1 text-slate-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium mb-1 text-slate-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={e => setRemember(e.target.checked)}
                  className="mr-2 accent-orange-500"
                />
                Remember me
              </label>
              <a href="#" className="text-orange-600 text-sm hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700 transition"
            >
              Sign In
            </button>
          </form>
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="mx-3 text-slate-400 text-sm">or continue with</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>
          <div className="flex gap-4 mb-4">
            <button className="flex-1 py-2 border border-slate-300 rounded hover:bg-slate-50 transition text-slate-700 font-medium">
              Google
            </button>
            <button className="flex-1 py-2 border border-slate-300 rounded hover:bg-slate-50 transition text-slate-700 font-medium">
              Facebook
            </button>
          </div>
          <div className="text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <a href="/register" className="text-orange-600 font-medium hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-4 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} TJL Motorparts. All rights reserved.
      </footer>
    </main>
  );
}