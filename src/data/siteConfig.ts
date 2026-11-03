import { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: "Sunny's Diner",
  tagline: "GOOD FOOD. GOOD MOOD.",
  address: {
    street: "8710 Glenwood Ave",
    city: "Raleigh",
    state: "NC",
    zip: "27617",
    formatted: "8710 Glenwood Ave, Raleigh, NC 27617, United States",
    landmark: "Conveniently located on Glenwood Avenue near Brier Creek and RDU Airport",
  },
  geo: {
    lat: 35.8822,
    lng: -78.7365,
  },
  // Exact Google Maps directions link based on verified address
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=8710+Glenwood+Ave,+Raleigh,+NC+27617",
  // Google Maps embed URL for Glenwood Ave Raleigh location
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=8710+Glenwood+Ave,+Raleigh,+NC+27617&t=&z=15&ie=UTF8&iwloc=&output=embed",
  
  // Modular Online Carryout Ordering Configuration
  // Compatible with Square, Toast, ChowNow or custom merchant direct portal
  ordering: {
    provider: 'Square', // Default target: 'Square' | 'Toast' | 'ChowNow' | 'Direct'
    isLive: false, // Set to true once the restaurant's merchant ordering portal is connected
    orderUrl: "https://order.sunnysdinerraleigh.com", // Configurable destination URL
    pickupInstructions: "Carryout orders can be picked up at the front counter at 8710 Glenwood Ave. Please mention your name and order number to the cashier.",
    curbsideAvailable: true,
  },

  // Facebook Integration Configuration
  social: {
    // Official Facebook page slot (the restaurant's primary online community presence)
    facebookUrl: "https://www.facebook.com/search/top?q=Sunny%27s%20Diner%20Raleigh", 
    hasLiveFeed: false,
  },

  // Contact Configuration (strictly unverified until officially provided)
  contact: {
    phone: "(919) 555-0192", // Clearly marked development placeholder
    isPhoneVerified: false,
    inquiryEmail: "contact@sunnysdinerraleigh.com",
  },
};
