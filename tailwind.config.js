/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "black":"#121212",
                "black-alt":"#121212",
                "gray-dark": "#6E6E6E",
                "gray-medium": "#787878",
                "gray-light": "#A4A4A4",
                "white-transparent": "#FFFFFF26",
                "gray-normal": "#777777",
                "gray-lighter": "#EEEEEE",
                "gray-darkest": "#323231",
                "gray-lightest": "#C7C7C7",
                "gray-lightest-alt": "#C4C4C4",
                "gray-lighter-alt": "#D0D0D0",
                green: "#2BA637",
                "gray-lightest-alt2": "#CFCFCF",
                primary: "#AB0A10",
                "gray-lightest-alt3": "#CACACA",
                "gray-lightest-alt4": "#C9C9C9",
                "gray-darker": "#4C4C4C",
                "gray-darker-alt": "#848484",
                "gray-darker-alt2": "#383838",
                "green-alt": "#008F17",
                "gray-lightest-alt5": "#BFBFBF",
                "gray-normal-alt": "#7D7D7D",
                "gray-normal-alt2": "#5D5D5D",
                "gray-darkest-alt": "#6A6A6A",
                "gray-lighter-alt5": "#D8D8D8",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                slideIn: {
                    "0%": { transform: "translateY(100%)" },
                    "100%": { transform: "translateY(0)" },
                },
            },
            animation: {
                fadeIn: "fadeIn 0.5s ease-in-out",
                slideIn: "slideIn 0.5s ease-in-out",
            },
        },
    },
    plugins: [],
};
