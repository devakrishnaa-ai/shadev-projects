/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                bgBase: "var(--color-bg)",
                textBase: "var(--color-text)",
                glass: "rgba(255, 255, 255, 0.1)",
                glassBorder: "rgba(255, 255, 255, 0.2)",
                // Dark theme palette
                darkBg: "#0A0A0A",
                darkBgSecondary: "#141414",
                darkBgTertiary: "#1A1A1A",
                darkBgCard: "#121212",
                textPrimary: "#FFFFFF",
                textSecondary: "#B0B0B0",
                textMuted: "#888888",
                // Original accent colors (kept for interactive elements)
                darkBlue: "#082032",
                navyBlue: "#2C394B",
                slateBlue: "#334756",
                lightGray: "#D2D2D2",
                brightOrange: "#FF4C29",
                brightOrangeLight: "#FF6B4A",
                // Accessible primary button color (darker for better contrast)
                primaryAccessible: "#CC3D1F",
                primaryAccessibleHover: "#E64529",
            },
            animation: {
                'gradient-x': 'gradient-x 15s ease infinite',
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center',
                    },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: 1, transform: 'scale(1)', boxShadow: '0 0 15px rgba(37, 211, 102, 0.5)' },
                    '50%': { opacity: .8, transform: 'scale(1.05)', boxShadow: '0 0 30px rgba(37, 211, 102, 0.8)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            },
        },
    },
    plugins: [],
}
