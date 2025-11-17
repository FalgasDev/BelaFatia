export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <header className="w-full bg-red-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-6 text-sm uppercase">
          <img src="/logo.png" alt="Logo" className="w-20 h-15" />
          <a href="#" className="text-2xl">Bela Fatia</a>
        </div>
        <nav className="flex gap-6 text-sm uppercase">
          <a href="#" className="hover:opacity-80">
            Loja Online
          </a>
          <a href="#" className="hover:opacity-80">
            Nossa Loja
          </a>
          <a href="#" className="hover:opacity-80">
            Valores
          </a>
          <a href="#" className="hover:opacity-80">
            Contato
          </a>
        </nav>
      </header>

      <section className="relative w-full h-[480px] overflow-hidden">
        <img src="/bolo_home.png" alt="Bolo" className="w-500 h-250 object-cover" />
        <button className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-red-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-red-700 transition cursor-pointer">
          Compre Já
        </button>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-center text-xl font-semibold mb-10">
          Favoritos da Galera
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              name: "Bolo de Cinnamon Roll",
              price: "R$ 115,00",
              image: "/bolo_cinnamon.png",
            },
            {
              name: "Bolo de Nozes",
              price: "R$ 119,00",
              image: "/bolo_nozes.png",
            },
            {
              name: "Bolo Red Velvet",
              price: "R$ 107,00",
              image: "/bolo_red.png",
            },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <img src={item.image} alt="Bolo" className="w-full rounded-lg shadow-md" />
              <p className="mt-2 font-semibold text-sm">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.price}</p>
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
          muito carinho. São sabores irresistíveis para qualquer momento do seu dia!
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
          <img src="/bolo_experimente.png" alt="Bolo" className="rounded-xl shadow-md w-full object-cover" />
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

      <footer className="bg-red-600 text-white p-12 flex justify-around items-center">
        <div className="space-y-4 text-sm">
          <p className="flex items-center gap-2">📞 (11) 94733-9002</p>
          <p className="flex items-center gap-2">📸 bela_fatia</p>
          <p className="flex items-center gap-2">💬 (11) 98972-0060</p>
          <p className="flex items-center gap-2">📍 Rua Alvaro Cardoso, 642</p>
        </div>
        <img src="/logo.png" alt="Logo" className="w-40"/>
      </footer>
    </div>
  );
}
