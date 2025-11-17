"use client"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { useCart } from "./context/CartContext";

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="font-sans text-gray-800 bg-gray-100">
      <Header />

      <section className="relative w-full h-[480px] overflow-hidden">
        <img
          src="/bolo_home.png"
          alt="Bolo"
          className="w-500 h-250 object-cover"
        />
        <Link href={"/loja-online"}>
          <button className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-red-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-red-700 transition cursor-pointer">
            Compre Já
          </button>
        </Link>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-center text-xl font-semibold mb-10">
          Favoritos da Galera
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              name: "Bolo de Cinnamon Roll",
              priceDisplay: "R$ 115,00",
              img: "/bolo_cinnamon.png",
              priceNumeric: 11500,
            },
            {
              id: 2,
              name: "Bolo de Nozes",
              priceDisplay: "R$ 119,00",
              img: "/bolo_nozes.png",
              priceNumeric: 11900,
            },
            {
              id: 3,
              name: "Bolo Red Velvet",
              priceDisplay: "R$ 109,00",
              img: "/bolo_red.png",
              priceNumeric: 10900,
            },
          ].map((cake, index) => (
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
              <p className="text-sm text-gray-600 mb-5">{cake.priceDisplay}</p>

              {/* Botão de carrinho */}
              <button
                className="absolute bottom-7 right-3 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full hover:shadow-md transition cursor-pointer"
                onClick={() =>
                  addToCart({
                    id: cake.id,
                    name: cake.name,
                    img: cake.img,
                    price: cake.priceDisplay,
                    priceNumeric: cake.priceNumeric,
                    quantity: 1,
                  })
                }
              >
                <FiShoppingCart size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Acesse Nossa Loja Online
        </h2>
        <p className="text-center text-gray-700 mb-10">
          Que tal saborear um pedaço de felicidade? Na nossa loja online, você
          encontra bolos fresquinhos, preparados com ingredientes selecionados e
          muito carinho. São sabores irresistíveis para qualquer momento do seu
          dia!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-600 p-6 text-white rounded-xl shadow-lg">
            <h3 className="font-bold text-lg mb-2">Experimente nossos bolos</h3>
            <p className="text-sm">
              Que tal um bolo delicioso para acompanhar seu café? Sabor
              inconfundível e fresquinho, feito para tornar seus momentos ainda
              mais gostosos.
            </p>
          </div>
          <img
            src="/bolo_experimente.png"
            alt="Bolo"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-22 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <img src="/vovo.png" alt="Bolo" className="rounded-xl shadow-md w-90" />
        <div>
          <h2 className="font-semibold text-xl mb-4">Bela Fatia</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Nasci vendo minha avó transformar simples ingredientes em momentos
            inesquecíveis, e foi na pequena cozinha da nossa casa que aprendi
            que cada bolo carrega uma história. Quando ela partiu, ficou um
            vazio, mas também o desejo de manter viva a doçura que ela espalhava
            pelo mundo. Assim nasceu nossa loja: como um gesto de amor, uma
            forma de celebrar memórias e criar novas, com cada fatia preparada
            com o mesmo carinho que aprendi desde criança.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
