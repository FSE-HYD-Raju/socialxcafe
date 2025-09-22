import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Cafe", id: "features" },
  { name: "Snooker", id: "features" },
  { name: "Library", id: "features" },
  { name: "Workspace", id: "workspace" },
  { name: "Events", id: "features" },
  { name: "Contact", id: "footer" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false); // close mobile menu
    }
  };

  return (
    <header className="fixed w-full bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">SOCIALXCAFE</h1>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.id)}
              className="hover:text-green-700"
            >
              {item.name}
            </button>
          ))}
        </nav>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.id)}
              className="block w-full text-left px-6 py-3 hover:bg-gray-100"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
