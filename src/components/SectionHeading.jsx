export default function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-8 sm:mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sports uppercase">
        {title}
      </h2>
      <div className={`h-1 w-12 bg-gradient-to-r from-amber-400 to-brand-500 rounded-full mt-2.5 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`mt-3 text-slate-400 text-sm sm:text-base max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
