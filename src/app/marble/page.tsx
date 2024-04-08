import Image from "next/image";
import MarbleImage from "./marble.svg";

export default function Page() {
  return (
    <div>
      <h1>Marble</h1>
      <Image src={MarbleImage} alt="Marble" />
      <div className="area bg-white">
        <div className="dairiseki">
          <svg viewBox="0 0 300 200">
            <filter
              id="feTurbulence"
              filterUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="300"
              height="200"
            >
              <feTurbulence
                type="turbulence"
                baseFrequency="0.03"
                numOctaves="3"
                seed="50"
                stitchTiles="noStitch"
              />
            </filter>
            <circle
              filter="url(#feTurbulence)"
              cx="100"
              cy="100"
              r="100"
              fill="#000"
              stroke="#000"
              strokeWidth="50"
            ></circle>
          </svg>
        </div>
      </div>

      <div className="flex gap-3 p-10 justify-center">
        <div className="p-6 bg-black border">
          <svg
            style={{ backgroundColor: "hsl(0, 0%, 0%)" }}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="w-full aspect-square opacity-90"
          >
            <defs>
              <filter id="filter_texture">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.028"
                  stitchTiles="stitch"
                  numOctaves="7"
                  result="noise"
                ></feTurbulence>
                <feDiffuseLighting
                  in="noise"
                  lighting-color="hsl(0, 0%, 25%)"
                  surfaceScale="3"
                >
                  <feDistantLight
                    id="distLight"
                    azimuth="271"
                    elevation="60"
                  ></feDistantLight>
                </feDiffuseLighting>
              </filter>
            </defs>

            <rect
              opacity="0.5"
              filter="url(#filter_texture)"
              width="100%"
              height="100%"
            ></rect>
          </svg>
        </div>
        <div className="p-6 bg-white">
          <svg
            style={{ backgroundColor: "hsl(0, 0%, 100%)" }}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="w-full aspect-square opacity-90"
          >
            <defs>
              <filter id="filter_texture2">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.028"
                  stitchTiles="stitch"
                  numOctaves="7"
                  result="noise"
                ></feTurbulence>
                <feDiffuseLighting
                  in="noise"
                  lighting-color="hsl(250, 58%, 100%)"
                  surfaceScale="3"
                >
                  <feDistantLight
                    id="distLight"
                    azimuth="271"
                    elevation="60"
                  ></feDistantLight>
                </feDiffuseLighting>
              </filter>
            </defs>

            <rect
              opacity="0.5"
              filter="url(#filter_texture2)"
              width="100%"
              height="100%"
            ></rect>
          </svg>
        </div>
      </div>

      <div className="">
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              id="marbleGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "rgb(255,255,255)", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "rgb(200,200,200)", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgb(150,150,150)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#marbleGradient)" />
          <path
            d="M20,20 Q40,50 60,20 T100,20"
            stroke="black"
            stroke-width="2"
            fill="none"
          />
          <path
            d="M20,60 Q50,80 80,60 T120,60"
            stroke="black"
            stroke-width="2"
            fill="none"
          />
          <path
            d="M20,100 Q40,130 60,100 T100,100"
            stroke="black"
            stroke-width="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
