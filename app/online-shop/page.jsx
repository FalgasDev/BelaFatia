"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FiShoppingCart, FiTrash2, FiEdit2, FiPlus } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5001";

export default function BolosPage() {
  const { addToCart } = useCart();

  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingCake, setEditingCake] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  async function loadCakes() {
    try {
      const res = await axios.get(`${API_URL}/cakes`);
      if(res.data.length != 0) {
        setLoading(false);
      }
      setCakes(res.data);
    } catch (err) {
      alert(err.response.data.Error);
    }
  }

  useEffect(() => {
    loadCakes();
  }, []);

  async function handleDelete(id) {
    try {
      await axios.delete(`${API_URL}/cakes/${id}`);
      loadCakes();
    } catch (err) {
      alert(err.response.data.Error);
    }
  }

  function startCreate() {
    setIsCreating(true);
    setEditingCake({
      name: "",
      price: "",
      img: "",
    });
  }

  async function handleSaveEdit() {
    try {
      if (isCreating) {
        await axios.post(`${API_URL}/cakes`, editingCake);
        loadCakes();
      } else {
        await axios.put(`${API_URL}/cakes/${editingCake.id}`, editingCake);
        loadCakes();
      }

      setEditingCake(null);
      setIsCreating(false);
    } catch (err) {
      alert(err.response.data.Error);
    }
  }

  function startEdit(cake) {
    setIsCreating(false);
    setEditingCake(cake);
  }

  return (
    <>
      <Header />

      <main className="bg-gray-100 min-h-screen pb-20 pt-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 mb-10">
          <h1 className="text-2xl font-bold">BOLOS</h1>

          <button
            onClick={startCreate}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md cursor-pointer"
          >
            <FiPlus size={18} />
            Adicionar Bolo
          </button>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Carregando bolos...</p>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
            {cakes.map((cake) => (
              <div
                key={cake.id}
                className="relative p-2 rounded-lg bg-white shadow-sm"
              >
                <div className="absolute top-3 right-3 flex gap-3">
                  <button
                    onClick={() => startEdit(cake)}
                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 cursor-pointer"
                  >
                    <FiEdit2 size={16} />
                  </button>

                  <button
                    onClick={() => handleDelete(cake.id)}
                    className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 cursor-pointer"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>

                <div className="w-full h-52 rounded-lg overflow-hidden bg-gray-200 mb-2">
                  <img
                    src={cake.img}
                    alt={cake.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-sm font-semibold mt-5">{cake.name}</p>
                <p className="text-sm text-gray-600 mb-5">
                  R$ {Number(cake.price).toFixed(2).replace(".", ",")}
                </p>

                <button
                  className="absolute bottom-7 right-3 bg-red-700 hover:bg-red-800 text-white p-2 rounded-full cursor-pointer"
                  onClick={() =>
                    addToCart({
                      id: cake.id,
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
        )}
      </main>

      <Footer />

      {editingCake && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">
          <div className="bg-white w-96 p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold mb-4">
              {isCreating ? "Adicionar Novo Bolo" : "Editar Bolo"}
            </h2>

            <label className="block text-sm font-medium mt-2">Nome:</label>
            <input
              type="text"
              value={editingCake.name}
              onChange={(e) =>
                setEditingCake({ ...editingCake, name: e.target.value })
              }
              className="w-full border p-2 rounded mt-1 outline-0"
            />

            <label className="block text-sm font-medium mt-3">Preço:</label>
            <input
              type="text"
              value={editingCake.price}
              onChange={(e) =>
                setEditingCake({ ...editingCake, price: e.target.value })
              }
              className="w-full border p-2 rounded mt-1 outline-0"
            />

            <label className="block text-sm font-medium mt-3">
              Imagem (URL):
            </label>
            <input
              type="text"
              value={editingCake.img}
              onChange={(e) =>
                setEditingCake({ ...editingCake, img: e.target.value })
              }
              className="w-full border p-2 rounded mt-1 outline-0"
            />

            <div className="flex justify-end gap-3 mt-6">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 cursor-pointer"
                onClick={() => {
                  setEditingCake(null);
                  setIsCreating(false);
                }}
              >
                Cancelar
              </button>

              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer"
                onClick={handleSaveEdit}
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
