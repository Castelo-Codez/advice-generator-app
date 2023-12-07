/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{html,js,vue}"],
    theme: {
        extend: {
            colors: {
                PrimaryLightCyan: "hsl(193, 38%, 86%)",
                PrimaryNeonGreen: "hsl(150, 100%, 66%)",
                NeutralGrayishBlue: "hsl(217, 19%, 38%)",
                NeutralDarkGrayishBlue: "hsl(217, 19%, 24%)",
                NeutralDarkBlue: "hsl(218, 23%, 16%)",
            },
            fontSize: {
                main: "28px",
            },
            fontFamily: {
                mainFont: "'Manrope', sans-serif",
            },
            boxShadow: {
                mainBox: "0px -1px 40px 5px hsl(150, 100%, 66%)",
            },
        },
    },
    plugins: [],
};
