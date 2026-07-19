import { createFileRoute } from "@tanstack/react-router"
import { allDocs } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";

export const Route = createFileRoute("/docs/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <ul>
            {allDocs.map((doc) => {
                console.log(doc.mdx)
                return (
                    <li key={doc._meta.path}>
                        <a href={`/docs/${doc._meta.path}`}>
                            <h3>{doc.title}</h3>

                        </a>
                        <MDXContent code={doc.mdx} components={{ h1: "h2" }} />
                    </li>
                );
            })}
        </ul>
    );
};
