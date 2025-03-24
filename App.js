import React, { useState } from "react";
import { Fingerprint } from "lucide-react";

export default function App() {
  const [captured, setCaptured] = useState(false);
  return (
    <div className="h-screen w-screen bg-blue-900 text-white flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-4">MicroID Servicio de Verificación Biométrica</h1>
      {!captured ? (
        <>
          <p className="mb-4">Por favor coloque su dedo para comenzar el proceso.</p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            onClick={() => setCaptured(true)}
          >
            Capturar Huella
          </button>
        </>
      ) : (
        <>
          <Fingerprint className="w-16 h-16 text-green-400 animate-bounce mb-4" />
          <h2 className="text-2xl font-semibold">Huella capturada correctamente</h2>
        </>
      )}
    </div>
  );
}
