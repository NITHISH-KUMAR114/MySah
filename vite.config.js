import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
    plugins: [react(), tailwindcss(), svgr()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            'icon' : path.resolve(__dirname, './src/assets/icons'),
        },
    },
    server: {
        host: "0.0.0.0",    // Exposes server to all network interfaces
        port: 5173,         // Or any available port; choose as needed
        strictPort: true    // (Optional) Exit with error if port is in use
    }
})
