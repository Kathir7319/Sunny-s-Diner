import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { WelcomeSection } from '../components/home/WelcomeSection';
import { FeaturedCategories } from '../components/home/FeaturedCategories';
import { WhySunnySection } from '../components/home/WhySunnySection';
import { LocationSection } from '../components/home/LocationSection';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { FinalCTA } from '../components/home/FinalCTA';

interface HomePageProps {
  onOpenOrderModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenOrderModal }) => {
  useEffect(() => {
    document.title = "Sunny's Diner — Classic American Breakfast & Diner in Raleigh, NC";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection onOpenOrderModal={onOpenOrderModal} />

      {/* Welcome Section */}
      <WelcomeSection />

      {/* Featured Categories (Breakfast, Griddle, Meat & Three, Daily Specials) */}
      <FeaturedCategories />

      {/* Why Visit Sunny's? (01 Classic Diner, 02 Convenient Location, 03 Easy Carryout) */}
      <WhySunnySection />

      {/* Location Highlight & Interactive Glenwood Ave Map */}
      <LocationSection />

      {/* Community Feedback & Reviews Showcase */}
      <ReviewsSection />

      {/* Final Call to Action */}
      <FinalCTA onOpenOrderModal={onOpenOrderModal} />
    </div>
  );
};
