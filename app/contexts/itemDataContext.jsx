import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { itemCache } from '../../backend/services/itemServices/itemCache';

const ItemDataContext = createContext();

/**
 * Provides a cached catalogue of items that survives page navigation
 * (no more refetching when switching tabs) and works offline.
 *
 * ┌─ App opens ──────────────────────────────┐
 * │  1. Load from device storage (instant)    │
 * │  2. Refresh from network (background)     │ ← updates cache
 * │  3. Page reads from context → no refetch  │
 * └───────────────────────────────────────────┘
 */
export const ItemDataProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const refreshItems = useCallback(async () => {
        const fresh = await itemCache.refreshFromNetwork();
        if (fresh) setItems(fresh);
        setLoading(false);
    }, []);

    useEffect(() => {
        const initialize = async () => {
            // 1. Load from cache instantly (memory → AsyncStorage → null)
            const cached = await itemCache.getItems();
            if (cached) {
                setItems(cached);
                setLoading(false); // show UI immediately
            }

            // 2. Silently refresh from network in the background
            await refreshItems();
        };

        initialize();
    }, [refreshItems]);

    return (
        <ItemDataContext.Provider value={{ items, loading, refreshItems }}>
            {children}
        </ItemDataContext.Provider>
    );
};

export const useItemData = () => {
    const ctx = useContext(ItemDataContext);
    if (!ctx) {
        throw new Error('useItemData must be used inside <ItemDataProvider>');
    }
    return ctx;
};
