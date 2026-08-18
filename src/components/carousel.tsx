"use client";

import { useState, useCallback, useEffect, isValidElement, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

interface CarouselProps {
    children: ReactNode;
}

function extractImages(node: ReactNode): Array<{ src: string; alt: string }> {
    const images: Array<{ src: string; alt: string }> = [];

    function walk(child: ReactNode) {
        if (!child || typeof child === "boolean") return;
        if (isValidElement(child)) {
            if (child.type === "img") {
                const props = child.props as Record<string, string>;
                images.push({ src: props.src, alt: props.alt });
            }
            const kids = (child.props as Record<string, ReactNode>).children;
            if (Array.isArray(kids)) {
                kids.forEach(walk);
            } else {
                walk(kids);
            }
        }
    }

    walk(node);
    return images;
}

function Carousel({ children }: CarouselProps) {
    const images = extractImages(children);
    const [current, setCurrent] = useState(0);

    const prev = useCallback(() => {
        setCurrent((i) => Math.max(0, i - 1));
    }, []);

    const next = useCallback(() => {
        setCurrent((i) => Math.min(images.length - 1, i + 1));
    }, [images.length]);

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "ArrowLeft" && current > 0) prev();
            if (e.key === "ArrowRight" && current < images.length - 1) next();
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [prev, next, current, images.length]);

    if (images.length === 0) return null;

    return (
        <div className="relative mb-4 w-full">
            <div className="overflow-hidden rounded-lg">
                <img
                    key={current}
                    src={images[current].src}
                    alt={images[current].alt}
                    className="w-full rounded-lg"
                />
            </div>

            {images.length > 1 && (
                <>
                    {current > 0 && (
                        <button
                            onClick={prev}
                            aria-label="Previous image"
                            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 backdrop-blur-sm transition-colors hover:bg-background"
                        >
                            <ChevronLeft className="size-5" />
                        </button>
                    )}
                    {current < images.length - 1 && (
                        <button
                            onClick={next}
                            aria-label="Next image"
                            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 backdrop-blur-sm transition-colors hover:bg-background"
                        >
                            <ChevronRight className="size-5" />
                        </button>
                    )}

                    <div className="mt-2 flex justify-center gap-1.5">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                aria-label={`Go to image ${i + 1}`}
                                className={cn(
                                    "size-2 rounded-full transition-colors",
                                    i === current
                                        ? "bg-primary"
                                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                )}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export { Carousel };
