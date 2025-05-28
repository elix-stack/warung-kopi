// AlpinJS
document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({
    items: [
      { id: 1, name: 'Robusta', img: '1.jpg', price: 25000 },
      { id: 2, name: 'Late', img: '2.jpg', price: 20000 },
      { id: 3, name: 'Capucino', img: '3.jpg', price: 23000 },
      { id: 4, name: 'Mocacino', img: '4.jpg', price: 24000 },
      { id: 5, name: 'Americano', img: '5.jpg', price: 30000 },
    ],
  }));
});

// Intl NumberFormat
const rupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(number);
};
