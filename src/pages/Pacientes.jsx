import { useState } from "react";

const pacientesDummy = [
  {
    id: 1,
    cedula: "1712345678",
    nombre: "Juan Pérez",
    edad: 30,
    telefono: "0991234567",
    ultimaConsulta: "2025-06-20",
    estado: "Activo",
    medida: "OD: -1.00 -0.50 x 90°, OI: -0.75 -0.25 x 85°",
  },
  {
    id: 2,
    cedula: "1723456789",
    nombre: "María Gómez",
    edad: 45,
    telefono: "0987654321",
    ultimaConsulta: "2025-05-15",
    estado: "Activo",
    medida: "OD: +0.50 -0.25 x 80°, OI: +0.75 -0.50 x 75°",
  },
  {
    id: 3,
    cedula: "1734567890",
    nombre: "Carlos Sánchez",
    edad: 60,
    telefono: "0971122334",
    ultimaConsulta: "2025-06-01",
    estado: "Inactivo",
    medida: "OD: -2.00 -1.00 x 100°, OI: -2.25 -1.25 x 95°",
  },
];

function Pacientes() {
  const [busqueda, setBusqueda] = useState("");
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);

  const pacientesFiltrados = pacientesDummy.filter(
    (p) =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.telefono.includes(busqueda) ||
      p.cedula.includes(busqueda)
  );

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Listado de Pacientes</h2>

      <input
        type="text"
        placeholder="Buscar por nombre, teléfono o cédula..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="mb-6 p-3 border rounded-lg w-full max-w-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
      />

      <div className="space-y-4">
        {pacientesFiltrados.length === 0 && (
          <p className="text-gray-500">No se encontraron pacientes.</p>
        )}

        {pacientesFiltrados.map((p) => (
          <div
            key={p.id}
            onClick={() => setPacienteSeleccionado(p)}
            className="cursor-pointer bg-white rounded-xl shadow-md p-5 flex justify-between items-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="space-y-1">
              <p className="font-semibold text-lg text-teal-700">{p.nombre}</p>
              <p className="text-sm text-gray-600">Cédula: {p.cedula}</p>
              <p className="text-sm text-gray-600">Teléfono: {p.telefono}</p>
            </div>
            <div className="text-right space-y-1">
              <p className="text-sm text-gray-700">Edad: {p.edad}</p>
              <p className="text-sm text-gray-700">Última consulta: {p.ultimaConsulta}</p>
              <p
                className={`font-semibold ${
                  p.estado === "Activo" ? "text-green-600" : "text-red-600"
                }`}
              >
                {p.estado}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para mostrar detalle de medida */}
      {pacienteSeleccionado && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setPacienteSeleccionado(null)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              onClick={() => setPacienteSeleccionado(null)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{pacienteSeleccionado.nombre}</h3>
            <p className="mb-2">
              <strong>Cédula:</strong> {pacienteSeleccionado.cedula}
            </p>
            <p className="mb-2">
              <strong>Teléfono:</strong> {pacienteSeleccionado.telefono}
            </p>
            <p className="mb-2">
              <strong>Edad:</strong> {pacienteSeleccionado.edad}
            </p>
            <p className="mb-4">
              <strong>Última Consulta:</strong> {pacienteSeleccionado.ultimaConsulta}
            </p>
            <p>
              <strong>Medida:</strong> {pacienteSeleccionado.medida}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pacientes;


