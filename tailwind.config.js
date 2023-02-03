/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        screens: {
        'sm': '320px',
        'md': '375px',
        'lg': '425px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
        },
        extend: {},
    },
    plugins: [],
    }