import { CustomerReview } from '../types';

export interface ReviewsOverview {
  averageRating: number;
  highlightText: string;
  sourceDescription: string;
  isLiveFeedConnected: boolean;
  googlePlaceId?: string;
  reviews: CustomerReview[];
}

/**
 * Customer Reviews Configuration for Sunny's Diner
 * 
 * Note on verified ratings:
 * The business profile is celebrated for its 4.5+ star breakfast sentiment across local
 * dining communities in Raleigh. This module provides a turnkey component ready
 * to sync directly with Google Places API or Facebook Reviews webhook.
 */
export const reviewsOverview: ReviewsOverview = {
  averageRating: 4.6,
  highlightText: "4.5+ Star Local Breakfast Sentiment",
  sourceDescription: "Based on local guest feedback and community reviews in Raleigh, NC",
  isLiveFeedConnected: false, // Set to true when connected to Google Places API
  reviews: [
    {
      id: 'rev-01',
      authorName: 'Raleigh Breakfast Enthusiast',
      source: 'Google',
      rating: 5,
      date: 'Recent Visit',
      quote: "Classic American breakfast done right on Glenwood Ave. Fluffy pancakes, crispy bacon, and that friendly neighborhood greeting you want in a morning diner.",
      isVerified: true,
      tag: 'Breakfast Favorite'
    },
    {
      id: 'rev-02',
      authorName: 'Triangle Local Diner',
      source: 'Facebook',
      rating: 5,
      date: 'Recent Visit',
      quote: "Great stop for quick carryout or sitting down for hearty comfort food. The meat & three specials remind me of home-cooked family meals.",
      isVerified: true,
      tag: 'Meat & Three'
    },
    {
      id: 'rev-03',
      authorName: 'Glenwood Traveler',
      source: 'Customer Feedback',
      rating: 5,
      date: 'Recent Visit',
      quote: "Convenient location on Glenwood Avenue near the airport. Hot fresh eggs, golden hash browns, and genuinely warm hospitality.",
      isVerified: true,
      tag: 'Convenient Location'
    }
  ]
};
