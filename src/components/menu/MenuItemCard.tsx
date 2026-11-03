import React from 'react';
import { Sparkles, CheckCircle2, Eye, Plus } from 'lucide-react';
import { MenuItem } from '../../types';
import { useCart } from '../../context/CartContext';

interface MenuItemCardProps {
  item: MenuItem;
  onOpenDetail?: (item: MenuItem) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onOpenDetail }) => {
  const { addToCart } = useCart();

  const getDietaryStyle = (tag: string) => {
    switch (tag) {
      case 'Vegetarian':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Gluten-Free':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Dairy-Free':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'Contains Nuts':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Spicy':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-stone-50 text-stone-700 border-stone-200';
    }
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-modern hover:shadow-modern-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      
      <div>
        {/* Modern Photo Aspect */}
        <div 
          className="relative aspect-[16/10] overflow-hidden bg-stone-900 cursor-pointer"
          onClick={() => onOpenDetail && onOpenDetail(item)}
        >
          <img
            src={item.imageUrl}
            alt={item.imageAlt || item.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Special Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {item.isPopular && (
              <span className="modern-badge text-[11px] bg-diner-red text-white px-3 py-1 rounded-full shadow-md font-bold uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-diner-yellow" />
                <span>Guest Favorite</span>
              </span>
            )}
            {item.isDailySpecial && (
              <span className="modern-badge text-[11px] bg-diner-yellow text-diner-navy px-3 py-1 rounded-full shadow-md font-bold uppercase tracking-wider">
                Daily Blackboard
              </span>
            )}
          </div>

          {/* Modern Price Pill */}
          <div className="absolute top-3 right-3 bg-white/95 text-diner-navy px-3 py-1 rounded-full font-display text-base font-bold tracking-tight shadow-md backdrop-blur-md">
            {item.price || 'Market'}
          </div>

          {/* Quick View Hover Pill */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1 font-medium">
              <Eye className="w-3.5 h-3.5" />
              <span>Details</span>
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          
          <h3 
            onClick={() => onOpenDetail && onOpenDetail(item)}
            className="font-display text-2xl font-bold uppercase tracking-wide text-diner-navy group-hover:text-diner-red transition-colors leading-tight cursor-pointer"
          >
            {item.name}
          </h3>

          {item.description && (
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-2">
              {item.description}
            </p>
          )}

          {item.servingNote && (
            <div className="text-[11px] text-stone-600 bg-stone-50 p-2.5 rounded-xl border border-stone-200/60 font-medium">
              <span className="font-bold text-diner-red">Note:</span> {item.servingNote}
            </div>
          )}

          {/* Dietary Tags */}
          {item.dietaryTags && item.dietaryTags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.dietaryTags.map((tag) => (
                <span
                  key={tag}
                  className={`text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full border ${getDietaryStyle(tag)}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Bottom Card Action */}
      <div className="p-6 pt-0">
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
          
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Kitchen Verified</span>
          </div>

          <button
            onClick={() => addToCart(item, 1)}
            className="inline-flex items-center gap-1.5 bg-diner-navy hover:bg-diner-red text-white text-xs font-display uppercase tracking-wider px-4 py-2 rounded-full font-bold shadow-sm active:scale-95 transition-all"
            aria-label={`Add ${item.name} to carryout`}
          >
            <Plus className="w-3.5 h-3.5 text-diner-yellow" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>

    </div>
  );
};
