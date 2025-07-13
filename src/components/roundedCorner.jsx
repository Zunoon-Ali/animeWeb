import React from 'react'

function roundedCorner() {
    return (
        <div className="story-img-container">
            <div className="story-img-mask">
                <div className="story-img-content">
                    <img
                        ref={frameRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseLeave}
                        onMouseEnter={handleMouseLeave}
                        src="/img/entrance.webp"
                        alt="entrance.webp"
                        className="object-contain"
                    />
                </div>
            </div>

            {/* for the rounded corner */}
            <svg
                className="invisible absolute size-0"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="flt_tag">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="8"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="flt_tag"
                        />
                        <feComposite
                            in="SourceGraphic"
                            in2="flt_tag"
                            operator="atop"
                        />
                    </filter>
                </defs>
            </svg>
        </div>

    )
}

export default roundedCorner
