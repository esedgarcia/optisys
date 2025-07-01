import { useState } from "react";

const pacientesConSeguimiento = [
  { id: 1, nombre: "Juan Pérez", proximaCita: "2025-07-10", notas: "Recordar cambio de lentes", contacto: "juan@email.com" },
  { id: 2, nombre: "María Gómez", proximaCita: "2025-07-15", notas: "Revisión anual pendiente", contacto: "maria@email.com" },
  { id: 3, nombre: "Carlos Sánchez", proximaCita: "2025-07-20", notas: "Oferta lentes de sol", contacto: "carlos@email.com" },
];

function Fidelizacion() {
  const [search, setSearch] = useState("");

  const pacientesFiltrados = pacientesConSeguimiento.filter(p =>
    p.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Fidelización de Pacientes</h2>

      <input
        type="text"
        placeholder="Buscar paciente..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full p-3 mb-6 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      {pacientesFiltrados.length === 0 ? (
        <p className="text-gray-600">No se encontraron pacientes con ese nombre.</p>
      ) : (
        <ul className="space-y-4">
          {pacientesFiltrados.map(p => (
            <li key={p.id} className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row md:justify-between items-start md:items-center space-y-3 md:space-y-0">
              <div>
                <h3 className="text-xl font-semibold">{p.nombre}</h3>
                <p className="text-gray-500">Próxima cita: <span className="font-medium">{p.proximaCita}</span></p>
                <p className="text-gray-500">Notas: {p.notas}</p>
                <p className="text-gray-500">Contacto: {p.contacto}</p>
              </div>
              <button
                className="mt-3 md:mt-0 bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition"
                onClick={() => alert(`Enviar recordatorio a ${p.nombre} (${p.contacto})`)}
              >
                Enviar Recordatorio
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Fidelizacion;
