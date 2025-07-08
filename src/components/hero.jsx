import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "./Button.jsx";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideo, setLoadedVideo] = useState(0);
  const totalVideo = 4;

  const currentVideoRef = useRef(null);
  const nextVideoRef = useRef(null);

  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;
  const upcomingVideoIndex = (currentIndex % totalVideo) + 1;

  const handleMiniVideoClick = () => {
    if (!hasClicked) setHasClicked(true);

    const nextIndex = upcomingVideoIndex;

    if (nextVideoRef.current) {
      nextVideoRef.current.src = getVideoSrc(nextIndex);
      nextVideoRef.current.load();
    }

    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    if (currentVideoRef.current) {
      currentVideoRef.current.src = getVideoSrc(currentIndex);
      currentVideoRef.current.load();
    }
  }, [currentIndex]);

  useEffect(() => {
    if (loadedVideo >= 1) {
      setIsLoading(false);
    }
  }, [loadedVideo]);

  useGSAP(() => {
    if (hasClicked) {
      const next = nextVideoRef.current;
      const current = currentVideoRef.current;

      if (next && current) {
        gsap.set(next, { visibility: "visible", scale: 0 });

        const tl = gsap.timeline();
        tl.to(
          next,
          {
            transformOrigin: "center center",
            scale: 1,
            duration: 0.8,
            ease: "power1.inOut",
            onStart: () => next.play(),
          },
          0
        ).to(
          current,
          {
            transformOrigin: "center center",
            scale: 0,
            duration: 0.7,
            ease: "power1.inOut",
          },
          0.2
        );
      }
    }
  }, { dependencies: [hasClicked, currentIndex], revertOnUpdate: true });

  useGSAP(() => {
    if (!isLoading) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#video-frame",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      });

      tl.fromTo(
        "#video-frame",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          borderRadius: "0 0 0 0",
        },
        {
          clipPath: "polygon(0 0, 72% 10%, 92% 95%, 17% 96%)",
          borderRadius: "0 0 40% 10%",
          ease: "power1.inOut",
        }
      );

      // White heading fade out if needed
      tl.fromTo(
        "#white-heading",
        { opacity: 1, y: 0 },
        { opacity: 0, y: -50, ease: "power1.inOut" },
        "<"
      );
    }
  }, [isLoading]);

  return (
    <div className="relative h-dvh w-screen overflow-hidden bg-blue-75">
      {isLoading && (
        <div className="flex items-center justify-center absolute z-[100] w-screen h-dvh overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      {/* ✅ Black heading BEHIND video */}
      <h1
        id="black-heading"
        className="special-font hero-heading absolute bottom-10 right-5 z-0 text-7xl font-zentry text-black"
      >
        G<b>A</b>MING
      </h1>

      {/* ✅ Video Frame */}
      <div
        id="video-frame"
        className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden"
      >
        <video
          id="current-video"
          ref={currentVideoRef}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          onLoadedData={() => setLoadedVideo(loadedVideo + 1)}
        />

        {/* ✅ White heading INSIDE video-frame, so it clips */}
        <h1
          id="white-heading"
          className="special-font hero-heading absolute bottom-10 right-5 z-20 text-blue-100 text-7xl font-zentry"
        >
          G<b>A</b>MING
        </h1>
      </div>

      {/* ✅ Next Video */}
      <video
        id="next-video"
        ref={nextVideoRef}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-20"
        style={{ visibility: "hidden" }}
      />

      {/* ✅ Mini Video */}
      <div className="absolute z-30 size-64 cursor-pointer rounded-lg overflow-hidden flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <video
          src={getVideoSrc(upcomingVideoIndex)}
          autoPlay
          loop
          muted
          onClick={handleMiniVideoClick}
          className="origin-center size-64 object-cover object-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
        />
      </div>

      {/* ✅ Static Content */}
      <div className="absolute top-0 left-0 size-full z-40 pointer-events-none">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className="special-font text-5xl font-zentry text-blue-100 mb-2">
            redefi <b>n</b> e
          </h1>
          <p className="mb-5 max-w-64 font-robert-regular font-semibold text-lg text-blue-100 ">
            Enter the Metagame player <br /> Unleash the player economy
          </p>
        </div>
      </div>

      <div className="absolute top-52 left-5 sm:left-10 z-50 pointer-events-auto">
        <Button
          id="watch-trailer"
          title="Watch Trailer"
          leftIcon={<TiLocationArrow />}
          containerClass="!bg-yellow-300 text-center gap-1 flex items-center justify-center gap-2"
        />
      </div>
    </div>
  );
}

export default Hero;
