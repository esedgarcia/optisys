import { useState } from 'react';
import { Calendar, User, Clock, PlusCircle, CheckCircle, XCircle } from 'lucide-react';

const pacientesEjemplo = [
  { id: 1, nombre: "Juan Pérez" },
  { id: 2, nombre: "María Gómez" },
  { id: 3, nombre: "Carlos Ruiz" },
];

function Agenda() {
  const [citas, setCitas] = useState([
    {
      id: 1,
      paciente: pacientesEjemplo[0],
      fecha: "2025-07-05",
      hora: "10:00",
      motivo: "Consulta general",
      estado: "confirmada",
    },
    {
      id: 2,
      paciente: pacientesEjemplo[1],
      fecha: "2025-07-06",
      hora: "14:30",
      motivo: "Control lentes",
      estado: "pendiente",
    },
  ]);

  const [nuevaCita, setNuevaCita] = useState({
    pacienteId: "",
    fecha: "",
    hora: "",
    motivo: "",
  });

  const handleInputChange = (e) => {
    setNuevaCita({ ...nuevaCita, [e.target.name]: e.target.value });
  };

  const agregarCita = () => {
    if (!nuevaCita.pacienteId || !nuevaCita.fecha || !nuevaCita.hora) {
      alert("Por favor completa paciente, fecha y hora");
      return;
    }
    const paciente = pacientesEjemplo.find(p => p.id === Number(nuevaCita.pacienteId));
    const nueva = {
      id: citas.length + 1,
      paciente,
      fecha: nuevaCita.fecha,
      hora: nuevaCita.hora,
      motivo: nuevaCita.motivo,
      estado: "pendiente",
    };
    setCitas([...citas, nueva]);
    setNuevaCita({ pacienteId: "", fecha: "", hora: "", motivo: "" });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold mb-4">Agenda de Citas</h2>

      {/* Formulario Nueva Cita */}
      <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <PlusCircle className="w-6 h-6 text-green-600" /> Agregar Nueva Cita
        </h3>

        <select
          name="pacienteId"
          value={nuevaCita.pacienteId}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Selecciona un paciente</option>
          {pacientesEjemplo.map((p) => (
            <option key={p.id} value={p.id}>{p.nombre}</option>
          ))}
        </select>

        <input
          type="date"
          name="fecha"
          value={nuevaCita.fecha}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />

        <input
          type="time"
          name="hora"
          value={nuevaCita.hora}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />

        <input
          type="text"
          name="motivo"
          placeholder="Motivo de la cita (opcional)"
          value={nuevaCita.motivo}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />

        <button
          onClick={agregarCita}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Guardar Cita
        </button>
      </div>

      {/* Lista de Citas */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-blue-600" /> Próximas Citas
        </h3>

        {citas.length === 0 ? (
          <p>No hay citas programadas.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {citas.map((cita) => (
              <li key={cita.id} className="py-3 flex justify-between items-center hover:bg-gray-50 cursor-pointer rounded px-2">
                <div>
                  <p className="font-semibold">{cita.paciente.nombre}</p>
                  <p className="text-gray-600 text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {cita.fecha} a las {cita.hora}
                  </p>
                  {cita.motivo && <p className="text-gray-500 text-sm italic">Motivo: {cita.motivo}</p>}
                </div>
                <div>
                  {cita.estado === "confirmada" ? (
                    <CheckCircle className="w-6 h-6 text-green-500" title="Confirmada" />
                  ) : (
                    <span className="text-yellow-500 font-semibold">Pendiente</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Agenda;
