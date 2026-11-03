import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  MapPin, 
  UtensilsCrossed, 
  ArrowRight
} from 'lucide-react';

export const WelcomeSection: React.FC = () => {
  return (
    <section className="py-24 bg-diner-cream text-diner-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Modern Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Rounded-3xl Atmosphere Image */}
              <div className="rounded-3xl overflow-hidden shadow-modern-xl bg-diner-navy aspect-[4/3] border border-white/60">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                  alt="Sunny's Diner warm neighborhood dining room atmosphere in Raleigh"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Modern Floating Stat Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 rounded-2xl shadow-modern-lg border border-stone-100 max-w-xs flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-diner-yellow/20 flex items-center justify-center shrink-0">
                  <Sun className="w-6 h-6 text-diner-red fill-diner-yellow" />
                </div>
                <div>
                  <span className="modern-badge text-xs text-diner-navy font-bold uppercase tracking-wider block">
                    Glenwood Ave Destination
                  </span>
                  <span className="text-xs text-stone-600 block">
                    Warm coffee, fresh griddle plates & friendly smiles
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="modern-badge text-xs sm:text-sm tracking-widest text-diner-red font-bold uppercase inline-flex items-center gap-2 bg-diner-red/10 px-3.5 py-1.5 rounded-full">
                <span>Raleigh, North Carolina</span>
                <span>•</span>
                <span>8710 Glenwood Ave</span>
              </span>

              {/* Exact Required Heading */}
              <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase text-diner-navy leading-tight">
                YOUR NEIGHBORHOOD DINER.
              </h2>
            </div>

            {/* Exact Required Supporting Copy */}
            <p className="text-lg text-diner-charcoal/90 leading-relaxed font-normal">
              Welcome to Sunny's Diner, a neighborhood dining destination on Glenwood Avenue in Raleigh, North Carolina. Stop by to enjoy familiar diner favorites and a welcoming atmosphere.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Whether you are craving a stack of golden griddle pancakes before work, stopping in for a traditional meat & three plate, or grabbing carryout on your way through Raleigh, our kitchen is dedicated to serving hearty portions and good food that puts you in a good mood.
            </p>

            {/* 2 Modern Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-modern-sm">
                <div className="flex items-center gap-2.5 text-diner-navy mb-2 font-display text-lg uppercase font-bold">
                  <div className="w-8 h-8 rounded-xl bg-diner-red/10 flex items-center justify-center">
                    <UtensilsCrossed className="w-4 h-4 text-diner-red" />
                  </div>
                  <span>Fresh Comfort Food</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Made-to-order breakfast platters, crispy bacon, fluffy waffles, and home-cooked sides.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-modern-sm">
                <div className="flex items-center gap-2.5 text-diner-navy mb-2 font-display text-lg uppercase font-bold">
                  <div className="w-8 h-8 rounded-xl bg-diner-navy/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-diner-navy" />
                  </div>
                  <span>Accessible Location</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Conveniently positioned on Glenwood Ave with free customer parking and quick pickup access.
                </p>
              </div>
            </div>

            {/* Link to Menu */}
            <div className="pt-2">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 text-diner-red hover:text-diner-navy font-display text-base uppercase tracking-wider font-bold transition-colors group"
              >
                <span>View Full Menu & Blackboard Specials</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
