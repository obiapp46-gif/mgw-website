import EnginePackCard from "../components/EnginePackCard";
import { enginePacks } from "../components/enginePackData";
import { useEffect } from "react";

export default function EnginePacksPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          Obi Engine Packs
        </h1>

        <p className="text-center text-gray-400 mb-12">
          Unlock advanced diagnostics, OEM data, and engine-specific insights.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {enginePacks.map((pack) => (
            <EnginePackCard key={pack.code} pack={pack} />
          ))}
        </div>
      </div>
    </div>
  );
}
