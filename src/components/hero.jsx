import { useRef, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import Button from './button.jsx'

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideo, setLoadedVideo] = useState(false);

    const totalVideo = 4;

    const nextVideo = useRef(null);
    const prevVideo = useRef(null);

    const handleMiniVideoClick = () => {
        setHasClicked(true);
        setCurrentIndex((prev) => (prev % totalVideo) + 1);
    };

    const handleLoadedVideo = () => {
        setLoadedVideo(true);
    };

    const getVideoSrc = (index) => {
        const idx = index > totalVideo ? 1 : index;
        return `/videos/hero-${idx}.mp4`;
    };

    const upcomingVideoIndex = (currentIndex % totalVideo) + 1;

    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75 font-zentry'>
                <div className="mask-clip-path absolute z-50 size-64 cursor-pointer rounded-lg overflow-hidden flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div
                        onClick={handleMiniVideoClick}
                        className='origin-center scale-50 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-500 ease-in-out'
                    >
                        <video
                            src={getVideoSrc(upcomingVideoIndex)}
                            ref={nextVideo}
                            autoPlay
                            loop
                            id='upcomingVideo'
                            className='origin-center size-64 scale-150 object-cover object-center'
                            onLoadedData={handleLoadedVideo}
                        />
                    </div>
                </div>

                <video
                    src={getVideoSrc(currentIndex)}
                    ref={prevVideo}
                    autoPlay
                    loop
                    muted
                    className='absolute top-0 left-0 w-full h-full object-cover'
                />
            </div>
            <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100 text-4xl font-zentry letter-spacing'>G<b>A</b>MING</h1>
            <div className="absolute top-0 left-0 size-full z-40">
                <div className="mt-24 px-5 sm:px-10">
                    <h1 className='special-font hero-heading text-3xl font-zentry text-blue-100 letter-spacing-3'>redefi<b>n</b>e</h1>
                    <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>Enter the Metagame layer
                        <br /> unleash the player economy
                        <br /> and build your own gaming universe
                        <br />with the most powerful gaming platform ever created.</p>
                        {/* <Button  id="watch-trailer" title="Watch Trailer" leftIcon={<TiLocationArrow />} containerClass="bg-yellow-300 text-center gap-1" /> */}
                </div>
            </div>
        </div>
    );
}

export default Hero;
