export default function EnginePackCard({ pack }) {
  return (
    <div className="bg-[#0d0d0d] border border-[#1d1d1d] rounded-xl p-4 shadow-lg hover:shadow-2xl hover:border-[#00aaff] transition-all duration-300">
      <img
        src={pack.image}
        alt={pack.title}
        className="rounded-lg w-full h-40 object-cover mb-4"
      />

      <h2 className="text-xl font-bold text-white">{pack.title}</h2>
      <span className="text-[#00ccff] text-sm">{pack.badge}</span>

      <p className="text-gray-400 text-sm mt-2">{pack.description}</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-[#00ccff] font-bold">{pack.price}</span>

        {pack.stripeUrl ? (
          <a
            href={pack.stripeUrl}
            className="bg-[#00ccff] hover:bg-[#0099cc] text-black font-bold px-4 py-1 rounded-lg transition-all"
          >
            Buy Now
          </a>
        ) : (
          <span className="text-green-400 font-semibold">Included</span>
        )}
      </div>
    </div>
  );
}
