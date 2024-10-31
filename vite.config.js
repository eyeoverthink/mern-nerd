import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
        proxy: {
        '/api': 'http://localhost:5175',
        'api/auth': 'http://localhost:5175',
        'api/login': 'http://localhost:5175',
        'api/register': 'http://localhost:5175',
        'api/logout': 'http://localhost:5175',
        'api/user': 'http://localhost:5175',
        'api/home': 'http://localhost:5175',
        'api/about': 'http://localhost:5175',
        'api/contact': 'http://localhost:5175',
        'api/restaurant': 'http://localhost:5175',
          'api attractions': 'http://localhost:5175',
            'api/hotels': 'http://localhost:5175',
          'api events': 'http://localhost:5175',
            'api/attractions': 'http://localhost:5175',
            'api/search': 'http://localhost:5175',


        },
        port: 5175,
        open: true,
        hmr: {
            overlay: false,

        },

    },
})
