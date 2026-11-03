import React, { useEffect } from 'react';
import { 
  ShoppingBag, 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Car, 
  Clock, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { HoursDisplay } from '../components/contact/HoursDisplay';
import { CarryoutGuide } from '../components/contact/CarryoutGuide';
import { ContactCard } from '../components/contact/ContactCard';

interface CarryoutContactPageProps {
  onOpenOrderModal: () => void;
}

export const CarryoutContactPage: React.FC<CarryoutContactPageProps> = ({ onOpenOrderModal }) => {
  useEffect(() => {
    document.title = "Carryout, Hours & Location — Sunny's Diner | Raleigh, NC";
  }, []);

  return (
    <div className="min-h-screen bg-diner-cream pb-28">
      
      {/* Header Banner */}
      <section className="bg-diner-navy text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-diner-navy-dark via-diner-navy to-diner-navy-light/90"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-diner-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-diner-red text-white text-xs font-display uppercase tracking-widest shadow-glow-red">
            <ShoppingBag className="w-3.5 h-3.5 text-diner-yellow" />
            <span>Glenwood Avenue Carryout & Guest Service</span>
          </div>

          {/* Exact Required Headline */}
          <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-white">
            GOOD FOOD, READY WHEN YOU ARE.
          </h1>

          {/* Exact Required Supporting Text */}
          <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Explore Sunny's Diner and discover convenient ways to enjoy your favorite meals.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-2 bg-diner-yellow hover:bg-diner-yellow-dark text-diner-navy font-display text-sm sm:text-base uppercase tracking-wider px-7 py-3.5 rounded-2xl font-bold shadow-glow-yellow transition-all active:scale-98"
            >
              <ShoppingBag className="w-4 h-4 text-diner-navy" />
              <span>Start Carryout Order</span>
            </button>

            <a
              href={siteConfig.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-display text-sm sm:text-base uppercase tracking-wider px-7 py-3.5 rounded-2xl font-bold border border-white/10 transition-colors"
            >
              <Navigation className="w-4 h-4 text-diner-red" />
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        {/* Top 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Carryout Guide (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <CarryoutGuide onOpenOrderModal={onOpenOrderModal} />

            {/* Modern Interactive Google Map */}
            <div className="bg-white rounded-3xl border border-stone-200/80 shadow-modern overflow-hidden">
              <div className="bg-diner-navy text-white px-5 py-4 flex items-center justify-between text-xs">
                <span className="font-display uppercase tracking-wider text-diner-yellow font-bold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-diner-red" />
                  <span>8710 Glenwood Ave • Raleigh, NC 27617</span>
                </span>
                <a
                  href={siteConfig.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-white underline flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="w-full h-80 bg-stone-100">
                <iframe
                  title="Sunny's Diner Glenwood Ave Raleigh Location Map"
                  src={siteConfig.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="p-4 bg-stone-50 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
                <span>Free customer parking and easy curbside pickup available on-site.</span>
                <a
                  href={siteConfig.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-diner-red hover:underline font-bold font-display uppercase tracking-wider shrink-0"
                >
                  Open Directions App →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hours & Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <HoursDisplay />
            <ContactCard onOpenOrderModal={onOpenOrderModal} />
          </div>

        </div>

        {/* FAQs */}
        <div className="bg-white rounded-3xl border border-stone-200/80 shadow-modern p-8 sm:p-10 space-y-8">
          <div className="border-b border-stone-100 pb-5">
            <h3 className="font-display text-3xl font-bold uppercase text-diner-navy">
              Frequently Asked Carryout Questions
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Helpful tips for picking up your breakfast and lunch orders at Sunny's Diner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2 p-5 rounded-2xl bg-stone-50 border border-stone-100">
              <h4 className="font-display text-base font-bold uppercase text-diner-navy flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Where do I pick up my carryout order?</span>
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Step inside the front entrance at 8710 Glenwood Ave and head directly to our carryout register. Inform the host or cashier of your name and order ticket.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-stone-50 border border-stone-100">
              <h4 className="font-display text-base font-bold uppercase text-diner-navy flex items-center gap-2">
                <Car className="w-4 h-4 text-diner-red shrink-0" />
                <span>Is curbside pickup available?</span>
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Yes! When pulling into our customer parking lot on Glenwood Avenue, park in any designated spot and mention curbside when placing your carryout order.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-stone-50 border border-stone-100">
              <h4 className="font-display text-base font-bold uppercase text-diner-navy flex items-center gap-2">
                <Clock className="w-4 h-4 text-diner-yellow-dark shrink-0" />
                <span>How quickly are carryout orders ready?</span>
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Most classic breakfast items, pancake stacks, and meat & three plates are freshly prepared within 15–20 minutes.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-stone-50 border border-stone-100">
              <h4 className="font-display text-base font-bold uppercase text-diner-navy flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-diner-navy shrink-0" />
                <span>Direct vs. Third-Party Ordering</span>
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                We prioritize direct carryout so you receive fresh, hot food without marked-up delivery marketplace fees.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
