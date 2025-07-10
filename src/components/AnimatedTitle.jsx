import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedTitle({ title, containerClass }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "center center",
                    toggleActions: "play none none reverse",
                },
            });

            timeline.fromTo(
                containerRef.current.querySelectorAll(".animated-word"),
                {
                    opacity: 0,
                    transform: "perspective(500px) translate3d(100px,150px, -100px) rotateX(80deg) rotateY(-60deg)",
                },
                {
                    opacity: 1,
                    transform: "perspective(500px) translate3d(0,0,0) rotateX(0deg) rotateY(0deg)",
                    ease: "power2.out",
                    stagger: 0.05,
                    duration: 1.5,
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className={`animated-title ${containerClass}`} ref={containerRef}>
            {title.split('<br />').map((line, index) => (
                <div
                    key={index}
                    className="flex items-center justify-center flex-wrap gap-2 px-10 md:gap-3 text-4xl font-zentry"
                >
                    {line.split(' ').map((word, i) => (
                        <span
                            key={i}
                            className="animated-word inline-block"
                            dangerouslySetInnerHTML={{ __html: word }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
