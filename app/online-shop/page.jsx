"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const cakes = [
  {
    id: 1,
    name: "Bolo de Cinnamon Roll",
    price: "115.00",
    img: "/bolo_cinnamon.png"
  },
  {
    id: 2,
    name: "Bolo de Nozes",
    price: "119.00",
    img: "/bolo_nozes.png"
  },
  {
    id: 3,
    name: "Bolo Red Velvet",
    price: "109.00",
    img: "/bolo_red.png"
  },

  {
    id: 4,
    name: "Bolo de Chocolate",
    price: "112.00",
    img: "/bolo_chocolate.png"
  },
  {
    id: 5,
    name: "Bolo de Chocolate com Maracujá",
    price: "115.00",
    img: "/bolo_maracuja.png"
  },
  {
    id: 6,
    name: "Bolo de Coco Cremoso",
    price: "115.00",
    img: "/bolo_coco.png"
  },

  {
    id: 7,
    name: "Bolo de Kinder",
    price: "129.00",
    img: "/bolo_kinder.png"
  },
  {
    id: 8,
    name: "Bolo Floresta Negra",
    price: "117.90",
    img: "/bolo_floresta.png"
  },
  {
    id: 9,
    name: "Bolo de Churros",
    price: "117.90",
    img: "/bolo_churros.png"
  },

  {
    id: 10,
    name: "Bolo de Ninho com Morango",
    price: "129.90",
    img: "/bolo_ninho.png"
  },
  {
    id: 11,
    name: "Bolo de Ninho com Nutella",
    price: "117.90",
    img: "/bolo_nutella.png"
  },
  {
    id: 12,
    name: "Bolo de Chocolate com Morango",
    price: "117.90",
    img: "/bolo_morango.png"
  },
];

export default function BolosPage() {
  const { addToCart } = useCart();

  return (
    <>
      <Header />

      <main className="bg-gray-100 min-h-screen pb-20 pt-10">
        <h1 className="text-center text-2xl font-bold mb-10">BOLOS</h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
          {cakes.map((cake, index) => (
            <div
              key={index}
              className="relative p-2 rounded-lg transition bg-white"
            >
              <div className="w-full h-52 bg-gray-200 rounded-lg overflow-hidden mb-2">
                <img
                  src={cake.img}
                  alt={cake.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <p className="text-sm font-semibold mt-5">{cake.name}</p>
              <p className="text-sm text-gray-600 mb-5">R$ {cake.price.replace(".", ",")}</p>

              <button
                className="absolute bottom-7 right-3 bg-red-700 hover:bg-red-800 text-white p-2 rounded-full hover:shadow-md transition cursor-pointer"
                onClick={() =>
                  addToCart({
                    id: cake.id ?? cake.name,
                    name: cake.name,
                    img: cake.img,
                    priceDisplay: cake.price,
                    priceNumeric: Number(cake.price),
                    quantity: 1,
                  })
                }
              >
                <FiShoppingCart size={18} />
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
