import { TiLocationArrow } from "react-icons/ti";

const BentoCard = ({ src, title, description }) => {
    return (
        <div className="relative size-full">
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
                    )}
                </div>
            </div>
        </div>
    );
};


function Feature() {
    return (

        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                {/* Heading */}

                <div className="pt-32 pb-10 text-center">
                    <h2 className="font-circular-web text-lg text-blue-50 mb-5">
                        Into the Metagame Layer
                    </h2>
                    <p className="max-w-md mx-auto font-circular-web text-lg text-blue-50 opacity-50 tracking-wide">
                        Immerse yourself in a rich and ever-expanding universe where a vibrant array
                        of products converge into an interconnected overlay experience on your world.
                    </p>
                </div>

                {/* Full-width Feature 1 (Radiant) - This was in your original code, putting it back here */}
                {/* You had 'border-hsla' here previously, make sure that CSS class is defined if you need it. */}
                <div className="relative mb-10 w-full overflow-hidden rounded-md">
                    <BentoCard
                        src="/videos/feature-1.mp4"
                        title={<>radi<b>n</b>t</>}
                        description="The Radiant Metaverse is a vibrant and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world"
                    />
                </div>

                {/* Main Grid Layout for Features */}
                {/* For larger screens (md and up): 2 columns, first row spans 2 rows for the large card */}
                {/* For small screens: single column layout (default) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                    {/* Zigma - Large Card (md:row-span-2) */}
                    <div className="md:row-span-2"> {/* This div allows the card to span two rows on medium screens and up */}
                        <BentoCard
                            src="/videos/feature-2.mp4" // Assuming this is Zigma's video based on previous context
                            title="Zigma"
                            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
                        />
                    </div>

                    {/* Nexus - Top Right Card (on md screens) */}
                    <div>
                        <BentoCard
                            src="/videos/feature-3.mp4" // Assuming this is Nexus's video
                            title={<>n<b>e</b>xus</>}
                            description="A gamified social hub, adding a new dimension of play to social interactions for Web3 communities."
                        />
                    </div>

                    {/* Azul (formerly Element/Feature 4) - Bottom Right Card (on md screens) */}
                    <div>
                        <BentoCard
                            src="/videos/feature-4.mp4" // Assuming this is Azul/Element video
                            title="Azul" // Changed to Azul based on image_7ccec1.png
                            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive." // New description based on image
                        />
                    </div>

                </div>

                {/* Bottom Extras (More Coming Soon & Feature 5 Video) */}
                {/* This section remains as a 2-column grid on md, single on small */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-10">
                    {/* More Coming Soon */}
                    <div className="bg-violet-300 flex flex-col justify-between p-5 text-black rounded-md"> {/* Added rounded-md for consistency */}
                        <h1 className="bento-title max-w-64 special-font tracking-wide">More Coming Soon</h1>
                        <TiLocationArrow className="self-end scale-[5] mt-5" />
                    </div>

                    {/* Feature 5 Video */}
                    <div className="overflow-hidden rounded-md">
                        <video
                            src="/videos/feature-5.mp4"
                            loop
                            muted
                            autoPlay
                            className="w-full h-full object-cover object-center"
                        ></video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature
