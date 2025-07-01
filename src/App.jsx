import { useState } from 'react';
import {
  Eye, Users, FileBarChart, HeartHandshake
} from 'lucide-react';

import './App.css';
import CrearHistoria from './pages/CrearHistoria';
import Pacientes from './pages/Pacientes';
import Reportes from './pages/Reportes';
import Fidelizacion from './pages/Fidelizacion';

function App() {
  const [currentView, setCurrentView] = useState("formulario");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gradient-to-b from-emerald-700 to-teal-600 text-white p-6 space-y-6 shadow-xl">
        <div className="flex items-center space-x-3">
          <Eye className="w-8 h-8" />
          <span className="text-2xl font-bold">OptiSys</span>
        </div>
        <nav className="space-y-4">
          <button onClick={() => setCurrentView("formulario")} className="flex items-center space-x-2 hover:text-emerald-200">
            <Eye className="w-5 h-5" /> <span>Crear Historia</span>
          </button>
          <button onClick={() => setCurrentView("pacientes")} className="flex items-center space-x-2 hover:text-emerald-200">
            <Users className="w-5 h-5" /> <span>Pacientes</span>
          </button>
          <button onClick={() => setCurrentView("reportes")} className="flex items-center space-x-2 hover:text-emerald-200">
            <FileBarChart className="w-5 h-5" /> <span>Reportes</span>
          </button>
          <button onClick={() => setCurrentView("fidelizacion")} className="flex items-center space-x-2 hover:text-emerald-200">
            <HeartHandshake className="w-5 h-5" /> <span>Fidelización</span>
          </button>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 bg-gray-50">
        {currentView === "formulario" && <CrearHistoria />}
        {currentView === "pacientes" && <Pacientes />}
        {currentView === "reportes" && <Reportes />}
        {currentView === "fidelizacion" && <Fidelizacion />}
      </main>
    </div>
  );
}

export default App;

// src/App.jsx
// Este archivo es el punto de entrada de la aplicación React.
// Importa los componentes necesarios y define la estructura principal de la aplicación.
// Utiliza un estado para manejar la vista actual y renderiza el componente correspondiente según la selección