import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { OrderingModal } from './components/OrderingModal';
import { CarryoutDrawer } from './components/CarryoutDrawer';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { CarryoutContactPage } from './pages/CarryoutContactPage';
import { CartProvider } from './context/CartContext';

// Scroll to top helper on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname]);

  return null;
};

export const AppContent: React.FC = () => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const handleOpenOrderModal = () => {
    setOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setOrderModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-diner-cream text-diner-charcoal selection:bg-diner-red selection:text-white">
      <ScrollToTop />
      
      {/* Shared Global Header */}
      <Header onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage onOpenOrderModal={handleOpenOrderModal} />} 
          />
          <Route 
            path="/menu" 
            element={
              <MenuPage 
                onOpenOrderModal={handleOpenOrderModal}
              />
            } 
          />
          <Route 
            path="/carryout-contact" 
            element={<CarryoutContactPage onOpenOrderModal={handleOpenOrderModal} />} 
          />
          {/* Fallback route */}
          <Route 
            path="*" 
            element={<HomePage onOpenOrderModal={handleOpenOrderModal} />} 
          />
        </Routes>
      </main>

      {/* Shared Global Footer */}
      <Footer onOpenOrderModal={handleOpenOrderModal} />

      {/* Global Carryout Ordering Modal */}
      <OrderingModal
        isOpen={orderModalOpen}
        onClose={handleCloseOrderModal}
      />

      {/* Modern Slide-out Carryout Drawer */}
      <CarryoutDrawer />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}
