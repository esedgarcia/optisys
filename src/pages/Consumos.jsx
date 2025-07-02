// src/pages/Consumos.jsx
import { useState } from "react";
import { UserPlus, PlusCircle, Trash2, Calendar, User } from "lucide-react";

function Consumos() {
  // Estado de pacientes (inicial con algunos de ejemplo)
  const [pacientes, setPacientes] = useState([
    { id: "p1", nombre: "Juan Pérez" },
    { id: "p2", nombre: "María Gómez" },
    { id: "p3", nombre: "Carlos Ruiz" },
  ]);

  // Estado para nuevo paciente (input)
  const [nuevoPacienteNombre, setNuevoPacienteNombre] = useState("");

  // Estado para paciente seleccionado
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);

  // Estado para consumos de todos los pacientes { pacienteId: [consumos] }
  const [consumosPorPaciente, setConsumosPorPaciente] = useState({});

  // Estado para nuevo consumo temporal
  const [nuevoConsumo, setNuevoConsumo] = useState({
    fecha: new Date().toISOString().slice(0, 10), // yyyy-mm-dd
    productos: [{ nombre: "", cantidad: 1 }],
  });

  // Agregar paciente nuevo
  const agregarPaciente = () => {
    const nombreTrim = nuevoPacienteNombre.trim();
    if (!nombreTrim) return alert("Ingresa un nombre válido para el paciente.");
    const nuevoId = `p${Date.now()}`; // id simple con timestamp
    setPacientes([...pacientes, { id: nuevoId, nombre: nombreTrim }]);
    setNuevoPacienteNombre("");
  };

  // Seleccionar paciente
  const seleccionarPaciente = (id) => {
    setPacienteSeleccionado(id);
    setNuevoConsumo({
      fecha: new Date().toISOString().slice(0, 10),
      productos: [{ nombre: "", cantidad: 1 }],
    });
  };

  // Cambiar campos nuevo consumo
  const cambiarFecha = (e) => {
    setNuevoConsumo({ ...nuevoConsumo, fecha: e.target.value });
  };

  // Cambiar nombre o cantidad de producto nuevo
  const cambiarProducto = (index, campo, valor) => {
    const productos = [...nuevoConsumo.productos];
    productos[index][campo] = campo === "cantidad" ? Number(valor) : valor;
    setNuevoConsumo({ ...nuevoConsumo, productos });
  };

  // Añadir producto nuevo
  const agregarProducto = () => {
    setNuevoConsumo({
      ...nuevoConsumo,
      productos: [...nuevoConsumo.productos, { nombre: "", cantidad: 1 }],
    });
  };

  // Eliminar producto
  const eliminarProducto = (index) => {
    const productos = nuevoConsumo.productos.filter((_, i) => i !== index);
    setNuevoConsumo({ ...nuevoConsumo, productos });
  };

  // Guardar consumo (agregar a lista)
  const guardarConsumo = () => {
    if (!pacienteSeleccionado) return alert("Selecciona un paciente primero");
    if (nuevoConsumo.productos.some(p => !p.nombre.trim())) {
      return alert("Todos los productos deben tener nombre.");
    }
    // Agregar consumo al paciente seleccionado
    setConsumosPorPaciente((prev) => {
      const consumosPaciente = prev[pacienteSeleccionado] || [];
      return {
        ...prev,
        [pacienteSeleccionado]: [...consumosPaciente, nuevoConsumo],
      };
    });

    // Limpiar nuevo consumo
    setNuevoConsumo({
      fecha: new Date().toISOString().slice(0, 10),
      productos: [{ nombre: "", cantidad: 1 }],
    });
  };

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-5xl mx-auto bg-white/80 p-8 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/50 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center mb-6">
          <UserPlus className="w-7 h-7 text-emerald-700 mr-3" />
          Historial de Consumos
        </h1>

        {/* Crear nuevo paciente */}
        <section className="mb-8">
          <label className="block text-gray-700 font-semibold mb-2">
            Nuevo Paciente:
          </label>
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Nombre del paciente"
              className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-emerald-500 focus:outline-none bg-white/70"
              value={nuevoPacienteNombre}
              onChange={(e) => setNuevoPacienteNombre(e.target.value)}
            />
            <button
              onClick={agregarPaciente}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 rounded-xl shadow-md"
              type="button"
            >
              Agregar
            </button>
          </div>
        </section>

        {/* Seleccionar paciente */}
        <section>
          <label className="block text-gray-700 font-semibold mb-2">
            Selecciona un paciente:
          </label>
          <select
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-emerald-500 focus:outline-none bg-white/70"
            onChange={(e) => seleccionarPaciente(e.target.value)}
            value={pacienteSeleccionado || ""}
          >
            <option value="" disabled>
              -- Escoge un paciente --
            </option>
            {pacientes.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nombre}
              </option>
            ))}
          </select>
        </section>

        {/* Formulario nuevo consumo */}
        {pacienteSeleccionado && (
          <section className="space-y-4 mt-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Fecha de consumo:
              </label>
              <input
                type="date"
                className="px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-emerald-500 focus:outline-none bg-white/70"
                value={nuevoConsumo.fecha}
                onChange={cambiarFecha}
              />
            </div>

            <div className="space-y-3">
              {nuevoConsumo.productos.map((prod, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 border border-gray-300 rounded-xl p-3 bg-white/80"
                >
                  <input
                    type="text"
                    placeholder="Nombre del producto"
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-400 focus:border-emerald-500 focus:outline-none"
                    value={prod.nombre}
                    onChange={(e) =>
                      cambiarProducto(i, "nombre", e.target.value)
                    }
                  />
                  <input
                    type="number"
                    min={1}
                    className="w-20 px-3 py-2 rounded-lg border border-gray-400 focus:border-emerald-500 focus:outline-none"
                    value={prod.cantidad}
                    onChange={(e) =>
                      cambiarProducto(i, "cantidad", e.target.value)
                    }
                  />
                  <button
                    onClick={() => eliminarProducto(i)}
                    type="button"
                    className="text-red-500 hover:text-red-700"
                    title="Eliminar producto"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={agregarProducto}
              type="button"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-xl"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Agregar Producto</span>
            </button>

            <div className="text-center pt-4">
              <button
                onClick={guardarConsumo}
                type="button"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
              >
                Guardar Consumo
              </button>
            </div>
          </section>
        )}

        {/* Mostrar consumos del paciente seleccionado */}
        {pacienteSeleccionado && consumosPorPaciente[pacienteSeleccionado] && (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Consumos de {pacientes.find(p => p.id === pacienteSeleccionado)?.nombre}
            </h2>
            <ul className="space-y-4 max-h-96 overflow-y-auto">
              {consumosPorPaciente[pacienteSeleccionado].map((consumo, idx) => (
                <li
                  key={idx}
                  className="border rounded-xl p-4 bg-white/90 shadow-md"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">
                      Fecha: {consumo.fecha}
                    </span>
                    <span className="text-sm text-gray-500">
                      Cantidad productos: {consumo.productos.length}
                    </span>
                  </div>
                  <ul className="pl-4 list-disc text-gray-700">
                    {consumo.productos.map((p, i) => (
                      <li key={i}>
                        {p.nombre} - {p.cantidad}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}

export default Consumos;

