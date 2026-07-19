import { createFileRoute } from '@tanstack/react-router'
import { allDocs } from "content-collections";

import { MDXContent } from "@content-collections/mdx/react";

export const Route = createFileRoute('/about')({
    component: About,
})

function About() {
    return <ul>
        {allDocs.map((doc) => {
            console.log(doc.mdx)
            return (
                <li key={doc._meta.path}>
                    <a href={`/posts/${doc._meta.path}`}>
                        <h3>{doc.title}</h3>

                        <MDXContent code={doc.mdx} components={{ h1: "h2" }} />
                    </a>
                </li>
            );
        })}
    </ul>
}