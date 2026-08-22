import type { ReactNode } from 'react'
import {
    Outlet,
    createRootRoute,
    HeadContent,
    Scripts,
    Link,
} from '@tanstack/react-router'

import css from './-index.css?url'
import { PixelBlast } from '../components/PixelBlast'

const RootComponent = (): ReactNode => (
    <html className="dark h-full">
        <head>
            <HeadContent />
        </head>
        <body className="relative min-h-screen bg-background flex flex-col">
            <div
                className="overflow-hidden"
                style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: "fixed",
                    zIndex: -20,
                }}
            >
                {/* <div
                    className="parallax-layer-1"
                    style={{
                        top: 64,
                        left: 64,
                        right: 0,
                        bottom: 0,
                        height: "200%",
                        position: "absolute",
                        backgroundSize: "256px 256px",
                        backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    }}
                /> */}
                <PixelBlast
                    className="parallax-layer-1"
                    style={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: "200%",
                        position: "absolute",
                        opacity: 0.1,
                    }}
                    variant="square"
                    pixelSize={2}
                    color="#FFF"
                    patternScale={2}
                    patternDensity={1}
                    pixelSizeJitter={0}
                    enableRipples={false}
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid={false}
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={1}
                    edgeFade={0}
                    transparent
                />
            </div>
            <div
                className="overflow-hidden"
                style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: "fixed",
                    zIndex: -20,
                }}
            >
                {/* <div
                    className="parallax-layer-2"
                    style={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: "200%",
                        position: "absolute",
                        backgroundSize: "128px 128px",
                        backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
                    }}
                /> */}


                <div
                    className="parallax-layer-2"
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
                            opacity: 0.2,
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
                            opacity: 0.2,
                            willChange: 'transform',
                        }}
                    />
                </div>
            </div>

            <nav className="sticky top-0 z-10 p-6 md:p-8 flex justify-between backdrop-blur-md bg-background/50">
                <Link to="/" className="text-sm font-medium tracking-widest text-muted-foreground/50 md:text-base">
                    Keb's Keebs
                </Link>
                <Link to="/docs/$" params={{ _splat: '' }} className="text-sm font-medium tracking-widest text-muted-foreground/50 md:text-base">
                    Docs
                </Link>
            </nav>

            <main className="max-w-xl w-full mx-auto grow flex flex-col px-4">
                <Outlet />
            </main>

            {/* <div className="fixed inset-0 -z-20 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] parallax-layer-slow" />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-100 w-175 rounded-full bg-primary/15 blur-[150px] pointer-events-none" /> */}

            {/* <div
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
            </div> */}

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


