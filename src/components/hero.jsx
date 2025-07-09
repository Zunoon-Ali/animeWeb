import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "./Button.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 2; // ✅ Sirf current aur next video loader ke liye

  const nextVideoRef = useRef(null);
  const currentVideoRef = useRef(null);

  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;
  const upcomingVideoIndex = (currentIndex % 4) + 1;

  const handleVideoLoad = () => {
    if (loading) {
      setLoadedVideos((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (loadedVideos >= totalVideos) {
      setLoading(false);
    }
  }, [loadedVideos]);

  const handleMiniVideoClick = () => {
    setHasClicked(true);
  };

  useGSAP(() => {
    if (hasClicked) {
      const next = nextVideoRef.current;
      const current = currentVideoRef.current;

      if (next && current) {
        gsap.set(next, { visibility: "visible", scale: 0 });

        gsap.to(next, {
          transformOrigin: "center center",
          scale: 1,
          duration: 1,
          ease: "power1.inOut",
          onStart: () => next.play(),
          onComplete: () => {
            setCurrentIndex(upcomingVideoIndex);
            gsap.set(next, { visibility: "hidden" });
            ScrollTrigger.refresh();
            setHasClicked(false);
          },
        });

        gsap.to(current, {
          transformOrigin: "center center",
          scale: 0,
          duration: 1,
          ease: "power1.inOut",
        });
      }
    }
  }, [hasClicked, currentIndex]);

  useEffect(() => {
    const current = currentVideoRef.current;
    if (current) {
      gsap.set(current, { scale: 1 });
    }
  }, [currentIndex]);

  useGSAP(() => {
    if (!loading) {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.set("#video-frame", {
        clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
        borderRadius: "0% 0% 40% 10%",
      });

      gsap.from("#video-frame", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        borderRadius: "0% 0% 0% 0%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#video-frame",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      });

      ScrollTrigger.refresh();
    }
  }, [loading, currentIndex]);

  return (
    <div className="relative h-dvh w-screen overflow-hidden bg-blue-75">
      {loading && (
        <div className="flex items-center justify-center absolute z-[100] w-screen h-dvh bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      {/* ✅ Black heading behind */}
      <h1 className="special-font hero-heading absolute bottom-10 right-5 z-0 text-9xl text-black font-zentry">
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
          src={getVideoSrc(currentIndex)}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          onLoadedData={handleVideoLoad}
        />

        <h1 className="special-font hero-heading absolute bottom-10 right-5 z-[60] text-9xl text-blue-100 font-zentry pointer-events-none">
          G<b>A</b>MING
        </h1>
      </div>

      {/* ✅ Next Video */}
      <video
        id="next-video"
        ref={nextVideoRef}
        src={getVideoSrc(upcomingVideoIndex)}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-5"
        style={{ visibility: "hidden" }}
        onLoadedData={handleVideoLoad}
      />

      {/* ✅ Mini Video → onLoadedData HATA DIYA! */}
      <div className="absolute z-40 size-64 cursor-pointer rounded-lg overflow-hidden flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
      <div className="absolute top-0 left-0 size-full z-50 pointer-events-none">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className="special-font text-9xl text-blue-100 mb-2 font-zentry">
            REDIFI<b>N</b>E
          </h1>
          <p className="mb-5 max-w-64 font-robert-regular font-semibold text-lg text-blue-100">
            Enter the Metagame player <br /> Unleash the player economy
          </p>
        </div>
      </div>

      <div className="absolute top-72 left-5 sm:left-10 z-50 pointer-events-auto">
        <Button
          id="watch-trailer"
          title="Watch Trailer"
          leftIcon={<TiLocationArrow />}
          containerClass="!bg-yellow-300 flex items-center justify-center gap-2"
        />
      </div>
    </div>
  );
}
