export default function AwardCard({ title, award }) {
  return (
    <div className="bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:border-amber-400/50 hover:shadow-amber-500/10 backdrop-blur-sm transition-all duration-300 group flex flex-col">
      <div className="aspect-[4/3] overflow-hidden bg-slate-950 relative">
        <img
          src={award.image}
          alt={`${award.name} — ${title}`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="inline-block text-[11px] font-bold text-amber-400 bg-amber-400/15 border border-amber-400/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
            {title}
          </span>
          <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mt-1 mb-1 font-sports">
            {award.name}
          </h3>
          <p className="text-xs font-semibold text-amber-400/90 mb-2.5">{award.team}</p>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-2.5">
          {award.description}
        </p>
      </div>
    </div>
  );
}
