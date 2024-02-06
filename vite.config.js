import { resolve } from 'path'

export default {
 build: {
  rollupOptions: {
   input: {
    main: resolve(__dirname, 'index.html'),
    live: resolve(__dirname, 'live/live.html')
   }
  }
 }
}