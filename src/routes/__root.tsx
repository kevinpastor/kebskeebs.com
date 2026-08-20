import type { ReactNode } from 'react'
import {
    Outlet,
    createRootRoute,
    HeadContent,
    Scripts,
    Link,
} from '@tanstack/react-router'

import css from './-index.css?url'

const RootComponent = (): ReactNode => (
    <html className="dark h-full">
        <head>
            <HeadContent />
        </head>
        <body className="min-h-screen bg-background flex flex-col">
            <nav className="sticky top-0 z-10 p-6 md:p-8 flex justify-between backdrop-blur-md">
                <Link to="/" className="text-sm font-medium tracking-widest text-muted-foreground/50 md:text-base">
                    Keb's Keebs
                </Link>
                <Link to="/docs/$" className="text-sm font-medium tracking-widest text-muted-foreground/50 md:text-base">
                    Docs
                </Link>
            </nav>

            <main className="max-w-xl w-full mx-auto grow flex flex-col">
                <Outlet />
            </main>

            <div className="fixed inset-0 -z-20 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] parallax-layer-slow" />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-100 w-175 rounded-full bg-primary/15 blur-[150px] pointer-events-none" />

            <div
                className="fixed inset-0 -z-10 pointer-events-none parallax-layer"
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: -10,
                    pointerEvents: 'none',
                }}
            >
                <img
                    src="/switch-schematic.png"
                    className="absolute"
                    style={{
                        width: '238px',
                        top: '17%',
                        right: 'min(calc(50% + 576px / 2), calc(100vw - 238px - 150px))', // 150px, magic number to consider rotation
                        transform: 'rotate(10deg)',
                        transformOrigin: 'top right',
                        opacity: 0.15,
                        willChange: 'transform',
                    }}
                />
                <img
                    src="/challenger-schematic.svg"
                    className="absolute"
                    style={{
                        width: '500px',
                        top: 'clamp(17%, calc(17% + (1500px - 100vw) * 0.7), 85%)',
                        left: 'min(calc(50% + 576px / 2), calc(100vw - 500px - 30px))', // 30px, magic number to consider rotation
                        transform: 'rotate(-10deg)',
                        opacity: 0.12,
                        willChange: 'transform',
                    }}
                />
            </div>

            <Scripts />
        </body>
    </html>
)

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                title: "Keb's Keebs",
            },
        ],
        links: [
            {
                rel: 'stylesheet',
                href: css,
            }
        ]
    }),
    component: RootComponent,
    notFoundComponent: () => (<>Not Found</>)
})


