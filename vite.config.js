import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Set to '/' for Vercel deployments
  build: {
    sourcemap: true,
  },
});
