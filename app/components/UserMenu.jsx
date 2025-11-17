"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiUser } from "react-icons/fi";

export default function UserMenu() {
  const router = useRouter();

  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {;
      setIsLogged(true);
      setUserName(user);
    }
  }, []);

  const handleClick = () => {
    if (!isLogged) {
      router.push("/login");
      return;
    }
    setOpen((prev) => !prev);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLogged(false);
    setOpen(false);
    router.push("/");
  };

  return (
    <div className="relative">
      {/* ÍCONE DO USUÁRIO */}
      <button
        onClick={handleClick}
        className="text-2xl hover:opacity-70 transition cursor-pointer"
      >
        <FiUser size={23}/>
      </button>

      {/* MENU FLUTUANTE */}
      {open && isLogged && (
        <div className="absolute -right-17.5 mt-3 bg-gray-200 p-4 rounded-lg shadow-xl w-40 animate-fade z-10">
          <div className="text-center mb-3 text-gray-800 font-medium">
            Olá {userName}!
          </div>

          <button
            onClick={logout}
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-black transition cursor-pointer"
          >
            Logout
          </button>

          {/* Triângulo apontando para o ícone */}
          <div className="absolute -top-1 right-18.5 w-3 h-3 bg-gray-200 rotate-45"></div>
        </div>
      )}
    </div>
  );
}
