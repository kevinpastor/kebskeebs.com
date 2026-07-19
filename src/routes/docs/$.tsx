import { createFileRoute, notFound } from "@tanstack/react-router"
import { MDXContent } from "@content-collections/mdx/react";
import type { ReactNode } from "react";
import { allDocs } from "content-collections";

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

    return (
        <MDXContent code={doc.mdx} components={{ h1: "h2" }} />
    );
};

export const Route = createFileRoute("/docs/$")({
    component: RouteComponent,
})

