import React from 'react';
import { Clock, AlertTriangle, Calendar, Bell, Facebook, ExternalLink } from 'lucide-react';
import { hoursConfig } from '../../data/hoursData';
import { siteConfig } from '../../data/siteConfig';

export const HoursDisplay: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl border border-stone-200/80 shadow-modern p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-stone-100 pb-5">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-diner-navy text-diner-yellow flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-diner-navy">
              Hours & Schedule
            </h3>
            <p className="text-xs text-stone-500">8710 Glenwood Ave • Raleigh, NC</p>
          </div>
        </div>

        {/* Verification Pill */}
        <span className={`modern-badge text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider font-bold ${
          hoursConfig.isVerified 
            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
            : 'bg-amber-50 text-amber-800 border border-amber-200'
        }`}>
          {hoursConfig.isVerified ? 'Official Schedule' : 'Pending Verification'}
        </span>
      </div>

      {/* Prominent Verification Notice Required by Brief */}
      {!hoursConfig.isVerified && (
        <div className="bg-amber-50/80 border border-amber-200 p-4 rounded-2xl text-amber-950 space-y-2">
          <div className="flex items-center gap-2 font-bold text-xs font-display uppercase tracking-wide text-amber-900">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Notice: Daily Hours Being Finalized for Publication</span>
          </div>
          <p className="text-xs text-amber-800 leading-relaxed">
            {hoursConfig.verificationNotice}
          </p>
          <div className="pt-1">
            <a
              href={siteConfig.social.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 underline"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>Verify today's hours on Sunny's Facebook Page</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* Weekly Hours Table */}
      <div className="space-y-2">
        <h4 className="font-display text-xs uppercase tracking-wider text-stone-400 font-bold mb-3">
          {hoursConfig.isVerified ? 'Standard Weekly Hours' : 'Tentative Schedule (Subject to Confirmation)'}
        </h4>

        <div className="divide-y divide-stone-100 rounded-2xl border border-stone-100 overflow-hidden bg-stone-50/50">
          {hoursConfig.schedule.map((slot) => (
            <div 
              key={slot.day} 
              className="flex items-center justify-between px-4 py-3 text-sm hover:bg-white transition-colors"
            >
              <span className="font-bold text-diner-navy min-w-[90px]">{slot.day}</span>
              
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs sm:text-sm font-medium text-stone-700">
                  {slot.isClosed ? 'Closed' : `${slot.open} – ${slot.close}`}
                </span>
                {slot.specialNote && (
                  <span className="text-[11px] text-stone-500 hidden sm:inline bg-white px-2 py-0.5 rounded-full border border-stone-200">
                    {slot.specialNote}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Holiday and Special Closures */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-diner-navy uppercase font-display">
            <Calendar className="w-3.5 h-3.5 text-diner-red" />
            <span>Holiday Schedules</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            {hoursConfig.holidayNotice}
          </p>
        </div>

        <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-diner-navy uppercase font-display">
            <Bell className="w-3.5 h-3.5 text-diner-yellow-dark" />
            <span>Schedule Announcements</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            {hoursConfig.temporaryAnnouncement}
          </p>
        </div>
      </div>

    </div>
  );
};
