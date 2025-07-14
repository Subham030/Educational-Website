// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite';
// import obfuscatorPlugin from 'vite-plugin-obfuscator'; // 👈 fix CommonJS import
// const { obfuscator } = obfuscatorPlugin; // 👈 extract obfuscator manually

// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//     obfuscator({
//       compact: true,
//       controlFlowFlattening: true,
//       deadCodeInjection: true,
//       debugProtection: true,
//       disableConsoleOutput: true,
//       stringArray: true,
//     }),
//   ],
//   build: {
//     sourcemap: false,
//   },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    sourcemap: false,
  },
});

