// @ts-check
import { defineConfig } from 'astro/config';

// Built output goes to ../docs (redscribe-site/docs) so it can be committed
// and served straight from GitHub Pages ("Deploy from a branch", /docs
// folder on main), matching the redscribe-docs repo's setup.
//
// Hosted as a GitHub project page (redscribe-labs.github.io/redscribe-site/,
// not a custom domain), so base/site are set accordingly.
export default defineConfig({
	site: 'https://redscribe-labs.github.io/redscribe-site/',
	base: '/redscribe-site',
	outDir: '../docs',
});
