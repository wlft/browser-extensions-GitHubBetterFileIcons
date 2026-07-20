import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
    srcDir: 'src',
    manifest: {
        name: 'GitHub Better File Icons',
        description: 'A browser extension which adds icons for various projects, file types, and folders on GitHub.',
        icons: {
            48: 'icons/extension/48.png'
        },
        web_accessible_resources: [
            {
                resources: ['icons/files/*.svg', 'icons/folders/*.svg'],
                matches: ['https://github.com/*'],
            },
        ],
        permissions: ['activeTab'],
    }
});
