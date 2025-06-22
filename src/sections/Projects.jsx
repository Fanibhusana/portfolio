// src/sections/Projects.jsx
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen bg-[var(--color-bg)] text-white px-6 py-20"
        >
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-futuristic text-[var(--color-neon-green)] mb-10"
                >
                    Projects
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="card-neon p-4 rounded-2xl shadow-lg bg-[var(--color-surface)] flex flex-col justify-between"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-lg mb-4 h-40 object-cover"
                            />
                            <h3 className="text-xl text-[var(--color-neon-blue)] font-semibold mb-2">
                                {project.title}
                            </h3>
                            <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-2 py-1 border border-[var(--color-neon-green)] rounded-full"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            <div className="flex justify-between gap-2 mt-auto">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    className="btn-neon flex-1 text-center"
                                >
                                    Live
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="btn-neon flex-1 text-center"
                                >
                                    Code
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
