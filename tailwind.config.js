import {
    brown,
    darkBrown,
    gray,
    lightBrown,
    themeColors,
} from "./src/utils/colors";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brown,
                gray,
                darkBrown,
                lightBrown,
                ...themeColors,
            },
            fontFamily: {
                sans: ['Noto Sans', 'sans-serif'],
                serif: ['Noto Serif', 'serif'],
            },
        },
    },
    darkMode: "class",
};