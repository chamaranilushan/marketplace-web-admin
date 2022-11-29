/** @type {import('tailwindcss').Config} */

const colors = require('./src/ui-library/theme/colors')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,css,scss}', './safelist.txt'],
    theme: {
        extend: {},
        fontFamily: {
            sans: [
                'Inter',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
            mono: [
                'ui-monospace',
                'SFMono-Regular',
                'Menlo',
                'Monaco',
                'Consolas',
                '"Liberation Mono"',
                '"Courier New"',
                'monospace',
            ],
        },
        screens: {
            xs: '576',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        colors,
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.500'),
                        maxWidth: '65ch',
                    },
                },
                invert: {
                    css: {
                        color: theme('colors.gray.400'),
                    },
                },
            }),
        },
    },
    plugins: [
        require('tailwind-safelist-generator')({
            path: 'safelist.txt',
            patterns: [
                'text-{colors}',
                'bg-{colors}',
                'hover:text-{colors}',
                'hover:bg-{colors}',
                'active:bg-{colors}',
                'ring-{colors}',
                'hover:ring-{colors}',
                'focus:ring-{colors}',
                'focus-within:ring-{colors}',
                'border-{colors}',
                'focus:border-{colors}',
                'focus-within:border-{colors}',
                'h-{height}',
                'w-{width}',
            ],
        }),
    ],
}
