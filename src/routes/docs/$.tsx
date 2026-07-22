import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import { MDXContent } from "@content-collections/mdx/react";
import type { ReactNode } from "react";
import { allDocs } from "content-collections";

const sortedDocs = [...allDocs]
    .filter((d) => d.order !== undefined)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

const RouteComponent = (): ReactNode => {
    const { _splat } = Route.useParams()
    const doc = allDocs.find((doc) => (
        (_splat === undefined || _splat.length === 0)
            ? doc._meta.path === "index"
            : doc._meta.path === _splat
    ));
    if (doc === undefined) {
        throw notFound()
    }

    const currentIndex = sortedDocs.findIndex((d) => d._meta.path === doc._meta.path);
    const prev = currentIndex > 0 ? sortedDocs[currentIndex - 1] : null;
    const next = currentIndex < sortedDocs.length - 1 ? sortedDocs[currentIndex + 1] : null;

    return (
        <div className="flex flex-col gap-4 py-4">
            {prev && (
                <Link to="/docs/$" params={{ _splat: prev._meta.path }} className="text-sm w-1/2 border rounded px-4 py-2 backdrop-blur-md">
                    <span className="text-card-foreground/50">
                        Previous
                    </span>
                    <br />
                    <span className="text-card-foreground/80">
                        {prev.title}
                    </span>
                </Link>
            )}
            <MDXContent code={doc.mdx} components={{ h1: "h2" }} />
            {next && (
                <Link to="/docs/$" params={{ _splat: next._meta.path }} className="text-sm w-1/2 border rounded px-4 py-2 backdrop-blur-md ml-auto">
                    <span className="text-card-foreground/50">
                        Next
                    </span>
                    <br />
                    <span className="text-card-foreground/80">
                        {next.title}
                    </span>
                </Link>
            )}
        </div>
    );
};

export const Route = createFileRoute("/docs/$")({
    component: RouteComponent,
})

