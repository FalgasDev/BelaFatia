export default function Footer() {
  return (
    <footer className="bg-red-600 text-white p-12 flex justify-around items-center">
      <div className="space-y-4 text-sm">
        <p className="flex items-center gap-2">📞 (11) 94733-9002</p>
        <p className="flex items-center gap-2">📸 bela_fatia</p>
        <p className="flex items-center gap-2">💬 (11) 98972-0060</p>
        <p className="flex items-center gap-2">📍 Rua Alvaro Cardoso, 642</p>
      </div>
      <img src="/logo.png" alt="Logo" className="w-40" />
    </footer>
  );
}
