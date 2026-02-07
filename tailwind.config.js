module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        piko: {
          primary: '#C04000',
          secondary: '#F5E6D3',
          accent: '#2C1810',
        },
        luna: {
          primary: '#36454F',
          secondary: '#708090',
          accent: '#FFBF00',
        },
        otis: {
          primary: '#8B7355',
          secondary: '#F5DEB3',
          accent: '#3E2723',
        },
      },
    },
  },
  plugins: [],
}
