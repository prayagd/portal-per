import { colors } from './src/constants/colors';

// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
  themes: ['pendulum', 'amplitude'],
  theme: {
    extend: {
      colors,
      screens: {
        xs: '480px',
      },
      opacity: {
        3: '0.03',
      },
    },
  },
  daisyui: {
    themes: [
      // The colors defined for the following themes have to match the ones defined in the color configuration
      // here: https://daisyui.com/docs/colors
      // Undefined colors will be chosen by daisyUI automatically.
      {
        pendulum: {
          primary: '#907EA0',
          'primary-content': '#fff',
          secondary: '#F4F5F6',
          'secondary-content': '#58667E',
          accent: '#1DE7DF',
          neutral: '#EFF2F5',
          'accent-content': '#000',
          'base-100': '#F5F9FA',
          'base-200': '#fff',
          'base-300': '#F7F7F7',
          '--base-400': '#E7E7E7',
          'base-content': '#58667E',
          '--text': '#111',
          '--bg-modal': '#fff',
          '--modal-border': '#E5E5E5',
          '--rounded-btn': '9px',
          '--btn-text-case': 'none',
        },
        amplitude: {
          primary: '#4EE59A',
          'primary-content': '#fff',
          secondary: '#096F6B',
          'secondary-content': '#8EBDBB',
          accent: '#4EE59A',
          'accent-content': '#fff',
          neutral: '#141414',
          'neutral-focus': '#111318',
          'neutral-content': '#B9B9B9',
          'base-100': '#1C1C1C',
          'base-200': '#141414',
          'base-300': '#0C0C0C',
          '--base-400': '#E8E8E8',
          'base-content': '#fff',
          '--text': '#fff',
          '--bg-modal': '#141414',
          '--modal-border': '#434343',
          '--rounded-btn': '9px',
          '--btn-text-case': 'none',
        },
      },
    ],
  },
};
