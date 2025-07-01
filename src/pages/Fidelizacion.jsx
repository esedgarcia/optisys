import { useState } from "react";

const pacientesConSeguimiento = [
  {
    id: 1,
    nombre: "Juan Pérez",
    proximaCita: "2025-07-10",
    notas: "Recordar cambio de lentes",
    contacto: "juan@email.com",
  },
  {
    id: 2,
    nombre: "María Gómez",
    proximaCita: "2025-07-15",
    notas: "Revisión anual pendiente",
    contacto: "maria@email.com",
  },
  {
    id: 3,
    nombre: "Carlos Sánchez",
    proximaCita: "2025-07-20",
    notas: "Oferta lentes de sol",
    contacto: "carlos@email.com",
  },
  {
    id: 4,
    nombre: "Lucía Torres",
    proximaCita: "2025-07-01",
    notas: "Recordar oferta fidelización",
    contacto: "lucia@email.com",
  },
];

function Fidelizacion() {
  const [search, setSearch] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [seleccionados, setSeleccionados] = useState([]);

  const hoy = new Date().toISOString().split("T")[0];

  const pacientesFiltrados = pacientesConSeguimiento.filter((p) => {
    const coincideBusqueda = p.nombre.toLowerCase().includes(search.toLowerCase());
    const coincideFiltro =
      filtro === "todos"
        ? true
        : filtro === "hoy"
        ? p.proximaCita === hoy
        : p.proximaCita.startsWith("2025-07"); // Filtro por mes (puedes adaptarlo dinámicamente)
    return coincideBusqueda && coincideFiltro;
  });

  const toggleSeleccionado = (id) => {
    setSeleccionados((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const enviarCampañaMasiva = () => {
    const seleccion = pacientesConSeguimiento.filter((p) => seleccionados.includes(p.id));
    if (seleccion.length === 0) {
      alert("Debes seleccionar al menos un paciente.");
      return;
    }

    const destinatarios = seleccion.map((p) => `${p.nombre} <${p.contacto}>`).join("\n");
    alert(`📨 Enviando campaña a:\n\n${destinatarios}`);
    setSeleccionados([]); // limpiar después del envío
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Fidelización de Pacientes</h2>

      {/* Barra de búsqueda y filtros */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Buscar paciente por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 w-full md:max-w-sm"
        />
        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="todos">Todos</option>
          <option value="hoy">Con cita hoy</option>
          <option value="mes">Este mes</option>
        </select>
      </div>

      {/* Botón para envío masivo */}
      <div className="mb-4">
        <button
          className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition disabled:opacity-50"
          disabled={seleccionados.length === 0}
          onClick={enviarCampañaMasiva}
        >
          Enviar campaña masiva a {seleccionados.length} paciente(s)
        </button>
      </div>

      {/* Lista de pacientes */}
      {pacientesFiltrados.length === 0 ? (
        <p className="text-gray-600">No se encontraron pacientes con esos filtros.</p>
      ) : (
        <ul className="space-y-4">
          {pacientesFiltrados.map((p) => (
            <li
              key={p.id}
              className={`bg-white p-6 rounded-xl shadow flex flex-col md:flex-row justify-between items-start md:items-center transition ${
                seleccionados.includes(p.id) ? "border-2 border-emerald-500" : ""
              }`}
            >
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">{p.nombre}</h3>
                <p className="text-gray-500">
                  Próxima cita: <span className="font-medium">{p.proximaCita}</span>
                </p>
                <p className="text-gray-500">Notas: {p.notas}</p>
                <p className="text-gray-500">Contacto: {p.contacto}</p>
              </div>

              <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
                <button
                  onClick={() => toggleSeleccionado(p.id)}
                  className={`px-4 py-2 rounded-lg border transition ${
                    seleccionados.includes(p.id)
                      ? "bg-red-100 border-red-400 text-red-600 hover:bg-red-200"
                      : "bg-teal-100 border-teal-400 text-teal-700 hover:bg-teal-200"
                  }`}
                >
                  {seleccionados.includes(p.id) ? "Cancelar selección" : "Seleccionar"}
                </button>

                <button
                  onClick={() =>
                    alert(`📧 Enviando recordatorio a ${p.nombre} (${p.contacto})`)
                  }
                  className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
                >
                  Enviar individual
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Fidelizacion;

