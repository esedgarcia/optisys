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
    historial: [
      { fecha: "2024-06-01", medida: "OD: -0.75 -0.50 x 90°, OI: -0.50 -0.25 x 85°" },
      { fecha: "2025-06-20", medida: "OD: -1.00 -0.50 x 90°, OI: -0.75 -0.25 x 85°" }
    ]
  },
  {
    id: 2,
    cedula: "1723456789",
    nombre: "María Gómez",
    edad: 45,
    telefono: "0987654321",
    ultimaConsulta: "2025-05-15",
    estado: "Activo",
    historial: [
      { fecha: "2025-05-15", medida: "OD: +0.50 -0.25 x 80°, OI: +0.75 -0.50 x 75°" }
    ]
  },
  {
    id: 3,
    cedula: "1734567890",
    nombre: "Carlos Sánchez",
    edad: 60,
    telefono: "0971122334",
    ultimaConsulta: "2025-06-01",
    estado: "Inactivo",
    historial: [
      { fecha: "2025-06-01", medida: "OD: -2.00 -1.00 x 100°, OI: -2.25 -1.25 x 95°" }
    ]
  },
];

function Pacientes() {
  const [busqueda, setBusqueda] = useState("");
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [pacienteEditando, setPacienteEditando] = useState(null);

  const pacientesFiltrados = pacientesDummy.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.telefono.includes(busqueda) ||
    p.cedula.includes(busqueda)
  );

  const handleEditar = (paciente) => {
    setPacienteEditando({ ...paciente });
    setModoEdicion(true);
  };

  const handleGuardarEdicion = () => {
    console.log("Paciente actualizado:", pacienteEditando);
    setModoEdicion(false);
  };

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
            <div>
              <p className="font-semibold text-lg text-teal-700">{p.nombre}</p>
              <p className="text-sm text-gray-600">Cédula: {p.cedula}</p>
              <p className="text-sm text-gray-600">Teléfono: {p.telefono}</p>
            </div>
            <div className="text-right space-y-1">
              <p className="text-sm text-gray-700">Edad: {p.edad}</p>
              <p className="text-sm text-gray-700">Última consulta: {p.ultimaConsulta}</p>
              <p className={`font-semibold ${p.estado === "Activo" ? "text-green-600" : "text-red-600"}`}>
                {p.estado}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleEditar(p);
                }}
                className="mt-2 px-3 py-1 bg-emerald-600 text-white text-sm rounded hover:bg-emerald-700"
              >
                Editar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para historial de medidas */}
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
            <p><strong>Cédula:</strong> {pacienteSeleccionado.cedula}</p>
            <p><strong>Teléfono:</strong> {pacienteSeleccionado.telefono}</p>
            <p><strong>Edad:</strong> {pacienteSeleccionado.edad}</p>
            <p><strong>Última Consulta:</strong> {pacienteSeleccionado.ultimaConsulta}</p>
            <h4 className="text-lg font-semibold mt-4 mb-2">Historial de Medidas:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {pacienteSeleccionado.historial.map((item, index) => (
                <li key={index}><strong>{item.fecha}:</strong> {item.medida}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Modal para editar paciente */}
      {modoEdicion && pacienteEditando && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setModoEdicion(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              onClick={() => setModoEdicion(false)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">Editar Paciente</h3>
            <input
              type="text"
              value={pacienteEditando.nombre}
              onChange={(e) => setPacienteEditando({ ...pacienteEditando, nombre: e.target.value })}
              className="w-full mb-3 p-2 border rounded-lg"
              placeholder="Nombre"
            />
            <input
              type="text"
              value={pacienteEditando.cedula}
              onChange={(e) => setPacienteEditando({ ...pacienteEditando, cedula: e.target.value })}
              className="w-full mb-3 p-2 border rounded-lg"
              placeholder="Cédula"
            />
            <input
              type="number"
              value={pacienteEditando.edad}
              onChange={(e) => setPacienteEditando({ ...pacienteEditando, edad: e.target.value })}
              className="w-full mb-3 p-2 border rounded-lg"
              placeholder="Edad"
            />
            <input
              type="text"
              value={pacienteEditando.telefono}
              onChange={(e) => setPacienteEditando({ ...pacienteEditando, telefono: e.target.value })}
              className="w-full mb-3 p-2 border rounded-lg"
              placeholder="Teléfono"
            />
            <select
              value={pacienteEditando.estado}
              onChange={(e) => setPacienteEditando({ ...pacienteEditando, estado: e.target.value })}
              className="w-full mb-4 p-2 border rounded-lg"
            >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
            <button
              onClick={handleGuardarEdicion}
              className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
            >
              Guardar Cambios
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pacientes;


