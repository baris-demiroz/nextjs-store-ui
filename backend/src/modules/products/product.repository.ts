import { Product } from "./product.types";

const products: Product[] = [
  {
    id: 1,
    name: "MacBook Pro M4",
    price: 79999,
    image: "https://productimages.hepsiburada.net/s/777/424-600/110001191546607.jpg/format:webp",
  },
  {
    id: 2,
    name: "iPhone 17",
    price: 59999,
    image: "https://productimages.hepsiburada.net/s/532/424-600/110000589448247.jpg/format:webp",
  },
  {
    id: 3,
    name: "iPhone 17",
    price: 59999,
    image: "https://productimages.hepsiburada.net/s/777/424-600/110000950995464.jpg/format:webp",
  },
  {
    id: 4,
    name: "Apple Airpods Pro 3 Kulakiçi TWS Bluetooth Kulaklık Aktif Gürültü Önleme Suya Dayanıklı",
    price: 59999,
    image: "https://productimages.hepsiburada.net/s/777/424-600/110001191828560.jpg/format:webp",
  },
  {
    id: 5,
    name: "iPhone 17",
    price: 59999,
    image: "https://productimages.hepsiburada.net/s/777/424-600/110001026353525.jpg/format:webp",
  },
];

export const findAllProducts = (): Product[] => {
  return products;
};

export const findProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};