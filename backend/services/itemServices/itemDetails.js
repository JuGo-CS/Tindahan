export const GetItemDetails = (item) => {
    const CLOUDINARY_BASE_URL =
        'https://res.cloudinary.com/djssijeqe/image/upload/q_auto,f_auto/';

    // Safe Cloudinary image builder fallback if item_picture string is completely empty
    const fullImageUrl = item.item_picture
        ? `${CLOUDINARY_BASE_URL}${item.item_picture}`
        : `${CLOUDINARY_BASE_URL}v1781356002/image_holder.webp`;

    const allUnits = item.item_units || [];

    const primaryUnit =
        allUnits.find((u) => u.unit_type === 'pc') || allUnits[0];
    const defaultPrice = primaryUnit ? primaryUnit.type_price : 0;

    return {
        imageUrl: fullImageUrl,
        itemPrice: defaultPrice,
        units: allUnits,
        name: item.name || 'No Name',
        variant: item.variant || '',
        weight: item.weight || '',
    };
};
