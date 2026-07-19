import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import babel from '@rolldown/plugin-babel'
import contentCollections from "@content-collections/vite";
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
    plugins: [
        cloudflare({ viteEnvironment: { name: "ssr" } }),
        tanstackStart({
            router: {
                quoteStyle: "double"
            },
            prerender: {
                enabled: true
            }
        }),
        react(),
        tailwindcss(),
        babel({ presets: [reactCompilerPreset()] }),
        contentCollections()
    ],
})
