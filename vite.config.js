import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/physixtry/', // Replace 'physixtry' with your repository name
  build: {
    sourcemap: true,
  },
});
