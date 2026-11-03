import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  MapPin, 
  ExternalLink, 
  Clock,
  Car,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { siteConfig } from '../data/siteConfig';

export const CarryoutDrawer: React.FC = () => {
  const { 
    items, 
    isDrawerOpen, 
    closeDrawer, 
    updateQuantity, 
    clearCart,
    subtotal, 
    totalItems 
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-diner-navy-dark/60 backdrop-blur-sm transition-opacity"
        onClick={closeDrawer}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 bg-diner-navy text-white flex items-center justify-between border-b border-diner-navy-light">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-diner-red flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-diner-yellow" />
              </div>
              <div>
                <h2 className="font-display text-xl uppercase font-bold tracking-wide text-white">
                  Carryout Bag
                </h2>
                <p className="text-xs text-diner-cream/70 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-diner-yellow" />
                  <span>8710 Glenwood Ave, Raleigh</span>
                </p>
              </div>
            </div>

            <button
              onClick={closeDrawer}
              className="p-2 text-diner-cream hover:text-white rounded-full hover:bg-diner-navy-light transition-colors"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-diner-cream-soft">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-diner-cream flex items-center justify-center text-diner-charcoal/40">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-lg uppercase font-bold text-diner-navy">
                    Your Carryout Bag is Empty
                  </h3>
                  <p className="text-xs text-diner-charcoal/70 max-w-xs">
                    Explore our digital menu to select classic breakfast platters, griddle stacks, and diner specials.
                  </p>
                </div>
                <button
                  onClick={closeDrawer}
                  className="px-5 py-2.5 rounded-full bg-diner-navy text-white text-xs font-display uppercase tracking-wider font-bold hover:bg-diner-navy-light transition-colors"
                >
                  Browse Menu Items
                </button>
              </div>
            ) : orderConfirmed ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display text-xl uppercase font-bold text-emerald-950">
                    Carryout Summary Generated!
                  </h3>
                  <p className="text-xs text-emerald-800 mt-1">
                    Your carryout selection for {customerName || 'Guest'} has been prepared for counter pickup or Square ordering transfer.
                  </p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-emerald-200 text-left text-xs space-y-1 font-mono text-emerald-900">
                  <p><strong>Diner:</strong> Sunny's Diner</p>
                  <p><strong>Pickup:</strong> 8710 Glenwood Ave</p>
                  <p><strong>Items:</strong> {totalItems} dishes</p>
                  <p><strong>Estimated Total:</strong> ${subtotal.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => {
                    setOrderConfirmed(false);
                    clearCart();
                    closeDrawer();
                  }}
                  className="w-full py-2.5 rounded-xl bg-diner-navy text-white text-xs font-display uppercase tracking-wider font-bold"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-diner-charcoal/70 pb-1">
                  <span>{totalItems} item{totalItems === 1 ? '' : 's'} ready for pickup</span>
                  <button
                    onClick={clearCart}
                    className="text-diner-red hover:underline font-semibold flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear all</span>
                  </button>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  {items.map(({ item, quantity }) => (
                    <div 
                      key={item.id}
                      className="bg-white p-3.5 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-3"
                    >
                      <img 
                        src={item.imageUrl} 
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0 border border-stone-100"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-sm font-bold uppercase text-diner-navy truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-diner-red font-semibold">
                          {item.price || 'Market Price'}
                        </p>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 bg-stone-100 rounded-full px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, quantity - 1)}
                          className="p-1 rounded-full text-stone-600 hover:text-diner-red hover:bg-white transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-xs font-bold w-4 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, quantity + 1)}
                          className="p-1 rounded-full text-stone-600 hover:text-diner-red hover:bg-white transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Name Input */}
                <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-2">
                  <label htmlFor="customer-name" className="block text-xs font-display uppercase tracking-wider font-bold text-diner-navy">
                    Name for Carryout Order
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your first & last name"
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:border-diner-navy focus:outline-none"
                  />
                  <div className="flex items-center gap-2 text-[11px] text-diner-charcoal/70 pt-1">
                    <Car className="w-3.5 h-3.5 text-diner-red shrink-0" />
                    <span>Curbside pickup friendly on Glenwood Ave</span>
                  </div>
                </div>

                {/* Integration Readiness Info */}
                <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-3 text-[11px] text-amber-900 flex items-start gap-2">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Square / Toast Integration Ready:</span> When official direct checkout is active, this bag transfers straight to your merchant portal.
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout Bar */}
          {items.length > 0 && !orderConfirmed && (
            <div className="p-5 bg-white border-t border-stone-200 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-diner-charcoal/70">Estimated Subtotal</span>
                <span className="font-display text-xl font-bold text-diner-navy">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="space-y-2">
                {siteConfig.ordering.isLive ? (
                  <a
                    href={siteConfig.ordering.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-diner-red hover:bg-diner-red-hover text-white font-display text-base uppercase tracking-wider py-3.5 rounded-xl font-bold shadow-glow-red transition-all active:scale-[0.99]"
                  >
                    <span>Proceed to {siteConfig.ordering.provider} Checkout</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    onClick={() => setOrderConfirmed(true)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-diner-red hover:bg-diner-red-hover text-white font-display text-base uppercase tracking-wider py-3.5 rounded-xl font-bold shadow-glow-red transition-all active:scale-[0.99]"
                  >
                    <FileText className="w-4 h-4 text-diner-yellow" />
                    <span>Generate Carryout Order Ticket</span>
                  </button>
                )}

                <p className="text-[10px] text-center text-diner-charcoal/60">
                  Tax and final preparation confirmed at Glenwood Ave counter.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
