import type { PropsWithChildren, ReactNode } from 'react'
import {
    Outlet,
    createRootRoute,
    HeadContent,
    Scripts,
    Link,
} from '@tanstack/react-router'

import css from './-index.css?url'

const RootDocument = ({ children }: PropsWithChildren): ReactNode => (
    <html className="dark h-full">
        <head>
            <HeadContent />
        </head>
        <body className="h-full ">
            <header className="bg-red-500 sticky top-0">
                <div className="flex justify-between items-center gap-2 p-2 bg-green-500 max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold">Keb's Keebs</h1>
                    <Link to='/docs/$'>Docs</Link>
                </div>
            </header>
            <main className="p-2 max-w-7xl mx-auto">
                {children}
            </main>
            <Scripts />
        </body>
    </html>
)

const RootComponent = (): ReactNode => (
    <RootDocument>
        <Outlet />
    </RootDocument>
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
    component: RootComponent
})


