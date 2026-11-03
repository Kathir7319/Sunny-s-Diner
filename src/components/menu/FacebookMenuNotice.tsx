import React from 'react';
import { Facebook, ExternalLink, AlertCircle, Camera } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const FacebookMenuNotice: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-modern space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
            <Facebook className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-diner-navy">
              Blackboard & Facebook Menu Snapshots
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xl mt-1">
              Sunny's Diner regularly shares daily handwritten blackboard specials, bakery features, and fresh sides directly on Facebook. Check our latest community photos for today's kitchen specials!
            </p>
          </div>
        </div>

        <a
          href={siteConfig.social.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-blue-700 text-white font-display text-sm uppercase tracking-wider px-6 py-3.5 rounded-2xl font-bold shadow-md transition-colors shrink-0 active:scale-98"
        >
          <Camera className="w-4 h-4" />
          <span>View Facebook Menu Photos</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Mandatory Dietary & Allergy Disclaimer */}
      <div className="pt-4 border-t border-stone-100 flex items-start gap-3 text-xs text-stone-600 bg-diner-cream p-4 rounded-2xl">
        <AlertCircle className="w-4 h-4 text-diner-red shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-diner-navy font-bold">Dietary & Allergy Notice:</strong> Please contact the restaurant regarding ingredients, food allergies, and dietary requirements. Because our kitchen prepares a wide variety of scratch-made Southern favorites on shared equipment, always alert our staff to any allergies before ordering.
        </p>
      </div>
    </div>
  );
};
