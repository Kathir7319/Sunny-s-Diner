import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Sun, 
  ExternalLink, 
  Navigation, 
  Facebook, 
  CheckCircle2
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface FooterProps {
  onOpenOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderModal }) => {
  return (
    <footer className="bg-diner-navy-dark text-white relative mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Restaurant Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-diner-red to-diner-red-light rounded-2xl flex items-center justify-center border border-white/20 shadow-glow-red">
                <Sun className="w-6 h-6 text-diner-yellow fill-diner-yellow" />
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-tight uppercase text-white block leading-none">
                  Sunny's Diner
                </span>
                <span className="modern-badge text-[11px] text-diner-yellow tracking-widest uppercase">
                  {siteConfig.tagline}
                </span>
              </div>
            </div>

            <p className="text-stone-300 text-sm leading-relaxed max-w-sm">
              Your neighborhood American diner on Glenwood Avenue in Raleigh, North Carolina. Serving fresh breakfast, griddle favorites, meat & three, and warm hospitality to locals and travelers.
            </p>

            <div className="pt-2">
              <a
                href={siteConfig.social.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-diner-red text-white px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border border-white/10 group"
              >
                <Facebook className="w-4 h-4 text-diner-yellow group-hover:text-white" />
                <span>Daily Specials on Facebook</span>
                <ExternalLink className="w-3 h-3 text-white/60" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation & Digital Menu (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-lg tracking-wider uppercase text-diner-yellow mb-5 flex items-center gap-2 font-bold">
              <span>Quick Navigation</span>
            </h3>
            <ul className="space-y-3 text-sm text-stone-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-diner-red">›</span> Home & Welcome
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-diner-red">›</span> Searchable Digital Menu
                </Link>
              </li>
              <li>
                <Link to="/menu?category=breakfast" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-diner-red">›</span> Breakfast Classics
                </Link>
              </li>
              <li>
                <Link to="/menu?category=griddle" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-diner-red">›</span> Griddle Pancakes & Waffles
                </Link>
              </li>
              <li>
                <Link to="/menu?category=meat-and-three" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-diner-red">›</span> Meat & Three Plates
                </Link>
              </li>
              <li>
                <Link to="/carryout-contact" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-diner-red">›</span> Carryout, Hours & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Location & Directions (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-lg tracking-wider uppercase text-diner-yellow mb-5 flex items-center gap-2 font-bold">
              <span>Location</span>
            </h3>
            
            <address className="not-italic text-sm text-stone-300 space-y-1">
              <p className="font-semibold text-white">Sunny's Diner</p>
              <p>{siteConfig.address.street}</p>
              <p>{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</p>
            </address>

            <div className="mt-4 pt-1">
              <a
                href={siteConfig.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-diner-yellow hover:text-white transition-colors font-medium"
              >
                <Navigation className="w-3.5 h-3.5 text-diner-red" />
                <span>Google Maps Directions</span>
              </a>
            </div>
          </div>

          {/* Column 4: Carryout & Online Ordering (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-lg tracking-wider uppercase text-diner-yellow mb-5 flex items-center gap-2 font-bold">
              <span>Carryout Orders</span>
            </h3>
            
            <p className="text-xs text-stone-300 leading-relaxed">
              Order your favorite breakfast platters, griddle stacks, and diner comfort classics for fast carryout pickup at our Glenwood Ave counter.
            </p>

            <button
              onClick={onOpenOrderModal}
              className="w-full inline-flex items-center justify-center gap-2 bg-diner-red hover:bg-diner-red-hover text-white font-display text-sm uppercase tracking-wider py-3.5 px-4 rounded-2xl shadow-glow-red font-bold transition-all active:scale-[0.98]"
            >
              <ShoppingBag className="w-4 h-4 text-diner-yellow" />
              <span>Order Carryout Now</span>
            </button>

            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-[11px] text-stone-300 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Curbside pickup & front counter service available. Integration-ready for Square & Toast.
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} Sunny's Diner. All rights reserved. 8710 Glenwood Ave, Raleigh, NC 27617.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-diner-yellow">Raleigh, North Carolina</span>
            <span>•</span>
            <Link to="/carryout-contact" className="hover:text-white underline">
              Hours & Carryout
            </Link>
            <span>•</span>
            <Link to="/menu" className="hover:text-white underline">
              Digital Menu
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
