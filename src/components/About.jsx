import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  

    useGSAP(() => {
        // UNCOMMENT THIS BLOCK:
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clips",
                start: "top center",
                end: "+=800 center", // Keep this, but might need adjustment later
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        });

        clipAnimation.fromTo(
            "#clips > div", // Your animation target
            {
                width: '40vw',      // Start width
                height: '60vh',     // Start height
                borderRadius: '20px' // Start border-radius
            },
            {
                width: '100vw',     // End width
                height: '100vh',    // End height
                borderRadius: 0,    // End border-radius
                ease: "none"
            }
        );

        gsap.fromTo(
            "#clips > div",
            {
                width: '40vw',
                height: '60vh',
                borderRadius: '20px'
            },
            {
                width: '100vw',
                height: '100vh',
                borderRadius: 0,
                ease: "none",
                duration: 2
            }
        );
    });

    
    return (
        <div id="about" className="min-h-screen w-screen ">
            <div className="relative mb-8 flex flex-col items-center gap-5">
                <h2 className="font-general text-sm uppercase md:test=[10px]">Welcome to Zentry</h2>
                <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared advent
                    <b>u</b>
                    re</div>
                <div className="about-subtext">
                    <p>The Game of Games begins-your life, now an epic MMORPG</p>
                    <p>Zentry unites every player from countless games and platforms</p>
                </div>
            </div>

            <div
                id="clips"
                className="h-screen w-screen flex items-center justify-center overflow-hidden"
            >
                <div
                    className="relative w-[40vw] h-[60vh] overflow-hidden"
                    style={{ borderRadius: "20px" }}
                >
                    <img
                        src="img/about.webp"
                        alt="Background"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                </div>
            </div>


        </div>
    );
}
export default About;