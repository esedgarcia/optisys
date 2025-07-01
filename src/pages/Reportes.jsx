import { useState } from "react";

const pacientesDummy = [
  { id: 1, nombre: "Juan Pérez", edad: 30, estado: "Activo", ultimaConsulta: "2025-06-20" },
  { id: 2, nombre: "María Gómez", edad: 45, estado: "Activo", ultimaConsulta: "2025-05-15" },
  { id: 3, nombre: "Carlos Sánchez", edad: 60, estado: "Inactivo", ultimaConsulta: "2025-06-01" },
  { id: 4, nombre: "Ana Torres", edad: 25, estado: "Activo", ultimaConsulta: "2025-06-25" },
];

function Reportes() {
  // Estadísticas básicas:
  const totalPacientes = pacientesDummy.length;
  const activos = pacientesDummy.filter(p => p.estado === "Activo").length;
  const inactivos = totalPacientes - activos;

  // Distribución por edades (rangos)
  const rangosEdad = {
    "18-30": 0,
    "31-45": 0,
    "46-60": 0,
    "60+": 0,
  };

  pacientesDummy.forEach(p => {
    if (p.edad >= 18 && p.edad <= 30) rangosEdad["18-30"]++;
    else if (p.edad >= 31 && p.edad <= 45) rangosEdad["31-45"]++;
    else if (p.edad >= 46 && p.edad <= 60) rangosEdad["46-60"]++;
    else if (p.edad > 60) rangosEdad["60+"]++;
  });

  // Consultas recientes (último mes)
  const fechaHoy = new Date();
  const unMesAtras = new Date(fechaHoy);
  unMesAtras.setMonth(unMesAtras.getMonth() - 1);

  const consultasUltimoMes = pacientesDummy.filter(p => new Date(p.ultimaConsulta) >= unMesAtras).length;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Reportes de OptiSys</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Pacientes Totales</h3>
          <p className="text-4xl font-bold text-teal-600">{totalPacientes}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Pacientes Activos</h3>
          <p className="text-4xl font-bold text-green-600">{activos}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Pacientes Inactivos</h3>
          <p className="text-4xl font-bold text-red-600">{inactivos}</p>
        </div>
      </div>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Distribución por Edad</h3>
        <div className="space-y-3 max-w-sm">
          {Object.entries(rangosEdad).map(([rango, cantidad]) => (
            <div key={rango} className="flex justify-between bg-white rounded-lg p-4 shadow">
              <span>{rango} años</span>
              <span className="font-bold">{cantidad}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Consultas Último Mes</h3>
        <p className="bg-white rounded-lg p-4 shadow max-w-sm text-center text-lg font-semibold">
          {consultasUltimoMes} consulta(s)
        </p>
      </section>
    </div>
  );
}

export default Reportes;
