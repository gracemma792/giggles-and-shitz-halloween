import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'giggles-and-shitz-halloween';

export default defineConfig({
  site: `https://gracemma792.github.io/${repository}/`,
  base: `/${repository}/`,
});
