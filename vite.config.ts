import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'node:process';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Isso garante que process.env.API_KEY seja substituído pelo valor real durante o build
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});