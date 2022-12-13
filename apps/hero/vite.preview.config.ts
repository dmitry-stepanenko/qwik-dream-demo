import { mergeConfig, UserConfigExport } from 'vite';
import viteConfig from './vite.config';

const merged =  mergeConfig(viteConfig, {
	build: {
		ssr: 'src/entry.preview.tsx',
	},
} as UserConfigExport);

export default merged;