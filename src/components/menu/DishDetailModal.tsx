import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  CheckCircle2, 
  Sparkles, 
  Plus, 
  Minus 
} from 'lucide-react';
import { MenuItem } from '../../types';
import { useCart } from '../../context/CartContext';

interface DishDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ item, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState('');

  if (!item) return null;

  const handleAdd = () => {
    addToCart(item, quantity, instructions);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-diner-navy-dark/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-stone-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Image Frame */}
        <div className="relative aspect-[16/10] bg-diner-navy overflow-hidden shrink-0">
          <img 
            src={item.imageUrl} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-md transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <span className="modern-badge text-xs bg-diner-red text-white px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1 shadow-md">
                <Sparkles className="w-3 h-3 text-diner-yellow" />
                <span>Sunny's Diner Classic</span>
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mt-1 drop-shadow">
                {item.name}
              </h2>
            </div>
            
            <span className="font-display text-2xl font-bold text-diner-yellow drop-shadow bg-diner-navy/80 px-3 py-1 rounded-xl backdrop-blur-md border border-white/10">
              {item.price || 'Market'}
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {item.description && (
            <p className="text-sm text-diner-charcoal/85 leading-relaxed">
              {item.description}
            </p>
          )}

          {item.servingNote && (
            <div className="p-3 bg-diner-cream rounded-xl text-xs text-diner-navy/80 border border-stone-200">
              <span className="font-bold text-diner-red">Kitchen Note:</span> {item.servingNote}
            </div>
          )}

          {/* Dietary Tags */}
          {item.dietaryTags && item.dietaryTags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {item.dietaryTags.map((tag) => (
                <span 
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Verification Status */}
          <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-100">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Freshly prepared on our Glenwood Ave flat-top grill upon order.</span>
          </div>

          {/* Special Instructions Input */}
          <div className="space-y-1.5 pt-2">
            <label htmlFor="dish-instructions" className="block text-xs font-display uppercase tracking-wider font-bold text-diner-navy">
              Special Preparation Request (Optional)
            </label>
            <input 
              id="dish-instructions"
              type="text"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="e.g. dressing on the side, extra crispy bacon..."
              className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:border-diner-navy focus:outline-none"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 bg-white rounded-full p-1.5 border border-stone-200 shadow-sm">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-1.5 rounded-full hover:bg-stone-100 text-stone-700"
              aria-label="Decrease"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-mono text-sm font-bold w-6 text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-1.5 rounded-full hover:bg-stone-100 text-stone-700"
              aria-label="Increase"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleAdd}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-diner-red hover:bg-diner-red-hover text-white font-display text-base uppercase tracking-wider py-3 px-5 rounded-2xl font-bold shadow-glow-red transition-all"
          >
            <ShoppingBag className="w-4 h-4 text-diner-yellow" />
            <span>Add to Carryout Bag</span>
          </button>
        </div>

      </div>
    </div>
  );
};
