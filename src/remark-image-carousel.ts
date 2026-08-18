import { visit } from "unist-util-visit";
import type { Node, Parent } from "unist";

interface ImageNode extends Node {
    type: "image";
    url: string;
    alt: string;
}

interface TextNode extends Node {
    type: "text";
    value: string;
}

interface ParagraphNode extends Node {
    type: "paragraph";
    children: Array<ImageNode | TextNode>;
}

function remarkImageCarousel() {
    return (tree: Node & { children: unknown[] }) => {
        visit(tree, "paragraph", (node: ParagraphNode, index: number | undefined, parent: Parent | undefined) => {
            if (parent === undefined || index === undefined) return;

            const images = node.children.filter(
                (child) => child.type === "image"
            );
            if (images.length < 2) return;

            const nonImageContent = node.children.filter(
                (child) =>
                    child.type !== "image" &&
                    !(child.type === "text" && child.value.trim() === "")
            );
            if (nonImageContent.length > 0) return;

            parent.children[index] = {
                type: "mdxJsxFlowElement",
                name: "Carousel",
                attributes: [],
                children: [
                    {
                        type: "paragraph",
                        children: images,
                    },
                ],
            } as unknown as Node;
        });
    };
}

export default remarkImageCarousel;
