// src/sections/Contact.jsx
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen bg-[var(--color-surface)] text-white px-6 py-20 flex items-center"
        >
            <div className="max-w-3xl mx-auto text-center w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-futuristic text-[var(--color-neon-blue)] mb-8"
                >
                    Let's Work Together
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[var(--color-text-secondary)] text-lg mb-10"
                >
                    I'm open to freelance, collaboration, or full-time opportunities.
                    Let's connect and create something amazing.
                </motion.p>

                {/* Email */}
                <motion.a
                    href="mailto:fanibhusana2002@gmail.com"
                    className="btn-neon mb-6 inline-block"
                    whileHover={{ scale: 1.05 }}
                >
                    <Mail className="inline-block mr-2" size={18} /> Send Email
                </motion.a>

                {/* Socials */}
                <div className="flex justify-center gap-6 mt-6">
                    <a
                        href="https://github.com/Fanibhusana"
                        target="_blank"
                        className="hover:text-[var(--color-neon-green)] transition"
                    >
                        <Github size={28} />
                    </a>
                    <a
                        href="https://linkedin.com/in/fanibhusana"
                        target="_blank"
                        className="hover:text-[var(--color-neon-blue)] transition"
                    >
                        <Linkedin size={28} />
                    </a>
                </div>

                {/* Footer */}
                <p className="text-xs text-gray-500 mt-12">&copy; {new Date().getFullYear()} Fanibhusana. All rights reserved.</p>
            </div>
        </section>
    );
}
