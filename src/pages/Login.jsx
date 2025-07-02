// src/pages/Login.jsx

import { useState } from "react";
import { Eye, EyeOff, Lock, LogIn } from "lucide-react";

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de autenticación básica
    if (
      credentials.email === "admin@optisys.com" &&
      credentials.password === "admin123"
    ) {
      onLogin(); // cambia el estado global de login
    } else {
      setError("Credenciales incorrectas. Intenta de nuevo.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-md w-full border border-white/50">
        <div className="flex items-center justify-center mb-6">
          <Eye className="w-10 h-10 text-emerald-700 mr-2" />
          <h1 className="text-3xl font-bold text-emerald-800">OptiSys</h1>
        </div>
        <h2 className="text-center text-xl text-gray-700 font-semibold mb-4">
          Iniciar sesión
        </h2>

        {error && (
          <div className="mb-4 text-sm text-red-600 text-center">{error}</div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-emerald-500 focus:outline-none bg-white/70"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Contraseña"
              className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-gray-300 focus:border-emerald-500 focus:outline-none bg-white/70"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-emerald-600"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
          >
            <LogIn className="w-5 h-5" />
            <span>Ingresar</span>
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          OptiSys © 2025 - Cuidando tu visión con tecnología
        </p>
      </div>
    </main>
  );
}

export default Login;
