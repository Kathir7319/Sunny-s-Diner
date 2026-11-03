import { HoursConfig } from '../types';

/**
 * Operating Hours Configuration for Sunny's Diner
 * 
 * NOTE FOR RESTAURANT OWNER / MANAGER:
 * Once the official weekly opening and closing times are verified, set `isVerified: true`
 * and update the schedule array below with your exact hours.
 */
export const hoursConfig: HoursConfig = {
  // Flag indicating whether hours are confirmed by the restaurant owner
  isVerified: false,
  
  // Public customer notice displayed when hours are pending verification
  verificationNotice: "Operating hours are currently being finalized for online publication. Please check our Facebook page or visit us at 8710 Glenwood Ave for today's daily schedule.",
  
  // Weekly Schedule (Ready for verified times)
  schedule: [
    { day: "Monday", open: "6:30 AM", close: "2:30 PM", specialNote: "Breakfast & Lunch" },
    { day: "Tuesday", open: "6:30 AM", close: "2:30 PM", specialNote: "Breakfast & Lunch" },
    { day: "Wednesday", open: "6:30 AM", close: "2:30 PM", specialNote: "Breakfast & Lunch" },
    { day: "Thursday", open: "6:30 AM", close: "2:30 PM", specialNote: "Breakfast & Lunch" },
    { day: "Friday", open: "6:30 AM", close: "2:30 PM", specialNote: "Breakfast & Lunch" },
    { day: "Saturday", open: "7:00 AM", close: "3:00 PM", specialNote: "Weekend Breakfast & Brunch" },
    { day: "Sunday", open: "7:00 AM", close: "3:00 PM", specialNote: "Weekend Breakfast & Brunch" },
  ],
  
  // Holiday and special schedule support
  holidayNotice: "Holiday schedules and weather-related adjustments are announced in real-time on our Facebook community page.",
  
  // Temporary schedule announcements (e.g., kitchen maintenance, private catering)
  temporaryAnnouncement: "Glenwood Ave Carryout counter is open during normal diner hours. Curbside pickup available upon arrival.",
};
