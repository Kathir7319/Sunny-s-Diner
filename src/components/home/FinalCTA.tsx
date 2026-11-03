import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Utensils, Sun, ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenOrderModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="py-24 bg-diner-navy text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-diner-red/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Sun Badge */}
        <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-diner-red to-diner-red-light rounded-2xl flex items-center justify-center border border-white/20 shadow-glow-red">
          <Sun className="w-9 h-9 text-diner-yellow fill-diner-yellow" />
        </div>

        {/* Required Headline */}
        <div className="space-y-3">
          <span className="modern-badge text-xs sm:text-sm tracking-widest text-diner-yellow font-bold uppercase inline-block">
            SUNNY'S DINER • 8710 GLENWOOD AVE • RALEIGH, NC
          </span>
          <h2 className="font-display text-4xl sm:text-7xl font-bold uppercase tracking-tight text-white max-w-3xl mx-auto leading-tight">
            YOUR NEXT FAVORITE MEAL IS WAITING.
          </h2>
          <p className="text-base sm:text-lg text-stone-300 max-w-xl mx-auto">
            Stop in today or explore our digital menu for quick carryout pickup on Glenwood Avenue.
          </p>
        </div>

        {/* Required Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <Link
            to="/menu"
            className="inline-flex items-center justify-center gap-2.5 bg-diner-yellow hover:bg-diner-yellow-dark text-diner-navy font-display text-lg uppercase tracking-wider px-8 py-4 rounded-2xl font-bold shadow-glow-yellow transition-all active:scale-[0.98]"
          >
            <Utensils className="w-5 h-5 text-diner-navy" />
            <span>View Our Menu</span>
            <ArrowRight className="w-4 h-4 text-diner-navy" />
          </Link>

          <button
            onClick={onOpenOrderModal}
            className="inline-flex items-center justify-center gap-2.5 bg-diner-red hover:bg-diner-red-hover text-white font-display text-lg uppercase tracking-wider px-8 py-4 rounded-2xl font-bold shadow-glow-red transition-all active:scale-[0.98]"
          >
            <ShoppingBag className="w-5 h-5 text-diner-yellow" />
            <span>Order Carryout</span>
          </button>
        </div>

      </div>
    </section>
  );
};
