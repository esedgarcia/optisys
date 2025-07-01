// src/pages/OrdenLaboratorio.jsx

import { useState } from 'react';
import { FileText, Printer, Send } from 'lucide-react';
import jsPDF from 'jspdf';

function OrdenLaboratorio() {
  const [paciente, setPaciente] = useState("");
  const [orden, setOrden] = useState({
    tipoLente: "",
    materialLente: "",
    observaciones: ""
  });

  const generarPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Orden de Laboratorio - OptiSys", 20, 20);

    doc.setFontSize(12);
    doc.text(`Paciente: ${paciente}`, 20, 40);
    doc.text(`Tipo de Lente: ${orden.tipoLente}`, 20, 50);
    doc.text(`Material del Lente: ${orden.materialLente}`, 20, 60);
    doc.text("Observaciones:", 20, 75);
    doc.text(orden.observaciones, 20, 85);

    doc.save(`OrdenLaboratorio-${paciente}.pdf`);
  };

  const handleSendWhatsApp = () => {
    const phone = "5939XXXXXXX"; // Cambia por el número real con código país sin +
    const message = encodeURIComponent(
      `Hola, esta es la orden de laboratorio para el paciente ${paciente}.\n` +
      `Tipo de Lente: ${orden.tipoLente}\n` +
      `Material del Lente: ${orden.materialLente}\n` +
      `Observaciones: ${orden.observaciones}`
    );
    const url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-3xl mx-auto bg-white/80 p-8 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/50 space-y-6">
        <div className="flex items-center mb-6">
          <FileText className="w-6 h-6 text-blue-700 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Orden de Laboratorio</h1>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nombre del paciente"
            value={paciente}
            onChange={(e) => setPaciente(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none bg-white/70"
          />

          <input
            type="text"
            placeholder="Tipo de Lente"
            value={orden.tipoLente}
            onChange={(e) => setOrden({ ...orden, tipoLente: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none bg-white/70"
          />

          <input
            type="text"
            placeholder="Material del Lente"
            value={orden.materialLente}
            onChange={(e) => setOrden({ ...orden, materialLente: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none bg-white/70"
          />

          <textarea
            placeholder="Observaciones adicionales..."
            rows={4}
            value={orden.observaciones}
            onChange={(e) => setOrden({ ...orden, observaciones: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none bg-white/70 resize-none"
          />
        </div>

        <div className="text-center pt-4 flex justify-center space-x-4">
          <button
            onClick={generarPDF}
            className="inline-flex items-center justify-center px-6 py-3 text-white font-bold bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md hover:scale-105 transition-transform"
          >
            <Printer className="w-5 h-5 mr-2" />
            Generar PDF
          </button>

          <button
            onClick={handleSendWhatsApp}
            className="inline-flex items-center justify-center px-6 py-3 text-white font-bold bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-md hover:scale-105 transition-transform"
          >
            <Send className="w-5 h-5 mr-2" />
            Enviar por WhatsApp
          </button>
        </div>
      </div>
    </main>
  );
}

export default OrdenLaboratorio;

