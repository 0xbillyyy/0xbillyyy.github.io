/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "custom-bg": "#f0f0f0",
        "custom-1": "#26292b",
        "custom-2": "#2e3239",
        "custom-3": "#5f7adb",
        "custom-4": "#a2b2ee",



        "custom-bg": "#26292b",
        "custom-headline": "#ffffff",
        "custom-paragraph": "#eeeeee",
        "custom-button": "#2e3239",
        "custom-bg-2":"#5f7adb",
        "custom-button-text": "#a2b2ee",
        
        "custom-illustration-stroke": "#001e1d",
        "custom-illustration-main": "#e8e4e6",
        "custom-illustration-highlight": "#f9bc60",
        "custom-illustration-secondary": "#abd1c6",
        "custom-illustration-tertiary": "#e16162",



        "custom-card": "#004643",
        "custom-card-headline": "#fffffe",
        "custom-card-paragraph": "#e8e4e6",
      }
    },
  },
  darkMode: "class",
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          'background': '#f0f0f0', // Ganti dengan warna background yang diinginkan
        },
      },
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'winter',
      'lemonade',
      'coffee',
      'pink',
      'night',
      'coffee',
      'gray',
        // Tambahkan tema lainnya sesuai kebutuhan
      ],
  },
}

