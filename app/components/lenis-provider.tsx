"use client";

import { ReactLenis } from "lenis/react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis
            root
            options={{
                anchors: true,
                lerp: 0.055,
                duration: 1.8,
                wheelMultiplier: 0.7,
            }}
        >
            {children}
        </ReactLenis>
    );
}