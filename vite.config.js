import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) =>
  defineConfig({
    plugins: [react()],
    base: mode === 'github' ? '/physixtry/' : '/', // Adjust base
    build: {
      sourcemap: true,
    },
  });
