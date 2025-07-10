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
        <section className='bg-black pb-52'>
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className='font-circular-web text-lg text-blue-50'>Into the Metagame Layer</p>
                </div>
                <p className='max-w-md font-circular-web mx-auto text-lg text-blue-50 opacity-50'> Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world. </p>
            </div>
            <div className='border-hsla relative mb-7 w-full overflow-visible rounded-md'>
                <BentoCard src="/videos/feature-1.mp4" title={<>radi<b>n</b>t</>} description="..." />

                <div className="grid min-h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                    <div className="bento-tilt-1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard src="/videos/feature-2.mp4" title="zigma" description="..." />
                    </div>
                    <div className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard src="/videos/feature-3.mp4" title={<>n<b>e</b>xus</>} description="..." />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Feature
