import React from 'react';
import { Star, MessageSquare, ExternalLink, ShieldCheck, ThumbsUp } from 'lucide-react';
import { reviewsOverview } from '../../data/reviewsData';
import { siteConfig } from '../../data/siteConfig';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-diner-cream text-diner-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-diner-navy text-diner-yellow text-xs font-display uppercase tracking-widest shadow-sm">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Community Feedback & Guest Experiences</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-diner-navy">
            WHAT RALEIGH IS SAYING
          </h2>

          <p className="text-base text-stone-600">
            Known across Glenwood Avenue for comforting morning breakfast plates, friendly southern hospitality, and classic diner flavors.
          </p>
        </div>

        {/* Modern Highlight Scorecard */}
        <div className="max-w-xl mx-auto bg-diner-navy text-white rounded-3xl p-8 border border-white/10 shadow-modern-xl text-center mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-diner-yellow/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-center justify-center gap-1.5 text-diner-yellow mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-diner-yellow text-diner-yellow" />
            ))}
          </div>

          <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white tracking-wide">
            {reviewsOverview.highlightText}
          </h3>

          <p className="text-xs sm:text-sm text-stone-300 mt-2 max-w-md mx-auto">
            {reviewsOverview.sourceDescription}
          </p>

          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-diner-yellow">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Ready for Google Business Profile & Facebook Reviews sync</span>
          </div>
        </div>

        {/* 3 Modern Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsOverview.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-modern hover:shadow-modern-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  {rev.tag && (
                    <span className="modern-badge text-[11px] bg-diner-red/10 text-diner-red px-2.5 py-0.5 rounded-full font-bold uppercase">
                      {rev.tag}
                    </span>
                  )}
                </div>

                <p className="text-sm text-stone-700 italic leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-diner-navy block">{rev.authorName}</span>
                  <span className="text-[11px] text-stone-400">{rev.date}</span>
                </div>
                <span className="text-[11px] font-semibold text-stone-600 bg-stone-100 px-2.5 py-1 rounded-full">
                  via {rev.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook Link Callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-stone-600 bg-white px-5 py-2.5 rounded-full border border-stone-200 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-diner-red" />
            <span>Have you dined with us recently? Share your experience on our </span>
            <a
              href={siteConfig.social.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-diner-red font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Facebook page</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
