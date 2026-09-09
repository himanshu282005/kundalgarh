import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-400">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            {index > 0 && (
              <svg className="w-3.5 h-3.5 text-amber-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            )}
            {item.href ? (
              <Link to={item.href} className="hover:text-amber-400 text-slate-300 font-medium transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-amber-400 font-bold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
