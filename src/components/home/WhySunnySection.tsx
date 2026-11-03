import React from 'react';
import { Utensils, MapPin, ShoppingBag, Check } from 'lucide-react';

export const WhySunnySection: React.FC = () => {
  const benefits = [
    {
      number: '01',
      title: 'Classic Diner Favorites',
      description: 'A welcoming place to explore familiar breakfast and comfort-food categories.',
      detail: 'From fresh eggs and crisp bacon to griddle buttermilk pancakes and savory meat & three plates, enjoy hearty American favorites made to order.',
      icon: Utensils,
      accentBg: 'bg-diner-red text-white shadow-glow-red',
    },
    {
      number: '02',
      title: 'Convenient Location',
      description: 'Located on Glenwood Avenue in Raleigh, North Carolina.',
      detail: 'Easy to reach for neighborhood locals, morning commuters, and travelers passing near RDU Airport and Brier Creek with ample on-site customer parking.',
      icon: MapPin,
      accentBg: 'bg-diner-navy text-diner-yellow shadow-modern',
    },
    {
      number: '03',
      title: 'Easy Carryout',
      description: 'Make it easy for customers to discover the menu and access available carryout ordering.',
      detail: 'Search our digital menu from your phone or laptop and enjoy fast, hot carryout counter pickup or curbside parking whenever you need good food on the go.',
      icon: ShoppingBag,
      accentBg: 'bg-diner-yellow text-diner-navy shadow-glow-yellow',
    },
  ];

  return (
    <section className="py-24 bg-diner-cream text-diner-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="modern-badge text-xs sm:text-sm tracking-widest text-diner-red font-bold uppercase inline-block">
            AUTHENTIC AMERICAN DINER HOSPITALITY
          </span>

          <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-diner-navy">
            WHY VISIT SUNNY'S?
          </h2>

          <p className="text-base text-stone-600">
            A real neighborhood gathering spot built on great food, friendly faces, and everyday convenience in Raleigh.
          </p>
        </div>

        {/* 3 Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.number}
                className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-modern hover:shadow-modern-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-bold text-stone-300">
                      {b.number}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${b.accentBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Descriptions */}
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-diner-navy mb-2">
                    {b.title}
                  </h3>

                  <p className="text-xs font-bold text-diner-red uppercase tracking-wider mb-3">
                    {b.description}
                  </p>

                  <p className="text-sm text-stone-600 leading-relaxed">
                    {b.detail}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-diner-navy">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sunny's Diner Raleigh Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
