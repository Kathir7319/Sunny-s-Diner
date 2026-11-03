import React from 'react';
import { 
  X, 
  ShoppingBag, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  Utensils, 
  Car, 
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

interface OrderingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderingModal: React.FC<OrderingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-diner-navy-dark/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-stone-100 transform transition-all"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="bg-diner-navy text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-diner-red flex items-center justify-center shadow-glow-red">
              <ShoppingBag className="w-5 h-5 text-diner-yellow" />
            </div>
            <div>
              <h3 id="modal-title" className="font-display text-xl font-bold uppercase tracking-wide text-white">
                Sunny's Carryout Ordering
              </h3>
              <p className="text-xs text-stone-300">8710 Glenwood Ave • Raleigh, NC</p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 bg-diner-cream-soft">
          
          {/* Status Alert */}
          {siteConfig.ordering.isLive ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-emerald-950">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Direct Online Ordering is Active!</span>
              </div>
              <p className="text-xs mt-1.5 text-emerald-800 leading-relaxed">
                You will be transferred to our secure restaurant ordering portal powered by {siteConfig.ordering.provider}.
              </p>
              <div className="mt-4">
                <a
                  href={siteConfig.ordering.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-diner-red hover:bg-diner-red-hover text-white font-display text-base uppercase tracking-wider py-3.5 px-5 rounded-2xl font-bold shadow-glow-red transition-all"
                >
                  <span>Proceed to {siteConfig.ordering.provider} Ordering</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 text-amber-950">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display uppercase text-sm tracking-wide text-amber-900 font-bold">
                      Carryout Ordering Readiness
                    </h4>
                    <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                      Our direct online ordering gateway (Square / Toast) is currently undergoing kitchen integration. In the meantime, carryout meals can be ordered directly at our counter or by visiting us at 8710 Glenwood Ave.
                    </p>
                  </div>
                </div>
              </div>

              {/* Carryout Steps */}
              <div className="space-y-3">
                <h4 className="font-display uppercase text-xs tracking-wider text-diner-navy font-bold">
                  How Carryout Works at Sunny's:
                </h4>
                
                <div className="grid grid-cols-1 gap-2.5">
                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-stone-200/80 shadow-sm">
                    <div className="w-7 h-7 rounded-full bg-diner-navy text-diner-yellow font-display font-bold text-xs flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div>
                      <p className="text-xs font-bold text-diner-navy">Explore Digital Menu</p>
                      <p className="text-[11px] text-stone-500">
                        Search all breakfast platters, griddle stacks, and meat & three specials.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-stone-200/80 shadow-sm">
                    <div className="w-7 h-7 rounded-full bg-diner-navy text-diner-yellow font-display font-bold text-xs flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div>
                      <p className="text-xs font-bold text-diner-navy">Counter Order or Quick Visit</p>
                      <p className="text-[11px] text-stone-500">
                        Stop by our front counter at 8710 Glenwood Ave. Our kitchen packs everything piping hot.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-stone-200/80 shadow-sm">
                    <div className="w-7 h-7 rounded-full bg-diner-navy text-diner-yellow font-display font-bold text-xs flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div>
                      <p className="text-xs font-bold text-diner-navy">Curbside & Fast Pickup</p>
                      <p className="text-[11px] text-stone-500">
                        Park in our dedicated customer spaces on Glenwood Ave for convenient access.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to="/menu"
                  onClick={onClose}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-diner-navy hover:bg-diner-navy-light text-white font-display text-sm uppercase tracking-wider py-3.5 px-4 rounded-2xl font-bold transition-colors"
                >
                  <Utensils className="w-4 h-4 text-diner-yellow" />
                  <span>Browse Digital Menu</span>
                </Link>

                <Link
                  to="/carryout-contact"
                  onClick={onClose}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-diner-red hover:bg-diner-red-hover text-white font-display text-sm uppercase tracking-wider py-3.5 px-4 rounded-2xl font-bold shadow-glow-red transition-colors"
                >
                  <MapPin className="w-4 h-4 text-diner-yellow" />
                  <span>Hours & Directions</span>
                </Link>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-stone-50 px-6 py-4 flex items-center justify-between text-xs text-stone-500 border-t border-stone-100">
          <span className="flex items-center gap-1.5 text-diner-navy font-medium">
            <Car className="w-4 h-4 text-diner-red" />
            <span>Curbside Pickup Friendly</span>
          </span>
          <button
            onClick={onClose}
            className="text-stone-500 hover:text-diner-navy font-medium underline text-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
