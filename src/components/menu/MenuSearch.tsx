import React from 'react';
import { Search, X, Sparkles } from 'lucide-react';

interface MenuSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  resultCount: number;
  totalCount: number;
}

export const MenuSearch: React.FC<MenuSearchProps> = ({
  searchTerm,
  onSearchChange,
  resultCount,
  totalCount,
}) => {
  const suggestedKeywords = ['Pancake', 'Eggs', 'Bacon', 'Waffle', 'Pot Roast', 'Biscuit'];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-3">
      <div className="relative flex items-center">
        {/* Search Icon */}
        <div className="absolute left-5 pointer-events-none text-stone-400">
          <Search className="w-5 h-5" />
        </div>

        {/* Modern Search Input Field */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search your favorite diner dishes..."
          className="w-full pl-14 pr-12 py-4 bg-white/95 text-diner-charcoal placeholder-stone-400 rounded-2xl border border-white/20 shadow-modern focus:border-diner-red focus:ring-4 focus:ring-diner-red/10 focus:outline-none text-base font-medium transition-all"
          aria-label="Search diner dishes"
        />

        {/* Clear Search Button */}
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 p-1.5 rounded-full text-stone-400 hover:text-diner-red hover:bg-stone-100 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Suggested Quick Search Chips */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-white/80">
        <span className="text-white/60 text-[11px] flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-diner-yellow" />
          <span>Popular:</span>
        </span>
        {suggestedKeywords.map((kw) => (
          <button
            key={kw}
            onClick={() => onSearchChange(kw)}
            className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/25 text-white/90 text-[11px] transition-colors border border-white/10"
          >
            {kw}
          </button>
        ))}
      </div>

      {/* Real-time status */}
      <div className="flex items-center justify-between text-xs px-2 text-stone-400">
        <span>
          {searchTerm ? (
            <span>
              Showing <strong className="text-white">{resultCount}</strong> match{resultCount === 1 ? '' : 'es'} for "<em>{searchTerm}</em>"
            </span>
          ) : (
            <span>Browsing all <strong className="text-white">{totalCount}</strong> verified diner items</span>
          )}
        </span>

        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="text-diner-yellow hover:underline font-semibold"
          >
            Clear search
          </button>
        )}
      </div>
    </div>
  );
};
