// src/sections/About.jsx
import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center bg-[var(--color-surface)] text-white px-6 py-20"
        >
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-futuristic text-[var(--color-neon-blue)] mb-6"
                >
                    About Me
                </motion.h2>

                <motion.p
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.2, duration: 0.6}}
                    className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto"
                >
                    Hi! I'm Fanibhusana, a dedicated Java Full Stack Developer with a strong passion for building clean,
                    efficient, and scalable web applications. My core expertise lies in Java, Spring Boot, Hibernate,
                    and RESTful API development, with hands-on experience across the full development lifecycle.
                    <br/> <br/>
                    I enjoy working on both backend systems and front-end interfaces using React JS, HTML/CSS, and
                    JavaScript. Over time, I’ve developed and deployed real-world projects—from a secure donation
                    platform supporting over 1,000 users to a dynamic note-taking app focused on performance and
                    usability.
                    <br/> <br/>
                    Proficient in tools like Git, Postman, Maven, and Tomcat, I follow Agile practices and write clean,
                    maintainable code driven by problem-solving and user needs. I’m always exploring new technologies
                    and sharpening my DSA and OOP skills to stay ahead in the ever-evolving tech landscape.
                    <br/> <br/>
                    I love collaborating on meaningful projects, contributing to open-source, and turning ideas into
                    impactful digital solutions.
                </motion.p>

                <motion.div
                    className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.15 }}
                >
                    {["Java","Hibernate", "Spring", "Spring Boot","HTML","CSS","Bootstrap","Tailwind", "JavaScript", "React","SQL", "MySQL", "Git","GitHub","Maven","Tomcat","Postman"].map((skill, index) => (
                        <motion.div
                            key={index}
                            className="card-neon text-sm md:text-base text-center py-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
