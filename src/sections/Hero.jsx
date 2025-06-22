import { motion } from "framer-motion";
import fani from "../assets/fani.png";
export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white px-6"
        >
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                <motion.img
                    src={fani}
                    alt="Fanibhusana"
                    className="w-full max-w-lg h-auto object-contain shadow-lg bg-black"
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-futuristic mb-4 leading-tight text-[var(--color-neon-green)]"
                >
                    Hello, I'm <span className="text-[var(--color-neon-blue)]">Fanibhusana</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-8"
                >
                    A futuristic Full Stack Developer crafting high-impact digital experiences.
                </motion.p>
                <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-neon inline-block"
                >
                    View Projects
                </motion.a>
            </div>
        </section>
    );
}