import Image from "next/image";

export default function Home() {
  return (
    <main className="h-dvh overflow-y-scroll">
      <div className="h-dvh w-dvw overflow-hidden relative mb-10">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute h-dvh w-dvw"
        >
          <filter id="displacementFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1"
              numOctaves="300"
              result="fractalNoise"
            >
              <animate
                attributeName="baseFrequency"
                from="3"
                to="2"
                dur="20s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in2="fractalNoise"
              in="SourceGraphic"
              scale="150"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <mask id="mask">
            <circle cx="100" cy="100" r="100" style={{ fill: "#FFF" }} />
          </mask>

          <circle
            cx="-50"
            cy="240"
            r="200"
            style={{ fill: "#333333", filter: "url(#displacementFilter)" }}
            mask="url(#mask)"
          />
        </svg>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute rotate-180 h-dvh w-dvw"
        >
          <filter id="displacementFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1"
              numOctaves="300"
              result="fractalNoise"
            >
              <animate
                attributeName="baseFrequency"
                from="2"
                to="3"
                dur="20s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in2="fractalNoise"
              in="SourceGraphic"
              scale="150"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <mask id="mask">
            <circle cx="100" cy="100" r="100" style={{ fill: "#FFF" }} />
          </mask>

          <circle
            cx="-50"
            cy="300"
            r="200"
            style={{ fill: "#333333", filter: "url(#displacementFilter)" }}
            mask="url(#mask)"
          />
        </svg>
      </div>
      <div className="border border-red-300 h-dvh w-dvw">
        <svg
          id="eALyGup1cVD1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1280 720"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          style={{ backgroundColor: "#000" }}
        >
          <style>
            {`#eALyGup1cVD2_to {animation: eALyGup1cVD2_to__to 8000ms linear infinite normal forwards}@keyframes eALyGup1cVD2_to__to { 0% {transform: translate(640px,360px)} 25% {transform: translate(370.961898px,360px)} 50% {transform: translate(640px,360px)} 75% {transform: translate(921.388761px,360px)} 100% {transform: translate(640px,360px)}}`}
          </style>
          <defs>
            <linearGradient
              id="eALyGup1cVD2-fill"
              x1="0"
              y1="0.5"
              x2="1"
              y2="0.5"
              spreadMethod="pad"
              gradientUnits="objectBoundingBox"
              gradientTransform="translate(0 0)"
            >
              <stop id="eALyGup1cVD2-fill-0" offset="0%" stopColor="#FFFFFF" />
              <stop
                id="eALyGup1cVD2-fill-1"
                offset="100%"
                stopColor="#a0ff61"
              />
            </linearGradient>
          </defs>
          <g id="eALyGup1cVD2_to" transform="translate(640,360)">
            <rect
              width="2492.099859"
              height="2223.719874"
              rx="0"
              ry="0"
              transform="scale(0.820545,1) translate(-1246.049942,-1111.859937)"
              fill="url(#eALyGup1cVD2-fill)"
              strokeWidth="0"
            />
          </g>
        </svg>
      </div>
    </main>
  );
}
