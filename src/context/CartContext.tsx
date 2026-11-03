import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem } from '../types';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem, quantity?: number, specialInstructions?: string) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('sunnys_carryout_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('sunnys_carryout_cart', JSON.stringify(items));
    } catch {
      // Ignore write errors
    }
  }, [items]);

  const addToCart = (item: MenuItem, quantity = 1, specialInstructions = '') => {
    setItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id
            ? { ...i, quantity: i.quantity + quantity, specialInstructions: specialInstructions || i.specialInstructions }
            : i
        );
      }
      return [...prev, { item, quantity, specialInstructions }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setItems((prev) => prev.filter((i) => i.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.item.id === itemId ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  const subtotal = items.reduce((sum, i) => {
    // Parse price string e.g. "$11.95"
    const priceNum = parseFloat(i.item.price?.replace(/[^0-9.]/g, '') || '0') || 0;
    return sum + priceNum * i.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isDrawerOpen,
        openDrawer: () => setIsDrawerOpen(true),
        closeDrawer: () => setIsDrawerOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
