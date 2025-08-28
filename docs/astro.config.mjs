// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

import tailwindcss from '@tailwindcss/vite'

import cloudflare from '@astrojs/cloudflare'

// import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Image Storage Explorer',
      components: {
        Hero: './src/components/Hero.astro',
      },
      customCss: [
        // Path to your Tailwind base styles:
        './src/styles/global.css',
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/azydeco/support-image-storage-explorer',
        },
      ],
      sidebar: [
        // {
        //   label: 'Guides',
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: 'Example Guide', slug: 'guides/example' },
        //   ],
        // },
        {
          label: 'Getting Started',
          autogenerate: { directory: 'getting-started' },
        },
        {
          label: 'Providers',
          autogenerate: { directory: 'providers' },
        },
      ],
    }),
  ],

  // adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
  },

  // adapter: cloudflare(),
})
