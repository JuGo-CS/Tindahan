export const GetItemDetails = (item) => {
    const CLOUDINARY_BASE_URL =
        'https://res.cloudinary.com/djssijeqe/image/upload/q_auto,f_auto/';

    // Safe Cloudinary image builder fallback if item_picture string is completely empty
    const fullImageUrl = item.item_picture
        ? `${CLOUDINARY_BASE_URL}${item.item_picture}`
        : `${CLOUDINARY_BASE_URL}v1781356002/image_holder.webp`;

    // Grab individual retail price safely
    const pcUnit = item.item_units?.find((u) => u.unit_type === 'pc');
    const pcPrice = pcUnit ? pcUnit.type_price : 0;
    const hasContent = item.name || item.variant || item.weight;

    return {
        imageUrl: fullImageUrl,
        itemPrice: pcPrice,
        hasContent: hasContent,
        name: item.name || 'No Name',
        variant: item.variant || '',
        weight: item.weight || '',
    };
};
