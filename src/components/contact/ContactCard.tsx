import React from 'react';
import { 
  MapPin, 
  Navigation, 
  Facebook, 
  ExternalLink, 
  PhoneCall, 
  ShoppingBag
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

interface ContactCardProps {
  onOpenOrderModal: () => void;
}

export const ContactCard: React.FC<ContactCardProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="bg-white rounded-3xl border border-stone-200/80 shadow-modern p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="border-b border-stone-100 pb-5">
        <span className="modern-badge text-xs text-diner-red font-bold uppercase tracking-wider block mb-1">
          Restaurant Details & Directions
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-diner-navy">
          Sunny's Diner Contact
        </h3>
        <p className="text-xs text-stone-500 mt-1">
          Raleigh, North Carolina • Wake County
        </p>
      </div>

      {/* Address & Navigation */}
      <div className="space-y-5">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-2xl bg-diner-navy text-diner-yellow flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-stone-400 tracking-wider block">
              Diner Address
            </span>
            <p className="font-display text-xl font-bold text-diner-navy">
              {siteConfig.name}
            </p>
            <p className="text-sm text-stone-700">
              {siteConfig.address.street}
            </p>
            <p className="text-sm text-stone-700">
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
            </p>

            <a
              href={siteConfig.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-diner-red hover:underline mt-2 font-display uppercase tracking-wider"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Turn-by-Turn Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Facebook Social Link Slot */}
        <div className="flex items-start gap-4 pt-2">
          <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0">
            <Facebook className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-stone-400 tracking-wider block">
              Official Social Presence
            </span>
            <p className="text-xs text-stone-600 mb-2">
              Follow our community page for daily menu snapshots, blackboard specials, and updates.
            </p>
            <a
              href={siteConfig.social.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 px-3.5 py-2 rounded-xl text-xs font-bold border border-blue-200 transition-colors"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>Sunny's Diner on Facebook</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Phone / Inquiries with Transparent Verification Status */}
        <div className="flex items-start gap-4 pt-2">
          <div className="w-11 h-11 rounded-2xl bg-stone-100 text-diner-navy flex items-center justify-center shrink-0">
            <PhoneCall className="w-5 h-5 text-diner-navy" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-stone-400 tracking-wider block">
              Phone & Counter Contact
            </span>
            {siteConfig.contact.isPhoneVerified ? (
              <a 
                href={`tel:${siteConfig.contact.phone}`} 
                className="font-display text-lg font-bold text-diner-navy hover:text-diner-red"
              >
                {siteConfig.contact.phone}
              </a>
            ) : (
              <div className="space-y-1">
                <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full inline-block">
                  Phone verification in progress
                </span>
                <p className="text-[11px] text-stone-500">
                  Please visit our Glenwood Ave counter or message our Facebook page for immediate inquiries.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Carryout CTA Button */}
      <div className="pt-4 border-t border-stone-100">
        <button
          onClick={onOpenOrderModal}
          className="w-full inline-flex items-center justify-center gap-2 bg-diner-red hover:bg-diner-red-hover text-white font-display text-base uppercase tracking-wider py-4 px-5 rounded-2xl font-bold shadow-glow-red transition-all active:scale-[0.98]"
        >
          <ShoppingBag className="w-4 h-4 text-diner-yellow" />
          <span>Launch Carryout Ordering</span>
        </button>
      </div>

    </div>
  );
};
