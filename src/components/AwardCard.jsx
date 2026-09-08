export default function AwardCard({ title, award }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={award.image}
          alt={`${award.name} — ${title}`}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">
          {title}
        </span>
        <h3 className="text-lg font-bold text-navy mt-2 mb-1">{award.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{award.team}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{award.description}</p>
      </div>
    </div>
  );
}
