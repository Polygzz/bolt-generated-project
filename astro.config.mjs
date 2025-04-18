import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // Add this line to enable environment variables in Astro
  // This is usually not needed, but can be helpful in some cases
  // vite: {
  //   define: {
  //     'process.env': process.env
  //   }
  // }
});
