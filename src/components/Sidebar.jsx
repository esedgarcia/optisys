
import { PacientesIcon, CrearHistoriaIcon, ReportesIcon, FidelizacionIcon } from 'lucide-react';

export default function Sidebar({ onSelect, selectedPage }) {
  const items = [
    { label: "Pacientes", value: "pacientes", icon: <PacientesIcon className="w-5 h-5 mr-2" /> },
    { label: "Crear Historia", value: "crearHistoria", icon: <CrearHistoriaIcon className="w-5 h-5 mr-2" /> },
    { label: "Reportes", value: "reportes", icon: <ReportesIcon className="w-5 h-5 mr-2" /> },
    { label: "Fidelización", value: "fidelizacion", icon: <FidelizacionIcon className="w-5 h-5 mr-2" /> },
  ];

  return (
    <div className="w-64 bg-blue-900 text-white h-screen p-6 fixed left-0 top-0">
      <h2 className="text-2xl font-bold mb-8">OptiSys</h2>
      <nav className="space-y-4">
        {items.map((item) => (
          <button
            key={item.value}
            onClick={() => onSelect(item.value)}
            className={`block w-full text-left px-4 py-2 rounded hover:bg-blue-700 transition ${
              selectedPage === item.value ? 'bg-blue-800' : ''
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

