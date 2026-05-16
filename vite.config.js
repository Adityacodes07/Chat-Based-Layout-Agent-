import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),tailwindcss(),
    babel({
      // The compiler preset automatically handles standard React optimizations
      presets: [reactCompilerPreset()]
    }),
  ],
})
