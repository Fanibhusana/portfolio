import Contact from "./sections/Contact";
import Projects from "./sections/Projects.jsx";
import About from "./sections/About.jsx";
import Hero from "./sections/Hero.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
    return (
        <>
            <Navbar />
            <main className="pt-20" >
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
        </>
    );
}
