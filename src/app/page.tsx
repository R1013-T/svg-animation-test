import Image from "next/image";

export const WasiBask = () => {
  return (
    <svg
      width="110%"
      height="110%"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute z-10 opacity-60"
    >
      {/* フィルター定義 */}
      <defs>
        <filter id="washiTexture" x="0" y="0" width="100%" height="100%">
          {/* ノイズ生成 */}
          <feTurbulence
            id="turbulence"
            type="fractalNoise"
            baseFrequency="0.7"
            numOctaves="3"
            result="noise"
          />
          {/* 照明効果を使用してテクスチャに深みを追加 */}
          <feDiffuseLighting
            in="noise"
            lightingColor="white"
            surfaceScale="4"
            result="diffLight"
          >
            <feDistantLight azimuth="45" elevation="30" />
          </feDiffuseLighting>
          {/* 元の画像と照明効果を合成 */}
          <feBlend in="SourceGraphic" in2="diffLight" mode="multiply" />
        </filter>
      </defs>

      {/* 和紙質感を適用した図形 */}
      <rect
        width="100%"
        height="100%"
        fill="#212121"
        filter="url(#washiTexture)"
      />
    </svg>
  );
};

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
      <div className="border border-red-300 h-dvh w-dvw">
        <svg
          id="eouXs3khZAc1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1920 1080"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          style={{ backgroundColor: "#fff" }}
        >
          <style>
            {`#eouXs3khZAc2_to {animation: eouXs3khZAc2_to__to 10000ms linear infinite normal forwards}@keyframes eouXs3khZAc2_to__to { 0% {transform: translate(3430.206336px,1893.095176px)} 100% {transform: translate(-534.898226px,1150.927151px)}} #eouXs3khZAc3_to {animation: eouXs3khZAc3_to__to 10000ms linear infinite normal forwards}@keyframes eouXs3khZAc3_to__to { 0% {transform: translate(3187.710859px,-497.48389px)} 100% {transform: translate(35.149087px,2154.090506px)}} #eouXs3khZAc6_to {animation: eouXs3khZAc6_to__to 10000ms linear infinite normal forwards}@keyframes eouXs3khZAc6_to__to { 0% {transform: translate(4048.495902px,540px)} 100% {transform: translate(164.877653px,1957.73207px)}}`}
          </style>
          <defs>
            <linearGradient
              id="eouXs3khZAc2-fill"
              x1="0.5"
              y1="0"
              x2="0.5"
              y2="1"
              spreadMethod="pad"
              gradientUnits="objectBoundingBox"
              gradientTransform="translate(0 0)"
            >
              <stop id="eouXs3khZAc2-fill-0" offset="0%" stopColor="#00a7da" />
              <stop
                id="eouXs3khZAc2-fill-1"
                offset="100%"
                stopColor="#6722fb"
              />
            </linearGradient>
            <linearGradient
              id="eouXs3khZAc3-fill"
              x1="0.5"
              y1="0"
              x2="0.5"
              y2="1"
              spreadMethod="pad"
              gradientUnits="objectBoundingBox"
              gradientTransform="translate(0 0)"
            >
              <stop id="eouXs3khZAc3-fill-0" offset="0%" stopColor="#e334b2" />
              <stop
                id="eouXs3khZAc3-fill-1"
                offset="100%"
                stopColor="#fde822"
              />
            </linearGradient>
            <linearGradient
              id="eouXs3khZAc6-fill"
              x1="0.5"
              y1="0"
              x2="0.5"
              y2="1"
              spreadMethod="pad"
              gradientUnits="objectBoundingBox"
              gradientTransform="translate(0 0)"
            >
              <stop id="eouXs3khZAc6-fill-0" offset="0%" stopColor="#2c16d7" />
              <stop
                id="eouXs3khZAc6-fill-1"
                offset="100%"
                stopColor="#fd22b5"
              />
            </linearGradient>
          </defs>
          <g
            id="eouXs3khZAc2_to"
            transform="translate(3430.206336,1893.095176)"
          >
            <path
              d="M-1844.96718,2333.38432c0,0,299.864719-315.634609,494.316719-315.634609s209.761981,215.321709,440.063851,215.321739s202.93888-229.29209,407.9633-229.29209s151.34122,175.66141,375.06304,175.66144s241.72338-125.84549,407.09401-125.84549s191.69084,179.47614,395.67249,179.47614s223.72181-179.47614,394.8032-179.47614s177.66144,179.47614,414.54335,179.47614s210.5617-179.47614,434.28352-179.47614s183.344255,279.78901,351.64879,279.78901s0,1369.7139,0,1369.7139h-4115.45225l-.00002-1369.7139Zm4115.45238,0c216.406012,0,218.121615-273.46356,412.573615-273.46356s215.144435,214.571748,445.446305,214.571778s279.29951-270.713178,484.32393-270.713178s151.34122,175.66141,375.06304,175.66144s241.72338-125.84549,407.09401-125.84549s191.69084,179.47614,395.67249,179.47614s223.72181-179.47614,394.8032-179.47614s177.66144,179.47614,414.54335,179.47614s210.5617-179.47614,434.28352-179.47614s351.64879,279.78901,351.64879,279.78901v1369.7139h-4115.45225c0,0-216.406013-1369.7139,0-1369.7139Z"
              transform="rotate(10) translate(-2270.485135,-2853.43879)"
              fill="url(#eouXs3khZAc2-fill)"
              strokeWidth="0"
            />
          </g>
          <g id="eouXs3khZAc3_to" transform="translate(3187.710859,-497.48389)">
            <path
              d="M-1844.96718,2333.38432c0,0,242.4775-279.78901,436.9295-279.78901s267.1492,179.47611,497.45107,179.47614s202.93888-229.29209,407.9633-229.29209s151.34122,175.66141,375.06304,175.66144s241.72338-125.84549,407.09401-125.84549s191.69084,179.47614,395.67249,179.47614s223.72181-179.47614,394.8032-179.47614s177.66144,179.47614,414.54335,179.47614s210.5617-179.47614,434.28352-179.47614s183.344255,279.78901,351.64879,279.78901s0,1369.7139,0,1369.7139h-4115.45225l-.00002-1369.7139Zm4115.45238,0c216.406012,0,242.47748-279.78901,436.92948-279.78901s267.1492,179.47611,497.45107,179.47614s202.93888-229.29209,407.9633-229.29209s151.34122,175.66141,375.06304,175.66144s241.72338-125.84549,407.09401-125.84549s191.69084,179.47614,395.67249,179.47614s223.72181-179.47614,394.8032-179.47614s177.66144,179.47614,414.54335,179.47614s210.5617-179.47614,434.28352-179.47614s351.64879,279.78901,351.64879,279.78901v1369.7139h-4115.45225c0,0-216.406013-1369.7139,0-1369.7139Z"
              transform="rotate(-40) translate(-2270.485135,-2853.43879)"
              fill="url(#eouXs3khZAc3-fill)"
              strokeWidth="0"
            />
          </g>
          <g id="eouXs3khZAc6_to" transform="translate(4048.495902,540)">
            <path
              d="M-1844.96718,2333.38432c0,0,242.4775-279.78901,436.9295-279.78901s267.1492,179.47611,497.45107,179.47614s202.93888-229.29209,407.9633-229.29209s151.34122,175.66141,375.06304,175.66144s241.72338-125.84549,407.09401-125.84549s191.69084,179.47614,395.67249,179.47614s223.72181-179.47614,394.8032-179.47614s177.66144,179.47614,414.54335,179.47614s210.5617-179.47614,434.28352-179.47614s183.344255,279.78901,351.64879,279.78901s0,1369.7139,0,1369.7139h-4115.45225l-.00002-1369.7139Zm4115.45238,0c216.406012,0,242.47748-279.78901,436.92948-279.78901s268.985108,176.523654,499.286978,176.523684s201.102972-226.339634,406.127392-226.339634s151.34122,175.66141,375.06304,175.66144s241.72338-125.84549,407.09401-125.84549s191.69084,179.47614,395.67249,179.47614s223.72181-179.47614,394.8032-179.47614s177.66144,179.47614,414.54335,179.47614s210.5617-179.47614,434.28352-179.47614s351.64879,279.78901,351.64879,279.78901v1369.7139h-4115.45225c0,0-216.406013-1369.7139,0-1369.7139Z"
              transform="rotate(-20) translate(-2270.485135,-2853.43879)"
              fill="url(#eouXs3khZAc6-fill)"
              strokeWidth="0"
            />
          </g>
        </svg>
      </div>
      <div className="border border-red-300 h-dvh w-dvw">
        <svg
          id="ecor5OVMQqP1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1920 1080"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          style={{ backgroundColor: "#000" }}
        >
          <defs>
            <filter
              id="ecor5OVMQqP2-filter"
              x="-150%"
              width="400%"
              y="-150%"
              height="400%"
            >
              <feGaussianBlur
                id="ecor5OVMQqP2-filter-blur-0"
                stdDeviation="100,100"
                result="result"
              />
            </filter>
            <radialGradient
              id="ecor5OVMQqP2-fill"
              cx="0"
              cy="0"
              r="0.5"
              spreadMethod="pad"
              gradientUnits="objectBoundingBox"
              gradientTransform="translate(0.5 0.5)"
            >
              <stop id="ecor5OVMQqP2-fill-0" offset="0%" stopColor="#ff3895" />
              <stop
                id="ecor5OVMQqP2-fill-1"
                offset="100%"
                stopColor="rgba(255, 56, 149, 0)"
              />
            </radialGradient>
            <filter
              id="ecor5OVMQqP3-filter"
              x="-150%"
              width="400%"
              y="-150%"
              height="400%"
            >
              <feGaussianBlur
                id="ecor5OVMQqP3-filter-blur-0"
                stdDeviation="100,100"
                result="result"
              />
            </filter>
            <radialGradient
              id="ecor5OVMQqP3-fill"
              cx="0"
              cy="0"
              r="0.5"
              spreadMethod="pad"
              gradientUnits="objectBoundingBox"
              gradientTransform="translate(0.5 0.5)"
            >
              <stop id="ecor5OVMQqP3-fill-0" offset="0%" stopColor="#30d4ff" />
              <stop
                id="ecor5OVMQqP3-fill-1"
                offset="100%"
                stopColor="rgba(48, 212, 255, 0)"
              />
            </radialGradient>
          </defs>
          <g id="ecor5OVMQqP2_to" transform="translate(325.98891,650.226777)">
            <ellipse
              rx="582.638548"
              ry="444.923982"
              transform="scale(1.778319,1.802368) translate(0.000001,-0.000001)"
              filter="url(#ecor5OVMQqP2-filter)"
              fill="url(#ecor5OVMQqP2-fill)"
              strokeWidth="0"
            />
          </g>
          <g id="ecor5OVMQqP3_to" transform="translate(1589.549996,405.744194)">
            <path
              d="M-582.638548,123.52503c0-313.94572,350.706302-568.449012,783.32445-568.449012s783.32445,254.503292,783.32445,568.449012-350.706301,568.449012-783.32445,568.449012-783.32445-254.503292-783.32445-568.449012Z"
              transform="scale(1.322715,1.410707) translate(-200.685902,-123.52503)"
              filter="url(#ecor5OVMQqP3-filter)"
              fill="url(#ecor5OVMQqP3-fill)"
              strokeWidth="0"
            />
          </g>
        </svg>
      </div>
      <div className="border border-blue-300 h-dvh w-dvw flex justify-center items-center bg-white">
        <div>
          {/* <svg width="300" height="300">
            <defs>
            <filter id="noiseFilter">
            <feTurbulence
            type="fractalNoise"
            baseFrequency="1.11111"
            numOctaves="3"
            result="noise"
            />
            <feComposite in="SourceGraphic" in2="noise" operator="in" />
            </filter>
            </defs>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg> */}
        </div>

        <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
          {/* フィルター定義 */}
          <defs>
            <filter id="concreteTexture">
              {/* グレースケール変換 */}
              <feColorMatrix type="saturate" values="0" />
              {/* ノイズ追加 */}
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.5"
                numOctaves="3"
                result="noise"
              />
              {/* ノイズのコントラスト調整 */}
              <feComponentTransfer>
                <feFuncA type="discrete" tableValues="1 5" />
              </feComponentTransfer>
              {/* 元の図形とノイズの合成 */}
              <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
            </filter>
          </defs>

          {/* コンクリート質感を適用した図形 */}
          <rect
            width="500"
            height="500"
            fill="gray"
            filter="url(#concreteTexture)"
          />
        </svg>
      </div>
      <div className="border border-blue-300 h-dvh w-dvw flex justify-center items-center bg-white">
        <svg
          width="500"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
          opacity={0.9}
        >
          {/* フィルター定義 */}
          <defs>
            <filter id="washiTexture" x="0" y="0" width="100%" height="100%">
              {/* ノイズ生成 */}
              <feTurbulence
                id="turbulence"
                type="fractalNoise"
                baseFrequency="0.7"
                numOctaves="1"
                result="noise"
              />
              {/* 照明効果を使用してテクスチャに深みを追加 */}
              <feDiffuseLighting
                in="noise"
                lightingColor="white"
                surfaceScale="5"
                result="diffLight"
              >
                <feDistantLight azimuth="45" elevation="20" />
              </feDiffuseLighting>
              {/* 元の画像と照明効果を合成 */}
              <feBlend in="SourceGraphic" in2="diffLight" mode="multiply" />
            </filter>
          </defs>

          {/* 和紙質感を適用した図形 */}
          <rect
            width="500"
            height="500"
            fill="#212121"
            filter="url(#washiTexture)"
          />
        </svg>
        {/* 
        <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="washiTexture" x="0" y="0" width="100%" height="100%">
              <feTurbulence
                id="turbulence"
                type="fractalNoise"
                baseFrequency="0.5"
                numOctaves="1"
                result="noise"
              />
              <feDiffuseLighting
                in="noise"
                lightingColor="white"
                surfaceScale="5"
                result="diffLight"
              >
                <feDistantLight azimuth="45" elevation="20" />
              </feDiffuseLighting>
              <feBlend in="SourceGraphic" in2="diffLight" mode="multiply" />
            </filter>

            <radialGradient id="fadeToTransparent" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stop-color="white" stop-opacity="1" />
              <stop offset="100%" stop-color="white" stop-opacity="0" />
            </radialGradient>

            <mask id="gradMask">
              <rect width="100%" height="100%" fill="url(#fadeToTransparent)" />
            </mask>
          </defs>

          <rect
            width="500"
            height="500"
            fill="white"
            filter="url(#washiTexture)"
            mask="url(#gradMask)"
          />
        </svg> */}
      </div>
      <div className="border border-green-300 h-dvh w-dvw flex justify-center items-center overflow-hidden aspect-video">
        <div className="grid grid-cols-7 grid-rows-6 gap-2 w-full h-full p-10">
          <div className="col-start-1 col-end-4 row-start-1 row-end-3 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-4 col-end-6 row-start-1 row-end-3 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-1 col-end-3 row-start-3 row-end-7 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-3 col-end-6 row-start-3 row-end-5 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-5 col-end-7 row-start-5 row-end-7 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-3 col-end-4 row-start-5 row-end-6 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-4 col-end-5 row-start-5 row-end-6 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-3 col-end-4 row-start-6 row-end-7 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-4 col-end-5 row-start-6 row-end-7 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-6 col-end-8 row-start-1 row-end-2 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-7 col-end-8 row-start-5 row-end-7 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-6 col-end-8 row-start-2 row-end-5 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
        </div>
      </div>
      <div className="border border-green-300 h-dvh w-dvw overflow-hidden bg-gray-300">
        <div className="grid grid-cols-7 grid-rows-6 gap-2 w-full h-full p-10">
          <div className="col-start-1 col-end-4 row-start-1 row-end-3 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-4 col-end-6 row-start-1 row-end-3 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-1 col-end-3 row-start-3 row-end-7 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-3 col-end-6 row-start-3 row-end-5 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-5 col-end-7 row-start-5 row-end-7 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-3 col-end-4 row-start-5 row-end-6 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-4 col-end-5 row-start-5 row-end-6 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-3 col-end-4 row-start-6 row-end-7 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-4 col-end-5 row-start-6 row-end-7 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-6 col-end-8 row-start-1 row-end-2 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-7 col-end-8 row-start-5 row-end-7 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-6 col-end-8 row-start-2 row-end-5 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
        </div>
      </div>

      <div className="border border-green-300 h-dvh w-dvw overflow-hidden">
        <div className="h-full grid grid-cols-7 grid-rows-[repeat(6,_1fr)_60px] gap-2 p-10">
          <div className="col-start-1 col-end-4 row-start-1 row-end-3 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-4 col-end-6 row-start-1 row-end-3 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-1 col-end-3 row-start-3 row-end-7 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-3 col-end-6 row-start-3 row-end-5 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-5 col-end-7 row-start-5 row-end-7 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-3 col-end-4 row-start-5 row-end-6 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-4 col-end-5 row-start-5 row-end-6 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-3 col-end-4 row-start-6 row-end-7 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-4 col-end-5 row-start-6 row-end-7 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-6 col-end-8 row-start-1 row-end-2 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-7 col-end-8 row-start-5 row-end-7 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-6 col-end-8 row-start-2 row-end-5 border border-[#212121] rounded-2xl relative overflow-hidden">
            <WasiBask />
          </div>
          <div className="col-start-1 col-end-8 row-start-7 row-end-8 border border-red-300 rounded-2xl relative overflow-hidden"></div>
        </div>
      </div>

      <div className="border border-green-300 h-dvh w-dvw overflow-hidden">
        <div className="h-full p-10 grid grid-cols-7 grid-rows-[50px_repeat(6,_1fr)] gap-4">
          <div className="col-start-1 col-end-8 row-start-7 md:row-start-1 row-end-8 md:row-end-2">
            .div13
          </div>

          <div
            className="col-start-1 col-end-4 row-start-1 md:row-start-2 row-end-3 md:row-end-4
  border border-[#212121] rounded-3xl relative overflow-hidden"
          >
            <WasiBask />
            div1
          </div>
          <div
            className="col-start-4 col-end-6 row-start-1 md:row-start-2 row-end-3 md:row-end-4
  border border-[#212121] rounded-3xl relative overflow-hidden"
          >
            <WasiBask />
            div2
          </div>
          <div
            className="col-start-1 col-end-3 row-start-3 md:row-start-4 row-end-7 md:row-end-8
  border border-[#212121] rounded-3xl relative overflow-hidden"
          >
            <WasiBask />
            div3
          </div>
          <div
            className="col-start-3 col-end-6 row-start-3 md:row-start-4 row-end-5 md:row-end-6
  border border-[#212121] rounded-3xl relative overflow-hidden"
          >
            <WasiBask />
            div4
          </div>
          <div
            className="col-start-5 col-end-7 row-start-5 md:row-start-6 row-end-7 md:row-end-8
  border border-[#212121] rounded-3xl relative overflow-hidden"
          >
            <WasiBask />
            div5
          </div>
          <div
            className="col-start-3 col-end-4 row-start-5 md:row-start-6 row-end-6
  border border-[#212121] rounded-3xl relative overflow-hidden"
          >
            <WasiBask />
            div6
          </div>
          <div
            className="col-start-4 col-end-5 row-start-5 md:row-start-6 row-end-6
  border border-[#212121] rounded-3xl relative overflow-hidden"
          >
            <WasiBask />
            div7
          </div>
          <div
            className="col-start-3 col-end-4 row-start-6 md:row-start-7 row-end-7 md:row-end-8
  border border-[#212121] rounded-3xl relative overflow-hidden"
          >
            <WasiBask />
            div8
          </div>
          <div
            className="col-start-4 col-end-5 row-start-6 md:row-start-7 row-end-7 md:row-end-8
  border border-[#212121] rounded-3xl relative overflow-hidden"
          >
            <WasiBask />
            div9
          </div>
          <div
            className="col-start-6 col-end-8 row-start-1 md:row-start-2 row-end-2 md:row-end-3
  border border-[#212121] rounded-3xl relative overflow-hidden"
          >
            <WasiBask />
            div10
          </div>
          <div
            className="col-start-7 col-end-8 row-start-5 md:row-start-6 row-end-7 md:row-end-8
  border border-[#212121] rounded-3xl relative overflow-hidden"
          >
            <WasiBask />
            div11
          </div>
          <div
            className="col-start-6 col-end-8 row-start-2 md:row-start-3 row-end-5 md:row-end-6
  border border-[#212121] rounded-3xl relative overflow-hidden"
          >
            <WasiBask />
            div12
          </div>
        </div>
      </div>
    </main>
  );
}
