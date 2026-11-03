import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu as MenuIcon, 
  X, 
  ShoppingBag, 
  Sun,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onOpenOrderModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { totalItems, openDrawer } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Menu', path: '/menu' },
    { name: 'Carryout / Contact', path: '/carryout-contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' || location.pathname === '';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Modern Top Notification Strip */}
      <div className="bg-diner-navy-dark text-white/90 text-xs py-2 px-4 border-b border-white/5 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          <div className="flex items-center gap-2 sm:gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 text-diner-yellow font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="hidden xs:inline">Glenwood Ave, Raleigh</span>
              <span className="xs:hidden">Raleigh</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="text-white/70 hidden sm:inline">
              8710 Glenwood Ave, Raleigh, NC 27617
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-[11px] text-white/80 bg-white/10 px-2.5 py-0.5 rounded-full backdrop-blur-md">
              <Clock className="w-3 h-3 text-diner-yellow" />
              <span>Carryout Ready</span>
            </span>
            <a
              href={siteConfig.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-diner-yellow hover:text-white transition-colors font-medium text-xs hidden md:inline-flex items-center gap-1"
            >
              <span>Get Directions</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>

      {/* Main Modern Sticky Navigation Bar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'glass-panel-dark text-white shadow-modern-lg py-3' 
            : 'bg-diner-navy text-white shadow-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Modern Restaurant Logo Wordmark */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-tr from-diner-red to-diner-red-light rounded-2xl flex items-center justify-center border border-white/20 shadow-glow-red group-hover:scale-105 transition-all">
                <Sun className="w-6 h-6 text-diner-yellow fill-diner-yellow" />
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase group-hover:text-diner-yellow transition-colors leading-none">
                    Sunny's
                  </span>
                  <span className="font-display text-xl sm:text-2xl font-light tracking-wider text-diner-yellow uppercase leading-none">
                    Diner
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-sans text-diner-cream/70 tracking-widest uppercase flex items-center gap-1 font-medium mt-0.5">
                  <span>{siteConfig.tagline}</span>
                  <span className="text-diner-red">•</span>
                  <span className="text-diner-yellow font-semibold">Raleigh, NC</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full font-display text-sm uppercase tracking-wider transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-diner-red text-white font-bold shadow-md'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions: Live Carryout Bag & Order Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Carryout Bag Trigger with Live Counter */}
              <button
                onClick={openDrawer}
                className="relative p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
                aria-label="View Carryout Bag"
              >
                <ShoppingBag className="w-5 h-5 text-diner-yellow" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-diner-red text-white text-[11px] font-mono font-bold flex items-center justify-center shadow-md animate-scale-in">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Primary Modern Order Button */}
              <button
                onClick={onOpenOrderModal}
                className="hidden sm:inline-flex items-center gap-2 bg-diner-red hover:bg-diner-red-hover text-white font-display text-sm uppercase tracking-wider px-5 py-2.5 rounded-full font-bold shadow-glow-red hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <span>Order Carryout</span>
                <ArrowRight className="w-4 h-4 text-diner-yellow" />
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-diner-navy-dark border-t border-white/10 px-4 pt-4 pb-6 shadow-2xl transition-all">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-2xl font-display text-lg tracking-wider uppercase flex items-center justify-between ${
                    isActive(link.path)
                      ? 'bg-diner-red text-white font-bold'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive(link.path) && <Sparkles className="w-4 h-4 text-diner-yellow" />}
                </Link>
              ))}

              <div className="pt-3 border-t border-white/10 mt-2 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOrderModal();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-diner-red hover:bg-diner-red-hover text-white font-display text-base uppercase tracking-wider py-3.5 rounded-2xl shadow-glow-red font-bold"
                >
                  <ShoppingBag className="w-5 h-5 text-diner-yellow" />
                  <span>Order Carryout</span>
                </button>
                
                <p className="text-center text-xs text-white/60 pt-1">
                  8710 Glenwood Ave, Raleigh NC 27617
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
