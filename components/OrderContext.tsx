"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface OrderContextType {
    items: CartItem[];
    isModalOpen: boolean;
    addItem: (item: Omit<CartItem, "quantity">) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    openModal: () => void;
    closeModal: () => void;
    totalItems: number;
    totalPrice: number;
}

const OrderContext = createContext<OrderContextType | null>(null);

export function useOrder() {
    const ctx = useContext(OrderContext);
    if (!ctx) throw new Error("useOrder must be used within OrderProvider");
    return ctx;
}

export function OrderProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addItem = useCallback((item: Omit<CartItem, "quantity">) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
        setIsModalOpen(true);
    }, []);

    const removeItem = useCallback((id: string) => {
        setItems((prev) => prev.filter((i) => i.id !== id));
    }, []);

    const updateQuantity = useCallback((id: string, quantity: number) => {
        if (quantity <= 0) {
            setItems((prev) => prev.filter((i) => i.id !== id));
        } else {
            setItems((prev) =>
                prev.map((i) => (i.id === id ? { ...i, quantity } : i))
            );
        }
    }, []);

    const clearCart = useCallback(() => setItems([]), []);
    const openModal = useCallback(() => setIsModalOpen(true), []);
    const closeModal = useCallback(() => setIsModalOpen(false), []);

    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
    const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

    return (
        <OrderContext.Provider
            value={{
                items,
                isModalOpen,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                openModal,
                closeModal,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </OrderContext.Provider>
    );
}
