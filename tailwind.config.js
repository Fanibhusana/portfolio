// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-main)", ...fontFamily.sans],
                futuristic: ["var(--font-futuristic)", ...fontFamily.sans],
            },
            backgroundImage: {
                "gradient-neon": "var(--gradient-neon)",
            },
        },
    },
    plugins: [],
}
