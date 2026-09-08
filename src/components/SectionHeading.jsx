export default function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-navy">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
