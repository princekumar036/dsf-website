import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        'rbto-cnsd': ['"Roboto Condensed"', 'sans-serif'],
        'anton': ['"Anton"', 'sans-serif']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "75ch",
          },
        },
      })
    }
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ]
} satisfies Config;
