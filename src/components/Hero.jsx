export default function Hero() {
  return (
    <section className="w-full h-[95vh] flex items-center justify-center bg-[url('/bg-grid.svg')] bg-cover bg-center relative">

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Meet <span className="text-mgwBlue">Obi</span>
        </h1>

        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Your intelligent vehicle co-pilot.  
          Diagnostics · Live Data · Workshop Mode · Parts Intelligence · Turbo Specialist.
        </p>

        <button className="mt-8 px-8 py-4 bg-mgwBlue text-black font-bold rounded-xl hover:bg-mgwGreen transition shadow-lg shadow-mgwBlue/40">
          Download for Android
        </button>
      </div>
    </section>
  );
}
