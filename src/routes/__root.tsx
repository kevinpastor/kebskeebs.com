import type { PropsWithChildren, ReactNode } from 'react'
import {
    Outlet,
    createRootRoute,
    HeadContent,
    Scripts,
} from '@tanstack/react-router'

import css from './-index.css?url'

const RootDocument = ({ children }: PropsWithChildren): ReactNode => (
    <html className="dark h-full">
        <head>
            <HeadContent />
        </head>
        <body className="h-full">
            {children}
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
    component: RootComponent,
    notFoundComponent: () => (<>Not Found</>)
})


