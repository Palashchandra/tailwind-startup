const { resolve } = require('path')
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [WindiCSS()],
  server: {
    open: '/index.html',
    // port: 3116
  },
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
      }
    }
  }
}
