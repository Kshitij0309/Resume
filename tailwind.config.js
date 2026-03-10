/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                portalBackground: {
                    primary: "#050505",
                    secondary: "#0b0b12",
                },
                accent: {
                    red: "#e50914",
                    redDark: "#8b0000",
                },
                text: {
                    primary: "#f5f5f5",
                    muted: "#8c8c8c",
                },
            },
            fontFamily: {
                title: ["Cinzel", "serif"],
                body: ["Inter", "sans-serif"],
            },
            animation: {
                'flicker': 'flicker 2s infinite',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                flicker: {
                    '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: 1 },
                    '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: 0.4 },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
