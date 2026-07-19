import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'

const Index = (): ReactNode => (
    <>
        <header>
            <h1>Keb's Keebs</h1>
        </header>
        <h2>The Challenger Keyboard</h2>
        <p>Coming soon</p>
    </>
)

export const Route = createFileRoute('/')({
    component: Index,
})
