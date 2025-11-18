// Sample products (100 items)
const baseProducts = [
    { name: "Margherita Pizza", price: 1151.16, image: "/src/assets/dish7.jpg" },
    { name: "Pasta Alfredo", price: 973.92, image: "/src/assets/dish8.jpg" },
    { name: "Grilled Chicken", price: 1417.02, image: "/src/assets/dish9.jpg" },
    { name: "Caesar Salad", price: 796.68, image: "/src/assets/dish10.jpg" },
    { name: "Chocolate Cake", price: 619.45, image: "/src/assets/dish11.jpg" },
    { name: "Raman", price: 619.45, image: "/src/assets/dish12.jpg" },
];

export const products = Array.from({ length: 12 }, (_, i) => {
    const base = baseProducts[i % baseProducts.length]; // cycle through 5 base products
    return {
        id: i + 1,
        name: `${base.name}`,
        price: (base.price + (i % 5)).toFixed(2), // slightly vary the price
        image: base.image,
    };
});
