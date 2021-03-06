const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

    safelist: [
        "w-64",
        "w-1/2",
        "rounded-l-lg",
        "rounded-r-lg",
        "bg-gray-200",
        "grid-cols-4",
        "grid-cols-7",
        "h-6",
        "leading-6",
        "h-9",
        "leading-9",
        "shadow-lg",
        "bg-opacity-50",
        "bg-gray-200",
        "inset-0",
        "fixed",
    ],

    theme: {
        extend: {
            colors: {
                brand: "#FFC523",
                olive: {
                    50: "#faf9f0",
                    100: "#f8efa2",
                    200: "#eee05f",
                    300: "#d5bd36",
                    400: "#aa961a",
                    500: "#87790c",
                    600: "#6c6008",
                    700: "#544808",
                    800: "#393207",
                    900: "#281f06",
                },
                asparagus: {
                    50: "#faf9f1",
                    100: "#f6efb0",
                    200: "#ebe06f",
                    300: "#cdbf40",
                    400: "#9d9821",
                    500: "#7a7b0f",
                    600: "#61620a",
                    700: "#4b4a0a",
                    800: "#333309",
                    900: "#241f08",
                },
                green: {
                    50: "#f2f6f2",
                    100: "#dfefe4",
                    200: "#b6e6c3",
                    300: "#7cca92",
                    400: "#37ab61",
                    500: "#26903b",
                    600: "#217a2a",
                    700: "#1e5d23",
                    800: "#16401d",
                    900: "#102717",
                },
                seagreen: {
                    50: "#eef5f4",
                    100: "#cef0f3",
                    200: "#98e6e3",
                    300: "#5eccc1",
                    400: "#25ae99",
                    500: "#1a9373",
                    600: "#177c5a",
                    700: "#165f47",
                    800: "#114236",
                    900: "#0c2928",
                },
                steel: {
                    50: "#f2f7f8",
                    100: "#d8f0f9",
                    200: "#ace1f1",
                    300: "#77c3de",
                    400: "#40a1c6",
                    500: "#2f82ad",
                    600: "#286894",
                    700: "#234f74",
                    800: "#193654",
                    900: "#102138",
                },
                denim: {
                    50: "#f5f8fa",
                    100: "#dff0fb",
                    200: "#bbdcf8",
                    300: "#8dbcec",
                    400: "#5f96de",
                    500: "#4a73d1",
                    600: "#3d58be",
                    700: "#31429b",
                    800: "#232d70",
                    900: "#141c48",
                },
                royalblue: {
                    50: "#f8fafb",
                    100: "#e9effb",
                    200: "#d3d6f8",
                    300: "#afb2ee",
                    400: "#9289e2",
                    500: "#7a65d8",
                    600: "#6449c7",
                    700: "#4c37a4",
                    800: "#342676",
                    900: "#1e1848",
                },
                orchid: {
                    50: "#fafafb",
                    100: "#f2effa",
                    200: "#e4d3f5",
                    300: "#cbace6",
                    400: "#b981d5",
                    500: "#a25cc6",
                    600: "#8841ae",
                    700: "#663189",
                    800: "#47225f",
                    900: "#291637",
                },
                blush: {
                    50: "#fcfbfa",
                    100: "#faefef",
                    200: "#f6cfde",
                    300: "#eaa3bd",
                    400: "#e57497",
                    500: "#d75178",
                    600: "#bf3658",
                    700: "#972941",
                    800: "#6c1d2b",
                    900: "#421218",
                },
                sunset: {
                    50: "#fcfbf8",
                    100: "#faefdd",
                    200: "#f5d4ba",
                    300: "#e8ab89",
                    400: "#dd7d5b",
                    500: "#ca5b3a",
                    600: "#af4026",
                    700: "#88301e",
                    800: "#602116",
                    900: "#3c150e",
                },
                black: colors.black,
                white: colors.white,
                gray: colors.neutral,
                indigo: colors.indigo,
                red: colors.rose,
                yellow: colors.amber,
                orange: colors.orange,
                sky: colors.sky,
                rose: colors.rose,
                teal: colors.teal,
                violet: colors.violet,
            },
            backgroundImage: {
                conic: "conic-gradient(var(--tw-gradient-stops))",
                "conic-to-t":
                    "conic-gradient(at top, var(--tw-gradient-stops))",
                "conic-to-b":
                    "conic-gradient(at bottom, var(--tw-gradient-stops))",
                "conic-to-l":
                    "conic-gradient(at left, var(--tw-gradient-stops))",
                "conic-to-r":
                    "conic-gradient(at right, var(--tw-gradient-stops))",
                "conic-to-tl":
                    "conic-gradient(at top left, var(--tw-gradient-stops))",
                "conic-to-tr":
                    "conic-gradient(at top right, var(--tw-gradient-stops))",
                "conic-to-bl":
                    "conic-gradient(at bottom left, var(--tw-gradient-stops))",
                "conic-to-br":
                    "conic-gradient(at bottom right, var(--tw-gradient-stops))",
                radial: "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
                "radial-at-t":
                    "radial-gradient(ellipse at top, var(--tw-gradient-stops))",
                "radial-at-b":
                    "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
                "radial-at-l":
                    "radial-gradient(ellipse at left, var(--tw-gradient-stops))",
                "radial-at-r":
                    "radial-gradient(ellipse at right, var(--tw-gradient-stops))",
                "radial-at-tl":
                    "radial-gradient(ellipse at top left, var(--tw-gradient-stops))",
                "radial-at-tr":
                    "radial-gradient(ellipse at top right, var(--tw-gradient-stops))",
                "radial-at-bl":
                    "radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))",
                "radial-at-br":
                    "radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("daisyui"),
    ],

    daisyui: {
        themes: false,
    },
};
