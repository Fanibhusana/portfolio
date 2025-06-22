// src/components/Navbar.jsx
import { useState } from "react";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-bg)] shadow-md backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
                {/* Logo */}
                <a
                    href="#"
                    className="text-xl font-futuristic text-[var(--color-neon-green)] tracking-wider"
                >
                    <b>Fanibhusana</b>
                </a>

                {/* Desktop Nav + Theme Toggle */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-white hover:text-[var(--color-neon-blue)] transition duration-300 font-medium relative group"
                        >
                            {item.label}
                            <span className="block h-[2px] w-0 group-hover:w-full bg-[var(--color-neon-green)] transition-all duration-300"></span>
                        </a>
                    ))}

                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden z-50 flex items-center gap-4">

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="text-white focus:outline-none"
                    >
                        {mobileOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-[var(--color-surface)] px-4 py-4 space-y-4 transition-all duration-300">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="block text-white hover:text-[var(--color-neon-blue)] font-medium"
                            onClick={() => setMobileOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
