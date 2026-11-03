import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  ExternalLink, 
  Car, 
  Compass, 
  Copy, 
  Check 
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(siteConfig.address.formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-diner-cream-dark/50 text-diner-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-diner-navy text-diner-yellow text-xs font-display uppercase tracking-widest shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-diner-red" />
            <span>Raleigh, North Carolina</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-diner-navy">
            VISIT SUNNY'S ON GLENWOOD AVENUE
          </h2>

          <p className="text-base text-stone-600">
            Conveniently situated along Glenwood Avenue in Northwest Raleigh, minutes from Brier Creek and Raleigh-Durham International Airport.
          </p>
        </div>

        {/* Grid: Details & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-stone-200/80 p-8 shadow-modern flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="border-b border-stone-100 pb-6">
                <span className="modern-badge text-xs text-diner-red font-bold uppercase tracking-wider block mb-1">
                  Physical Restaurant Location
                </span>
                <h3 className="font-display text-3xl font-bold text-diner-navy uppercase">
                  Sunny's Diner
                </h3>
                <p className="text-lg text-diner-charcoal font-medium mt-1">
                  {siteConfig.address.street}
                </p>
                <p className="text-sm text-stone-600">
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </p>
                
                {/* Copy Address Button */}
                <div className="pt-3">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-diner-navy bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-full transition-colors font-medium"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Address Copied!' : 'Copy Full Address'}</span>
                  </button>
                </div>
              </div>

              {/* Convenience Features */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-diner-navy/5 text-diner-navy flex items-center justify-center shrink-0">
                    <Car className="w-4 h-4 text-diner-navy" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-diner-navy">Ample Free Parking</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Spacious customer parking right outside the diner entrance for easy dine-in and curbside carryout.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-diner-navy/5 text-diner-navy flex items-center justify-center shrink-0">
                    <Compass className="w-4 h-4 text-diner-navy" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-diner-navy">Highway Proximity</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Minutes from US-70, I-540, and Brier Creek Shopping Center.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-diner-navy/5 text-diner-navy flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-diner-navy" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-diner-navy">Carryout Counter</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Dedicated counter pickup window inside the main entrance.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-diner-red hover:bg-diner-red-hover text-white font-display text-sm sm:text-base uppercase tracking-wider py-3.5 px-5 rounded-2xl font-bold shadow-glow-red transition-all active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 text-diner-yellow" />
                <span>Get Directions</span>
              </a>

              <Link
                to="/carryout-contact"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-diner-navy font-display text-sm sm:text-base uppercase tracking-wider py-3.5 px-5 rounded-2xl font-bold transition-colors"
              >
                <Clock className="w-4 h-4 text-diner-navy" />
                <span>Hours & Pickup</span>
              </Link>
            </div>

          </div>

          {/* Interactive Google Map with Modern Card Container */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200/80 shadow-modern overflow-hidden flex flex-col">
            <div className="bg-diner-navy text-white px-5 py-3.5 flex items-center justify-between text-xs">
              <span className="font-display uppercase tracking-wider text-diner-yellow font-bold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-diner-red" />
                <span>8710 Glenwood Ave, Raleigh, NC 27617</span>
              </span>
              <a
                href={siteConfig.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-white underline flex items-center gap-1 text-xs"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative w-full h-80 sm:h-96 lg:h-full min-h-[340px] bg-stone-100">
              <iframe
                title="Sunny's Diner Location Map on Glenwood Ave, Raleigh NC"
                src={siteConfig.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
