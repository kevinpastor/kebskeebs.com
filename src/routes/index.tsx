import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'

const Index = (): ReactNode => (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[700px] rounded-full bg-primary/15 blur-[150px]" />

        <span className="absolute top-6 left-6 z-10 text-sm font-medium tracking-widest text-muted-foreground/50 md:top-8 md:left-8 md:text-base">
            KEB'S KEEBS
        </span>

        <div className="relative z-10 px-4 text-center">
            <h1 className="text-5xl font-bold tracking-tighter md:text-8xl font-serif">
                <span className="text-muted-foreground/70">The</span><br />
                <span className="text-foreground">Challenger</span><br />
                <span className="text-muted-foreground/70">Keyboard</span>
            </h1>
            <p className="mt-4 text-xl font-semibold text-muted-foreground/95 md:text-2xl">
                Coming Soon
            </p>
            <p className="mx-auto mt-6 max-w-md text-base text-muted-foreground md:text-lg">
                A 35 keys open-source gaming keypad
            </p>
            <a
                href="https://github.com/kevinpastor/challenger"
                target="_blank"
                rel="noreferrer"
                className="mx-auto mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground/60 transition-colors hover:text-foreground"
            >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
            </a>
        </div>

        <div className="rgb-glow-far" />
        <div className="rgb-glow-near" />
        <div className="rgb-strip" />
    </div>
)

export const Route = createFileRoute('/')({
    component: Index,
})
