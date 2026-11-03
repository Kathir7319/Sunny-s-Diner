import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Utensils, 
  Search,
  ShoppingBag, 
  Filter, 
  RotateCcw
} from 'lucide-react';
import { menuItems, menuCategories } from '../data/menuData';
import { MenuItem, MenuCategory, DietaryTag } from '../types';
import { MenuSearch } from '../components/menu/MenuSearch';
import { MenuCategoryNav } from '../components/menu/MenuCategoryNav';
import { MenuItemCard } from '../components/menu/MenuItemCard';
import { DishDetailModal } from '../components/menu/DishDetailModal';
import { FacebookMenuNotice } from '../components/menu/FacebookMenuNotice';
import { useCart } from '../context/CartContext';

interface MenuPageProps {
  onOpenOrderModal: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onOpenOrderModal }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as MenuCategory) || 'all';

  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDietary, setSelectedDietary] = useState<DietaryTag | 'all'>('all');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const { totalItems, subtotal, openDrawer } = useCart();

  useEffect(() => {
    document.title = "Searchable Digital Menu — Sunny's Diner | Raleigh, NC";
  }, []);

  useEffect(() => {
    const categoryParam = searchParams.get('category') as MenuCategory | null;
    if (categoryParam && ['breakfast', 'griddle', 'meat-and-three', 'specials'].includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  const handleSelectCategory = (category: MenuCategory | 'all') => {
    setActiveCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: menuItems.length };
    menuCategories.forEach(cat => {
      counts[cat.id] = menuItems.filter(item => item.category === cat.id).length;
    });
    return counts;
  }, []);

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      if (selectedDietary !== 'all') {
        if (!item.dietaryTags || !item.dietaryTags.includes(selectedDietary)) {
          return false;
        }
      }

      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description?.toLowerCase().includes(query) || false;
        const matchesCat = item.category.toLowerCase().includes(query);
        return matchesName || matchesDesc || matchesCat;
      }

      return true;
    });
  }, [activeCategory, searchTerm, selectedDietary]);

  const currentCategoryInfo = useMemo(() => {
    if (activeCategory === 'all') return null;
    return menuCategories.find(c => c.id === activeCategory);
  }, [activeCategory]);

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedDietary('all');
    setActiveCategory('all');
    searchParams.delete('category');
    setSearchParams(searchParams, { replace: true });
  };

  const dietaryFilterOptions: DietaryTag[] = [
    'Vegetarian',
    'Gluten-Free',
    'Dairy-Free',
    'Contains Nuts',
    'Spicy',
  ];

  return (
    <div className="min-h-screen bg-diner-cream pb-28">
      
      {/* Modern Header Banner */}
      <section className="bg-diner-navy text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-diner-navy-dark via-diner-navy to-diner-navy-light/90"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-diner-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-diner-red text-white text-xs font-display uppercase tracking-widest shadow-glow-red">
            <Utensils className="w-3.5 h-3.5 text-diner-yellow" />
            <span>Searchable Digital Diner Menu</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-white">
            OUR CLASSIC DINER MENU
          </h1>

          <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto">
            Explore authentic American breakfast platters, fluffy griddle favorites, slow-braised meat & three dishes, and daily kitchen specials.
          </p>

          <div className="pt-4">
            <MenuSearch
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              resultCount={filteredItems.length}
              totalCount={menuItems.length}
            />
          </div>
        </div>
      </section>

      {/* Sticky Category Navigation Tabs */}
      <MenuCategoryNav
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        categoryCounts={categoryCounts}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        
        {/* Facebook Notice */}
        <FacebookMenuNotice />

        {/* Modern Dietary Filters Bar */}
        <div className="bg-white p-4 rounded-3xl border border-stone-200/80 shadow-modern-sm flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-display uppercase tracking-wider text-diner-navy font-bold">
            <Filter className="w-3.5 h-3.5 text-diner-red" />
            <span>Verified Dietary Filters:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedDietary('all')}
              className={`text-xs px-4 py-1.5 rounded-full font-medium transition-all ${
                selectedDietary === 'all'
                  ? 'bg-diner-navy text-diner-yellow font-bold shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              All Types
            </button>
            {dietaryFilterOptions.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedDietary(tag)}
                className={`text-xs px-4 py-1.5 rounded-full font-medium transition-all ${
                  selectedDietary === tag
                    ? 'bg-diner-red text-white font-bold shadow-glow-red'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {(searchTerm || activeCategory !== 'all' || selectedDietary !== 'all') && (
            <button
              onClick={clearAllFilters}
              className="text-xs text-diner-red hover:underline font-bold flex items-center gap-1 ml-auto"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>

        {/* Current Active Category Intro */}
        {currentCategoryInfo && (
          <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-modern flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="modern-badge text-xs text-diner-red font-bold uppercase tracking-wider">
                Category {currentCategoryInfo.badge}
              </span>
              <h2 className="font-display text-3xl font-bold uppercase text-diner-navy">
                {currentCategoryInfo.name}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
                {currentCategoryInfo.description}
              </p>
            </div>

            <button
              onClick={() => handleSelectCategory('all')}
              className="text-xs font-display uppercase tracking-wider text-diner-navy hover:text-diner-red font-bold underline shrink-0"
            >
              ← View All Categories
            </button>
          </div>
        )}

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onOpenDetail={(dish) => setSelectedDish(dish)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center max-w-xl mx-auto space-y-4 shadow-modern">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-stone-100 flex items-center justify-center text-diner-red">
              <Search className="w-7 h-7" />
            </div>

            <h3 className="font-display text-2xl font-bold uppercase text-diner-navy">
              No Dishes Found Matching Your Search
            </h3>

            <p className="text-sm text-stone-600">
              We couldn't find any dishes matching "{searchTerm || selectedDietary}". Try searching for another favorite like "pancakes", "eggs", or "pot roast".
            </p>

            <div className="pt-2">
              <button
                onClick={clearAllFilters}
                className="inline-flex items-center gap-2 bg-diner-navy hover:bg-diner-navy-light text-white font-display text-sm uppercase tracking-wider px-6 py-3 rounded-2xl font-bold transition-all"
              >
                <RotateCcw className="w-4 h-4 text-diner-yellow" />
                <span>Show All Dishes</span>
              </button>
            </div>
          </div>
        )}

        {/* Bottom Carryout Banner */}
        <div className="bg-diner-navy text-white rounded-3xl p-8 border border-white/10 shadow-modern-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
              Ready to Order Carryout?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              All dishes are prepared fresh to order. Pick up at our 8710 Glenwood Ave counter or curbside.
            </p>
          </div>

          <button
            onClick={onOpenOrderModal}
            className="inline-flex items-center gap-2.5 bg-diner-red hover:bg-diner-red-hover text-white font-display text-base uppercase tracking-wider px-8 py-4 rounded-2xl font-bold shadow-glow-red transition-all active:scale-[0.98] shrink-0"
          >
            <ShoppingBag className="w-5 h-5 text-diner-yellow" />
            <span>Order Carryout Now</span>
          </button>
        </div>

      </div>

      {/* Floating Modern Carryout Pill Button (When items exist in bag) */}
      {totalItems > 0 && (
        <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
          <button
            onClick={openDrawer}
            className="inline-flex items-center gap-3 bg-diner-navy text-white px-5 py-3.5 rounded-full shadow-modern-xl border border-white/20 hover:scale-105 transition-all"
          >
            <div className="w-7 h-7 rounded-full bg-diner-red text-white font-mono text-xs font-bold flex items-center justify-center">
              {totalItems}
            </div>
            <div className="text-left">
              <span className="font-display uppercase text-xs font-bold tracking-wider block text-diner-yellow">
                Carryout Bag
              </span>
              <span className="font-mono text-xs font-semibold text-white">
                ${subtotal.toFixed(2)}
              </span>
            </div>
          </button>
        </div>
      )}

      {/* Modern Dish Detail Modal */}
      <DishDetailModal
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
      />

    </div>
  );
};
