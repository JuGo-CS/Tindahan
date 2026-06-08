/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: [
        './app/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
        './App.tsx',
    ],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            colors: {
                primaryGreen: '#10B981',
                textBlue: '#1A3636',
                white: '#FFFFFF',
                backgroundWhite: '#EEEEEE',
                activeBlue: '#0F969C',
                inactiveBlue: '#45D0DA',
                activeOrange: '#FF8C42',
                inactiveOrange: '#FFA56C',
            },
        },
    },
    plugins: [],
};
