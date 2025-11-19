export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="p-6 rounded-2xl bg-cardBg border border-white/10 hover:border-mgwBlue transition shadow-lg shadow-black/30">
      <div className="text-mgwBlue text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
}
