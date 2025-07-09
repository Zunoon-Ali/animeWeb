import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function About() {
    const container = useRef();
    const imageWrapper = useRef();

    useGSAP(() => {
        // Clear any conflicting transforms
        gsap.set(imageWrapper.current, { clearProps: "all" });

        // Set initial styles via GSAP (not CSS)
        gsap.set(imageWrapper.current, {
            width: "40vw",
            height: "50vh",
            borderRadius: "1rem"
        });

        // Create the animation
        gsap.to(imageWrapper.current, {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                start: "top top", // When top of trigger hits top of viewport
                end: "+=100%", // When bottom of trigger hits bottom of viewport
                scrub: 1, // Smooth scrubbing
                pin: true, // Pin the trigger element
                markers: true, // For debugging
                anticipatePin: 1
            }
        });

    }, { scope: container });

    return (
        <div id="about" className="min-h-screen w-screen">
            {/* LOWER: pin section */}
            <div
                ref={container}
                className="min-h-[200vh] w-full flex flex-col items-center justify-center gap-5 bg-transparent"
            >
                {/* Content */}
                <div className="relative mb-8 flex flex-col items-center gap-5 z-10">
                    <p>Welcome to Zentry</p>
                    <h1>Discover the world's adventure</h1>
                    <p>Your extra text here...</p>
                </div>

                {/* Image */}
                <div
                    ref={imageWrapper}
                    className="relative overflow-hidden bg-red-500" // Added bg for visibility
                >
                    <img
                        src="/img/about.webp"
                        alt="Background"
                        // className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}