import React from 'react';
import { MenuCategory } from '../../types';
import { menuCategories } from '../../data/menuData';

interface MenuCategoryNavProps {
  activeCategory: MenuCategory | 'all';
  onSelectCategory: (category: MenuCategory | 'all') => void;
  categoryCounts: Record<string, number>;
}

export const MenuCategoryNav: React.FC<MenuCategoryNavProps> = ({
  activeCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  return (
    <div className="sticky top-20 z-30 glass-panel py-3 border-y border-stone-200/80 shadow-modern-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
          
          {/* "All Dishes" Option */}
          <button
            onClick={() => onSelectCategory('all')}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full font-display text-sm uppercase tracking-wider font-bold transition-all shrink-0 ${
              activeCategory === 'all'
                ? 'bg-diner-navy text-diner-yellow shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            All Dishes ({categoryCounts['all'] || 0})
          </button>

          {/* 4 Required Categories */}
          {menuCategories.map((cat) => {
            const count = categoryCounts[cat.id] || 0;
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full font-display text-sm uppercase tracking-wider font-bold transition-all shrink-0 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-diner-red text-white shadow-glow-red'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}

        </div>
      </div>
    </div>
  );
};
