import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import babel from '@rolldown/plugin-babel'
import contentCollections from "@content-collections/vite";


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tanstackStart({
            router: {
                quoteStyle: "double"
            }
        }),
        // tanstackRouter({
        //     target: 'react',
        //     autoCodeSplitting: true,
        //     quoteStyle: "double",
        // }),
        react(),
        babel({ presets: [reactCompilerPreset()] }),
        contentCollections()
    ],
})
