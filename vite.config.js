import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Improve file-watching reliability when the project lives on a Windows mount
  // (e.g. /mnt/c/...) and you're running the dev server from WSL. This forces
  // polling which works around inotify/fsnotify issues across the VM boundary.
  server: {
    watch: {
      // enable polling so edits made from Windows editors are detected
      usePolling: true,
      // check every 100ms; increase if you need lower CPU usage
      interval: 100,
    },
    // listen on all addresses so you can open from host browser if needed
    host: true,
  },
})
