/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './App.{js,jsx,ts,tsx}',
        './screens/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundColor: {
                main: '#FFFFFF',
                semiblue: '#D6EEF3',
                blue: '#5AC2DA',
            },
            colors: {
                white: '#FFFFFF',
                black: '#000000',
                ffc66c: '#FFC66C',
                f39500: '#F39500',
                ff4df: '#FF4DF',
                d78400: '#D78400',
            },
        },
    },

    plugins: [],
};
