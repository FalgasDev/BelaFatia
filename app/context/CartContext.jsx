"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    if (typeof window === "undefined") return []; 
    try {
      const raw = localStorage.getItem("confeitaria_cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("confeitaria_cart", JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  }, [items]);

  const addToCart = (product) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (p) => p.id === product?.id || p.name === product.name
      );
      if (existingIndex >= 0) {
        const copy = [...prev];
        copy[existingIndex].quantity += product.quantity ?? 1;
        return copy;
      }
      return [...prev, { ...product, quantity: product.quantity ?? 1 }];
    });
  };

  const removeFromCart = (identifier) => {
    setItems((prev) =>
      prev.filter((p) => p.id !== identifier && p.name !== identifier)
    );
  };

  const updateQuantity = (identifier, quantity) => {
    setItems((prev) =>
      prev.map((p) =>
        p.id === identifier || p.name === identifier ? { ...p, quantity } : p
      )
    );
  };

  const clearCart = () => setItems([]);

  const subtotal = items.reduce(
    (s, it) =>
      s +
      (Number(String(it.price).replace(/\D/g, "")) || it.priceNumeric || 0) *
        it.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
