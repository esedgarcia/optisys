import { useState } from 'react';
import {
  Eye, Users, FileBarChart, HeartHandshake, Calendar, FileText, UserPlus
} from 'lucide-react';

import './App.css';
import CrearHistoria from './pages/CrearHistoria';
import Pacientes from './pages/Pacientes';
import Consumos from "./pages/Consumos";
import OrdenLaboratorio from './pages/OrdenLaboratorio';
import Agenda from './pages/Agenda';
import Reportes from './pages/Reportes';
import Fidelizacion from './pages/Fidelizacion';
import Login from './pages/Login';

import { AnimatePresence, motion } from 'framer-motion'; // ✅ Importa Framer Motion

function App() {
  const [currentView, setCurrentView] = useState("formulario");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!isAuthenticated ? (
        <motion.div
          key="login"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Login onLogin={() => setIsAuthenticated(true)} />
        </motion.div>
      ) : (
        <motion.div
          key="main-app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex min-h-screen"
        >
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
              <button onClick={() => setCurrentView("consumos")} className="flex items-center space-x-2 hover:text-emerald-200">
                <UserPlus className="w-5 h-5" /> <span>Consumos</span>
              </button>
              <button onClick={() => setCurrentView("orden-laboratorio")} className="flex items-center space-x-2 hover:text-emerald-200">
                <FileText className="w-5 h-5" /> <span>Orden de Laboratorio</span>
              </button>
              <button onClick={() => setCurrentView("agenda")} className="flex items-center space-x-2 hover:text-emerald-200">
                <Calendar className="w-5 h-5" /> <span>Agenda</span>
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
          {/* Contenido principal con transición */}
          <main className="flex-1 bg-gray-50 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {currentView === "formulario" && (
                <motion.div
                  key="formulario"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-full"
                >
                  <CrearHistoria />
                </motion.div>
              )}
              {currentView === "pacientes" && (
                <motion.div
                  key="pacientes"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-full"
                >
                  <Pacientes />
                  </motion.div>
              )}
              {currentView === "consumos" && (
                <motion.div
                  key="consumos"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-full"
                >
              
                <Consumos />
                </motion.div>
              )}
              {currentView === "orden-laboratorio" && (
                <motion.div
                  key="orden-laboratorio"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-full"
                >
                  <OrdenLaboratorio />
                </motion.div>
              )}
              {currentView === "agenda" && (
                <motion.div
                  key="agenda"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-full"
                >
                  <Agenda />
                </motion.div>
              )}
              {currentView === "reportes" && (
                <motion.div
                  key="reportes"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-full"
                >
                  <Reportes />
                </motion.div>
              )}
              {currentView === "fidelizacion" && (
                <motion.div
                  key="fidelizacion"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-full"
                >
                  <Fidelizacion />
                </motion.div>
              )}
            </AnimatePresence>
          </main>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;


