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

  Alpine.store('cart', {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      //cek apakah ada barang yang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      //jika belum ada / cart kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        //jika barang sudah ada di cart, cek apakah barang sama atau beda dengan yang sudah ada di cart
        this.items = this.items.map((item) => {
          //jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            //jika barang sudah ada, tambah quantity dan totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      //ambil item yang akan diremove berdasarkan id
      const cartItem = this.items.find((item) => item.id === id);

      if (!cartItem) return;

      //jika item lebih dari 1
      if (cartItem.quantity > 1) {
        //telusuri satu per satu
        this.items = this.items.map((item) => {
          //jika bukan barang yang di klik atau barang yang sama
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        //jika barangnya sisa 1 dalam cart
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// Intl NumberFormat
const rupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(number);
};
