// @ts-check
import { defineConfig } from 'astro/config';

// Built output goes to ../docs (redscribe-site/docs) so it can be committed
// and served straight from GitHub Pages ("Deploy from a branch", /docs
// folder on main), matching the redscribe-docs repo's setup.
//
// Hosted at the custom domain www.redscribe.app (see public/CNAME), so no
// base path is needed, this serves at the domain root.
export default defineConfig({
	site: 'https://www.redscribe.app/',
	outDir: '../docs',
});
