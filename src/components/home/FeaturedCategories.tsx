import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Utensils } from 'lucide-react';
import { menuCategories } from '../../data/menuData';

export const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-24 bg-diner-cream-dark/60 text-diner-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-diner-navy text-diner-yellow text-xs font-display uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Classic Diner Kitchen Categories</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-diner-navy">
            FEATURED MENU CATEGORIES
          </h2>

          <p className="text-base text-stone-600">
            From sunrise griddle favorites to hearty Southern afternoon plates, explore our core menu categories crafted for comfort and flavor.
          </p>
        </div>

        {/* 4 Modern Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuCategories.map((category, index) => (
            <Link
              key={category.id}
              to={`/menu?category=${category.id}`}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-modern hover:shadow-modern-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
                  <img
                    src={category.heroImage}
                    alt={category.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-3 left-3 modern-badge text-[11px] bg-diner-red text-white px-3 py-1 rounded-full uppercase tracking-wider font-bold shadow-md">
                    {category.badge}
                  </span>

                  {/* Index Pill */}
                  <span className="absolute top-3 right-3 font-mono text-xs text-white/90 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                    0{index + 1}
                  </span>
                </div>

                {/* Card Info */}
                <div className="p-6 space-y-2">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-diner-navy group-hover:text-diner-red transition-colors leading-tight">
                    {category.name}
                  </h3>
                  
                  <p className="text-xs font-semibold uppercase tracking-wider text-diner-red">
                    {category.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-display uppercase tracking-wider text-diner-navy font-bold group-hover:text-diner-red">
                  <span>Explore {category.name}</span>
                  <div className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-diner-red group-hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View Full Menu Action */}
        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-diner-navy hover:bg-diner-navy-light text-white font-display text-base uppercase tracking-wider px-8 py-4 rounded-2xl font-bold shadow-modern transition-all active:scale-[0.98]"
          >
            <Utensils className="w-4 h-4 text-diner-yellow" />
            <span>Search Full Digital Menu</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
