export type MenuCategory = 'breakfast' | 'griddle' | 'meat-and-three' | 'specials';

export type DietaryTag = 
  | 'Vegetarian' 
  | 'Gluten-Free' 
  | 'Dairy-Free' 
  | 'Contains Nuts' 
  | 'Spicy';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price?: string; // Optional until verified
  description?: string;
  dietaryTags?: DietaryTag[];
  imageUrl: string;
  imageAlt: string;
  isPopular?: boolean;
  isDailySpecial?: boolean;
  isVerified?: boolean; // Set to true once verified with kitchen
  servingNote?: string;
}

export interface DayHours {
  day: string;
  open?: string;
  close?: string;
  isClosed?: boolean;
  specialNote?: string;
}

export interface HoursConfig {
  isVerified: boolean;
  verificationNotice: string;
  schedule: DayHours[];
  holidayNotice?: string;
  temporaryAnnouncement?: string;
}

export interface CustomerReview {
  id: string;
  authorName: string;
  source: 'Facebook' | 'Google' | 'Customer Feedback';
  rating: number;
  date: string;
  quote: string;
  isVerified: boolean;
  tag?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    formatted: string;
    landmark: string;
  };
  geo: {
    lat: number;
    lng: number;
  };
  googleMapsDirectionsUrl: string;
  googleMapsEmbedUrl: string;
  ordering: {
    provider: 'Square' | 'Toast' | 'ChowNow' | 'Direct';
    isLive: boolean; // Keep false until official merchant URL is configured
    orderUrl: string; // Destination URL when live
    pickupInstructions: string;
    curbsideAvailable: boolean;
  };
  social: {
    facebookUrl: string;
    hasLiveFeed: boolean;
  };
  contact: {
    phone: string;
    isPhoneVerified: boolean;
    inquiryEmail?: string;
  };
}
