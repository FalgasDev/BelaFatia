import Footer from "../components/Footer";
import Header from "../components/Header";
import { FiShoppingCart } from "react-icons/fi";

const cakes = [
  {
    name: "Bolo de Cinnamon Roll",
    price: "R$ 115,00",
    img: "/bolo_cinnamon.png",
  },
  { name: "Bolo de Nozes", price: "R$ 119,00", img: "/bolo_nozes.png" },
  { name: "Bolo Red Velvet", price: "R$ 109,00", img: "/bolo_red.png" },

  {
    name: "Bolo de Chocolate",
    price: "R$ 112,00",
    img: "/bolo_chocolate.png",
  },
  {
    name: "Bolo de Chocolate com Maracujá",
    price: "R$ 115,00",
    img: "/bolo_maracuja.png",
  },
  { name: "Bolo de Coco Cremoso", price: "R$ 115,00", img: "/bolo_coco.png" },

  { name: "Bolo de Kinder", price: "R$ 129,00", img: "/bolo_kinder.png" },
  {
    name: "Bolo Floresta Negra",
    price: "R$ 117,90",
    img: "/bolo_floresta.png",
  },
  { name: "Bolo de Churros", price: "R$ 117,90", img: "/bolo_churros.png" },

  {
    name: "Bolo de Ninho com Morango",
    price: "R$ 129,90",
    img: "/bolo_ninho.png",
  },
  {
    name: "Bolo de Ninho com Nutella",
    price: "R$ 117,90",
    img: "/bolo_nutella.png",
  },
  {
    name: "Bolo de Chocolate com Morango",
    price: "R$ 117,90",
    img: "/bolo_morango.png",
  },
];

export default function BolosPage() {
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
              <p className="text-sm text-gray-600 mb-5">{cake.price}</p>

              <button className="absolute bottom-7 right-3 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full hover:shadow-md transition cursor-pointer">
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
