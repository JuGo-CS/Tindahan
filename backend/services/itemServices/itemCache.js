import AsyncStorage from '@react-native-async-storage/async-storage';
import { itemService } from './fetchingItems';

const CACHE_KEY = '@tindahan_items_cache';
const CACHE_TIMESTAMP_KEY = '@tindahan_items_cache_timestamp';

// In-memory cache — survives page navigation, cleared on app restart
let memoryCache = null;

export const itemCache = {
    /**
     * Returns items from memory first (instant), then falls back to
     * device storage. Returns `null` if nothing is cached anywhere.
     */
    async getItems() {
        if (memoryCache) return memoryCache;

        try {
            const stored = await AsyncStorage.getItem(CACHE_KEY);
            if (stored) {
                memoryCache = JSON.parse(stored);
                return memoryCache;
            }
        } catch (error) {
            console.warn('Failed to read from device storage:', error.message);
        }

        return null;
    },

    /**
     * Fetches fresh data from Supabase and writes it to both
     * memory cache and device storage for offline use.
     * Returns the fresh data, or the stale cache if the network fails.
     */
    async refreshFromNetwork() {
        try {
            const freshData = await itemService.getAllActiveItems();
            if (freshData) {
                memoryCache = freshData;
                await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(freshData));
                await AsyncStorage.setItem(
                    CACHE_TIMESTAMP_KEY,
                    Date.now().toString(),
                );
            }
            return freshData;
        } catch (error) {
            console.warn(
                'Network fetch failed, falling back to cache:',
                error.message,
            );
            return memoryCache;
        }
    },

    /** Removes both memory and device caches. */
    async clearCache() {
        memoryCache = null;
        await AsyncStorage.multiRemove([CACHE_KEY, CACHE_TIMESTAMP_KEY]);
    },

    /** Returns the timestamp of the last successful network refresh. */
    async getLastRefreshTime() {
        try {
            const ts = await AsyncStorage.getItem(CACHE_TIMESTAMP_KEY);
            return ts ? parseInt(ts, 10) : null;
        } catch {
            return null;
        }
    },
};
