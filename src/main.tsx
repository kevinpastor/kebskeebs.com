import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const rootElement = document.getElementById('root')
if (rootElement === null) {
    throw new Error("`root` element not found.")
}

if (rootElement.innerHTML.length > 0) {
    throw new Error("`root` element is not empty.")
}

const root = createRoot(rootElement)
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
