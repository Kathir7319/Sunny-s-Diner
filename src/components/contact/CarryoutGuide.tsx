import React from 'react';
import { 
  ShoppingBag, 
  Car, 
  Clock, 
  ShieldCheck
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

interface CarryoutGuideProps {
  onOpenOrderModal: () => void;
}

export const CarryoutGuide: React.FC<CarryoutGuideProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="bg-white rounded-3xl border border-stone-200/80 shadow-modern p-6 sm:p-8 space-y-8">
      
      {/* Title */}
      <div className="border-b border-stone-100 pb-5">
        <span className="modern-badge text-xs text-diner-red font-bold uppercase tracking-wider block mb-1">
          Fast & Convenient Pickup
        </span>
        <h3 className="font-display text-3xl font-bold uppercase text-diner-navy">
          Carryout & Curbside Service
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          Hot, scratch-made diner classics packed securely and ready when you arrive.
        </p>
      </div>

      {/* 3 Step Visual Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100 flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 rounded-xl bg-diner-navy text-diner-yellow font-display font-bold text-sm flex items-center justify-center mb-3">
              1
            </div>
            <h4 className="font-display text-base uppercase font-bold text-diner-navy mb-1">
              Select Your Favorites
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Explore our digital menu for fluffy pancakes, breakfast platters, sandwiches, or hearty meat & three dishes.
            </p>
          </div>
        </div>

        <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100 flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 rounded-xl bg-diner-navy text-diner-yellow font-display font-bold text-sm flex items-center justify-center mb-3">
              2
            </div>
            <h4 className="font-display text-base uppercase font-bold text-diner-navy mb-1">
              Kitchen Preparation
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Our griddle and kitchen team preps your order fresh to ensure piping hot food and fresh sides.
            </p>
          </div>
        </div>

        <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100 flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 rounded-xl bg-diner-navy text-diner-yellow font-display font-bold text-sm flex items-center justify-center mb-3">
              3
            </div>
            <h4 className="font-display text-base uppercase font-bold text-diner-navy mb-1">
              Glenwood Ave Pickup
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {siteConfig.ordering.pickupInstructions}
            </p>
          </div>
        </div>
      </div>

      {/* Modern Online Ordering Integration Card */}
      <div className="bg-diner-navy text-white p-6 rounded-3xl border border-white/10 shadow-modern-lg space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <h4 className="font-display text-xl uppercase tracking-wide text-diner-yellow font-bold">
                Direct Merchant Ordering System
              </h4>
            </div>
            <p className="text-xs text-stone-300 max-w-md leading-relaxed">
              Integration-ready for Square, Toast, or ChowNow. Direct ordering ensures honest pricing and your food handled directly by Sunny's Diner staff.
            </p>
          </div>

          <button
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-diner-red hover:bg-diner-red-hover text-white font-display text-sm uppercase tracking-wider px-6 py-3.5 rounded-2xl font-bold shadow-glow-red transition-all active:scale-98 shrink-0"
          >
            <ShoppingBag className="w-4 h-4 text-diner-yellow" />
            <span>Launch Carryout</span>
          </button>
        </div>

        {/* Feature Badges */}
        <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-stone-300">
          <span className="flex items-center gap-1.5">
            <Car className="w-3.5 h-3.5 text-diner-yellow" />
            <span>Curbside parking spaces</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-diner-yellow" />
            <span>Fast turnaround</span>
          </span>
          <span className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero third-party markups</span>
          </span>
        </div>
      </div>

    </div>
  );
};
