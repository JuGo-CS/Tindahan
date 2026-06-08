import { supabase } from '../../config/supabase';

export const itemService = {
    /**
     * Fetches all inventory items along with their respective pricing models.
     * Future-proofed: Later, we can change this logic to target local SQLite
     * without needing to touch or break your UI screens!
     */
    getAllActiveItems: async () => {
        try {
            const { data, error } = await supabase
                .from('item')
                .select(`
                    item_id,
                    name,
                    variant,
                    weight,
                    item_picture,
                    item_units (
                        unit_type,
                        type_price
                    )
                `)
                .order('name', { ascending: true });

            if (error) throw error;
            return data;
        } catch (error) {
            console.error("Backend Layer Error:", error.message);
            return null;
        }
    }
};