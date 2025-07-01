// src/pages/CrearHistoria.jsx

import { useState } from 'react';
import {
  Eye, User, Phone, Calendar, FileText, Activity, Target,
  Stethoscope, Save, CheckCircle
} from 'lucide-react';

function CrearHistoria() {
  const [formData, setFormData] = useState({
    nombre: "", edad: "", telefono: "", motivo: "", antecedentes: "",
    esferaOD: "", cilindroOD: "", ejeOD: "", esferaOI: "", cilindroOI: "",
    ejeOI: "", diagnostico: "", tratamiento: ""
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFocus = (fieldName) => setFocusedField(fieldName);
  const handleBlur = () => setFocusedField(null);

  const handleSubmit = () => {
    console.log("Historia clínica:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <main className="flex-1 overflow-y-auto min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8">
      {/* Header with floating effect */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 rounded-full shadow-lg mb-4 transform hover:scale-105 transition-transform duration-300">
          <Eye className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
          OptiSys
        </h1>
        <p className="text-gray-600 text-lg">Sistema de Historias Clínicas oftálmicas</p>
        <div className="w-24 h-1 bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/50 space-y-8 relative overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>

        {/* Success animation */}
        {isSubmitted && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-2xl shadow-2xl text-center transform animate-pulse">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Formulario Enviado!</h3>
              <p className="text-gray-600">Los datos se han guardado correctamente</p>
            </div>
          </div>
        )}

{/* Patient Information Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
          <div className="flex items-center mb-4">
            <User className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Información del Paciente</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group">
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <User className="w-4 h-4 mr-2 text-blue-500" />
                Nombre Completo
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                onFocus={() => handleFocus('nombre')}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/70 backdrop-blur-sm
                  ${focusedField === 'nombre' 
                    ? 'border-blue-500 shadow-lg shadow-blue-200 scale-105 bg-white' 
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                  } focus:outline-none`}
                placeholder="Ingrese el nombre completo"
                required
              />
            </div>
            
            <div className="relative group">
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                Edad
              </label>
              <input
                type="number"
                name="edad"
                value={formData.edad}
                onChange={handleChange}
                onFocus={() => handleFocus('edad')}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/70 backdrop-blur-sm
                  ${focusedField === 'edad' 
                    ? 'border-blue-500 shadow-lg shadow-blue-200 scale-105 bg-white' 
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                  } focus:outline-none`}
                placeholder="Años"
                required
              />
            </div>
            
            <div className="relative group">
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Phone className="w-4 h-4 mr-2 text-blue-500" />
                Teléfono
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                onFocus={() => handleFocus('telefono')}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/70 backdrop-blur-sm
                  ${focusedField === 'telefono' 
                    ? 'border-blue-500 shadow-lg shadow-blue-200 scale-105 bg-white' 
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                  } focus:outline-none`}
                placeholder="Número de contacto"
              />
            </div>
          </div>
        </div>

        {/* Medical History Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100">
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-emerald-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Historial Médico</h2>
          </div>
          
          <div className="space-y-6">
            <div className="relative group">
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Target className="w-4 h-4 mr-2 text-emerald-500" />
                Motivo de Consulta
              </label>
              <textarea
                name="motivo"
                value={formData.motivo}
                onChange={handleChange}
                onFocus={() => handleFocus('motivo')}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none
                  ${focusedField === 'motivo' 
                    ? 'border-emerald-500 shadow-lg shadow-emerald-200 scale-105 bg-white' 
                    : 'border-gray-200 hover:border-emerald-300 hover:shadow-md'
                  } focus:outline-none`}
                rows={3}
                placeholder="Describa el motivo principal de la consulta..."
              />
            </div>
            
            <div className="relative group">
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Activity className="w-4 h-4 mr-2 text-emerald-500" />
                Antecedentes Médicos
              </label>
              <textarea
                name="antecedentes"
                value={formData.antecedentes}
                onChange={handleChange}
                onFocus={() => handleFocus('antecedentes')}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none
                  ${focusedField === 'antecedentes' 
                    ? 'border-emerald-500 shadow-lg shadow-emerald-200 scale-105 bg-white' 
                    : 'border-gray-200 hover:border-emerald-300 hover:shadow-md'
                  } focus:outline-none`}
                rows={3}
                placeholder="Historial médico relevante, medicamentos, alergias..."
              />
            </div>
          </div>
        </div>

        {/* Vision Assessment Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
          <div className="flex items-center mb-6">
            <Eye className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Refracción Objetiva/Subjetiva</h2>
          </div>
          
          {/* Right Eye (OD) */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
              <h3 className="text-lg font-bold text-gray-700">Ojo Derecho (OD)</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative group">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Esfera</label>
                <input
                  type="text"
                  name="esferaOD"
                  value={formData.esferaOD}
                  onChange={handleChange}
                  onFocus={() => handleFocus('esferaOD')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/70 backdrop-blur-sm
                    ${focusedField === 'esferaOD' 
                      ? 'border-purple-500 shadow-lg shadow-purple-200 scale-105 bg-white' 
                      : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
                    } focus:outline-none`}
                  placeholder="±0.00"
                />
              </div>
              <div className="relative group">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Cilindro</label>
                <input
                  type="text"
                  name="cilindroOD"
                  value={formData.cilindroOD}
                  onChange={handleChange}
                  onFocus={() => handleFocus('cilindroOD')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/70 backdrop-blur-sm
                    ${focusedField === 'cilindroOD' 
                      ? 'border-purple-500 shadow-lg shadow-purple-200 scale-105 bg-white' 
                      : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
                    } focus:outline-none`}
                  placeholder="±0.00"
                />
              </div>
              <div className="relative group">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Eje</label>
                <input
                  type="text"
                  name="ejeOD"
                  value={formData.ejeOD}
                  onChange={handleChange}
                  onFocus={() => handleFocus('ejeOD')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/70 backdrop-blur-sm
                    ${focusedField === 'ejeOD' 
                      ? 'border-purple-500 shadow-lg shadow-purple-200 scale-105 bg-white' 
                      : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
                    } focus:outline-none`}
                  placeholder="0°-180°"
                />
              </div>
            </div>
          </div>

          {/* Left Eye (OI) */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mr-3"></div>
              <h3 className="text-lg font-bold text-gray-700">Ojo Izquierdo (OI)</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative group">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Esfera</label>
                <input
                  type="text"
                  name="esferaOI"
                  value={formData.esferaOI}
                  onChange={handleChange}
                  onFocus={() => handleFocus('esferaOI')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/70 backdrop-blur-sm
                    ${focusedField === 'esferaOI' 
                      ? 'border-purple-500 shadow-lg shadow-purple-200 scale-105 bg-white' 
                      : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
                    } focus:outline-none`}
                  placeholder="±0.00"
                />
              </div>
              <div className="relative group">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Cilindro</label>
                <input
                  type="text"
                  name="cilindroOI"
                  value={formData.cilindroOI}
                  onChange={handleChange}
                  onFocus={() => handleFocus('cilindroOI')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/70 backdrop-blur-sm
                    ${focusedField === 'cilindroOI' 
                      ? 'border-purple-500 shadow-lg shadow-purple-200 scale-105 bg-white' 
                      : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
                    } focus:outline-none`}
                  placeholder="±0.00"
                />
              </div>
              <div className="relative group">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Eje</label>
                <input
                  type="text"
                  name="ejeOI"
                  value={formData.ejeOI}
                  onChange={handleChange}
                  onFocus={() => handleFocus('ejeOI')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/70 backdrop-blur-sm
                    ${focusedField === 'ejeOI' 
                      ? 'border-purple-500 shadow-lg shadow-purple-200 scale-105 bg-white' 
                      : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
                    } focus:outline-none`}
                  placeholder="0°-180°"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Diagnosis and Treatment Section */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-100">
          <div className="flex items-center mb-4">
            <Stethoscope className="w-6 h-6 text-orange-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Diagnóstico y Tratamiento</h2>
          </div>
          
          <div className="space-y-6">
            <div className="relative group">
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Target className="w-4 h-4 mr-2 text-orange-500" />
                Diagnóstico
              </label>
              <textarea
                name="diagnostico"
                value={formData.diagnostico}
                onChange={handleChange}
                onFocus={() => handleFocus('diagnostico')}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none
                  ${focusedField === 'diagnostico' 
                    ? 'border-orange-500 shadow-lg shadow-orange-200 scale-105 bg-white' 
                    : 'border-gray-200 hover:border-orange-300 hover:shadow-md'
                  } focus:outline-none`}
                rows={3}
                placeholder="Diagnóstico clínico detallado..."
              />
            </div>
            
            <div className="relative group">
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Activity className="w-4 h-4 mr-2 text-orange-500" />
                Tratamiento Recomendado
              </label>
              <textarea
                name="tratamiento"
                value={formData.tratamiento}
                onChange={handleChange}
                onFocus={() => handleFocus('tratamiento')}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none
                  ${focusedField === 'tratamiento' 
                    ? 'border-orange-500 shadow-lg shadow-orange-200 scale-105 bg-white' 
                    : 'border-gray-200 hover:border-orange-300 hover:shadow-md'
                  } focus:outline-none`}
                rows={3}
                placeholder="Plan de tratamiento, recomendaciones, seguimiento..."
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            onClick={handleSubmit}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <Save className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            Guardar
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-gray-500">
        <p className="text-sm">OptiSys © 2025</p>
        <div className="flex items-center justify-center mt-2">
          <Eye className="w-4 h-4 mr-2" />
          <span className="text-xs">Cuidando tu visión con tecnología</span>
        </div>
      </div>
    </main>
  );
}

export default CrearHistoria;
