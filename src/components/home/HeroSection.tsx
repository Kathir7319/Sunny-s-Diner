import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Utensils, 
  MapPin, 
  Sun, 
  Star, 
  ArrowRight,
  Coffee
} from 'lucide-react';

interface HeroSectionProps {
  onOpenOrderModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="relative bg-diner-navy text-white overflow-hidden py-16 sm:py-24 lg:py-28">
      {/* Background American Diner Imagery with Modern Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1920&q=85"
          alt="Sunny's Diner classic American breakfast spread"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-diner-navy via-diner-navy/95 to-diner-navy/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-diner-navy via-transparent to-black/20"></div>
      </div>

      {/* Modern Ambient Glow Spheres */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-diner-yellow/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-diner-red/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Modern Location & Quality Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-dark text-xs text-white border border-white/10 shadow-modern-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-diner-yellow">Glenwood Avenue • Raleigh, NC</span>
              <span className="text-white/20">•</span>
              <span className="text-white/80 hidden sm:inline">Fresh Breakfast & Comfort Classics</span>
            </div>

            {/* Required Large Bold Headline */}
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-[0.95] text-white">
              <span className="block text-white">Good Food.</span>
              <span className="block text-diner-yellow">Good Mood.</span>
              <span className="block text-diner-red">That's Sunny's.</span>
            </h1>

            {/* Exact Required Supporting Copy */}
            <p className="text-lg sm:text-xl text-stone-300 max-w-2xl font-normal leading-relaxed">
              Your neighborhood diner in Raleigh, serving up the comfort, flavor, and familiar favorites you love.
            </p>

            {/* Modern CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-3 bg-diner-yellow hover:bg-diner-yellow-dark text-diner-navy font-display text-base sm:text-lg uppercase tracking-wider px-8 py-4 rounded-2xl font-bold shadow-glow-yellow transition-all active:scale-[0.98]"
              >
                <Utensils className="w-5 h-5 text-diner-navy" />
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 text-diner-navy" />
              </Link>

              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center justify-center gap-3 bg-diner-red hover:bg-diner-red-hover text-white font-display text-base sm:text-lg uppercase tracking-wider px-8 py-4 rounded-2xl font-bold shadow-glow-red transition-all active:scale-[0.98]"
              >
                <ShoppingBag className="w-5 h-5 text-diner-yellow" />
                <span>Order Carryout</span>
              </button>
            </div>

            {/* Modern Highlights Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-stone-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-diner-yellow shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-white block text-sm">Fresh Brewed</span>
                  <span className="text-stone-400">Classic Morning Coffee</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-diner-yellow shrink-0">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-white block text-sm">Quick Carryout</span>
                  <span className="text-stone-400">Curbside Pickup</span>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-diner-yellow shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-white block text-sm">Glenwood Ave</span>
                  <span className="text-stone-400">Raleigh NC 27617</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Modern Interactive Food Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Modern Glass Showcase Card */}
              <div className="bg-white/10 p-3 rounded-3xl backdrop-blur-2xl border border-white/20 shadow-modern-xl">
                
                {/* Photo Frame */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80"
                    alt="Sunny's Griddle Pancakes with golden butter and maple syrup"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Floating Tags */}
                  <div className="absolute top-3 left-3">
                    <span className="modern-badge text-xs bg-diner-red text-white px-3 py-1 rounded-full uppercase tracking-wider font-bold shadow-md">
                      Griddle Signature
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide">
                      Golden Buttermilk Pancakes
                    </h3>
                    <p className="text-xs text-stone-300 mt-0.5">
                      Grilled golden on our seasoned Raleigh flat-top grill
                    </p>
                  </div>
                </div>

                {/* Subcard Review & Order Bar */}
                <div className="p-4 mt-3 bg-white rounded-2xl text-diner-navy flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-diner-navy flex items-center justify-center text-diner-yellow font-display text-sm font-bold">
                      4.5★
                    </div>
                    <div>
                      <div className="flex items-center text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-500" />
                        ))}
                      </div>
                      <span className="text-xs text-stone-600 font-semibold block">
                        Local Breakfast Sentiment
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/menu?category=griddle"
                    className="text-xs font-display uppercase tracking-wider text-diner-red hover:text-diner-navy font-bold flex items-center gap-1 bg-diner-red/10 px-3 py-1.5 rounded-full transition-colors"
                  >
                    <span>View Dish</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

              </div>

              {/* Floating Ambient Badge */}
              <div className="absolute -bottom-4 -left-4 bg-diner-navy text-white px-4 py-2.5 rounded-2xl border border-white/20 shadow-modern-lg flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-diner-red flex items-center justify-center">
                  <Sun className="w-4 h-4 text-diner-yellow" />
                </div>
                <div>
                  <span className="font-display uppercase text-xs font-bold text-white block">
                    Sunny's Diner
                  </span>
                  <span className="text-[11px] text-diner-yellow">
                    8710 Glenwood Ave
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
