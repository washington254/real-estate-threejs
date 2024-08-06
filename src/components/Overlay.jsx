import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import { scenes } from "./Experience";

export const slideAtom = atom(0);

export const Overlay = () => {
  const [slide, setSlide] = useAtom(slideAtom);
  const [displaySlide, setDisplaySlide] = useState(slide);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => {
      setDisplaySlide(slide);
      setVisible(true);
    }, 2600);
  }, [slide]);

  return (
    <>
      <div
        className={`fixed z-10 top-0 left-0 bottom-0 right-0 flex flex-col justify-between pointer-events-none text-black ${
          visible ? "" : "opacity-0"
        } transition-opacity duration-1000`}
      >
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

        <defs>
        </defs>
        <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
          <path d="M 85.163 29.252 l -8.833 -6.797 V 8.628 c 0 -1.947 -1.584 -3.532 -3.531 -3.532 H 67.3 c -1.947 0 -3.532 1.584 -3.532 3.532 v 4.161 l -14.92 -11.48 c -2.266 -1.743 -5.43 -1.743 -7.695 0 L 4.836 29.252 c -0.848 0.652 -1.173 1.729 -0.829 2.742 c 0.345 1.013 1.259 1.668 2.33 1.668 h 7.333 v 27.399 c 0 0.553 0.448 1 1 1 s 1 -0.447 1 -1 V 33.662 H 74.33 v 27.169 c 0 0.553 0.447 1 1 1 s 1 -0.447 1 -1 V 33.662 h 7.334 c 1.07 0 1.984 -0.655 2.329 -1.668 C 86.337 30.98 86.012 29.904 85.163 29.252 z M 65.768 8.628 c 0 -0.845 0.688 -1.532 1.532 -1.532 h 5.499 c 0.845 0 1.531 0.687 1.531 1.532 v 12.289 l -8.563 -6.588 V 8.628 z M 84.1 31.35 c -0.04 0.117 -0.149 0.312 -0.436 0.312 H 6.336 c -0.287 0 -0.396 -0.195 -0.436 -0.312 s -0.072 -0.338 0.155 -0.513 L 42.372 2.894 C 43.146 2.299 44.073 2.001 45 2.001 s 1.854 0.298 2.629 0.893 l 36.315 27.943 C 84.172 31.012 84.139 31.233 84.1 31.35 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          <path d="M 30.087 48.057 h -5.699 c -0.552 0 -1 0.447 -1 1 v 12.005 c 0 0.553 0.448 1 1 1 s 1 -0.447 1 -1 V 56.06 h 3.61 c 0.552 0 1 -0.447 1 -1 s -0.448 -1 -1 -1 h -3.61 v -4.003 h 4.699 c 0.552 0 1 -0.447 1 -1 S 30.64 48.057 30.087 48.057 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          <path d="M 36.945 62.062 h -0.322 c -2.217 0 -4.021 -1.803 -4.021 -4.02 v -5.965 c 0 -2.217 1.804 -4.021 4.021 -4.021 h 0.322 c 2.217 0 4.02 1.804 4.02 4.021 v 5.965 C 40.965 60.259 39.162 62.062 36.945 62.062 z M 36.624 50.057 c -1.114 0 -2.021 0.906 -2.021 2.021 v 5.965 c 0 1.113 0.906 2.02 2.021 2.02 h 0.322 c 1.114 0 2.02 -0.906 2.02 -2.02 v -5.965 c 0 -1.114 -0.906 -2.021 -2.02 -2.021 H 36.624 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          <path d="M 51.142 53.649 v -3.183 c 0 -1.329 -1.081 -2.41 -2.41 -2.41 h -4.29 c -0.552 0 -1 0.447 -1 1 v 12.005 c 0 0.553 0.448 1 1 1 s 1 -0.447 1 -1 v -4.937 l 3.882 5.513 c 0.194 0.276 0.504 0.424 0.818 0.424 c 0.199 0 0.399 -0.06 0.575 -0.183 c 0.451 -0.317 0.56 -0.941 0.241 -1.394 l -3.117 -4.426 h 0.889 C 50.061 56.06 51.142 54.979 51.142 53.649 z M 45.442 50.057 h 3.29 c 0.227 0 0.41 0.184 0.41 0.41 v 3.183 c 0 0.227 -0.184 0.41 -0.41 0.41 h -3.29 V 50.057 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          <path d="M 20.775 90 h -6.106 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 6.106 c 2.455 0 4.453 -1.997 4.453 -4.452 s -1.998 -4.453 -4.453 -4.453 h -0.653 c -3.558 0 -6.453 -2.895 -6.453 -6.452 c 0 -3.559 2.895 -6.453 6.453 -6.453 h 4.085 c 0.552 0 1 0.447 1 1 s -0.448 1 -1 1 h -4.085 c -2.455 0 -4.453 1.998 -4.453 4.453 s 1.998 4.452 4.453 4.452 h 0.653 c 3.558 0 6.453 2.895 6.453 6.453 C 27.228 87.105 24.333 90 20.775 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          <path d="M 37.557 66.189 h -0.584 c -3.577 0 -6.487 2.91 -6.487 6.487 V 89 c 0 0.553 0.448 1 1 1 s 1 -0.447 1 -1 v -9.905 h 9.559 V 89 c 0 0.553 0.448 1 1 1 s 1 -0.447 1 -1 V 72.677 C 44.044 69.1 41.134 66.189 37.557 66.189 z M 32.485 77.095 v -4.418 c 0 -2.475 2.013 -4.487 4.487 -4.487 h 0.584 c 2.474 0 4.487 2.013 4.487 4.487 v 4.418 H 32.485 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          <path d="M 59.719 90 H 49.364 c -0.553 0 -1 -0.447 -1 -1 V 67.189 c 0 -0.553 0.447 -1 1 -1 s 1 0.447 1 1 V 88 h 9.354 c 0.553 0 1 0.447 1 1 S 60.271 90 59.719 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          <path d="M 75.33 79.095 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 h -9.354 v -8.905 h 9.354 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 H 64.977 c -0.553 0 -1 0.447 -1 1 V 89 c 0 0.553 0.447 1 1 1 H 75.33 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 h -9.354 v -8.905 H 75.33 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
        </g>
        </svg>



        <div className="absolute top-0 bottom-0 left-0 right-0 flex-1 flex items-center justify-between p-4">
          <svg
            onClick={() =>
              setSlide((prev) => (prev > 0 ? prev - 1 : scenes.length - 1))
            }
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 pointer-events-auto hover:opacity-60 transition-opacity cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 pointer-events-auto hover:opacity-60 transition-opacity cursor-pointer"
            onClick={() =>
              setSlide((prev) => (prev < scenes.length - 1 ? prev + 1 : 0))
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </div>


        <div className="bg-gradient-to-t from-white/90 pt-20 pb-10 p-4 flex items-center flex-col text-center">
          <h1 className="text-5xl font-extrabold">
            {scenes[displaySlide].name}
          </h1>
          <p className="text-opacity-60 italic">
            {scenes[displaySlide].description}
          </p>
          <div className="flex items-center gap-12 mt-10">
            <div className="flex flex-col items-center">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
                <p className="font-semibold text-3xl">
                  ${scenes[displaySlide].price.toLocaleString()}
                </p>
              </div>
              <p className="text-sm opacity-80">Property Price</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

                <defs>
                </defs>
                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                  <path d="M 10.676 58.553 v 20.318 h 29.443 V 58.553 H 10.676 z M 37.119 67.212 H 26.897 v -5.659 h 10.222 V 67.212 z M 23.897 61.553 v 5.659 H 13.676 v -5.659 H 23.897 z M 13.676 70.212 h 10.222 v 5.659 H 13.676 V 70.212 z M 26.897 75.871 v -5.659 h 10.222 v 5.659 H 26.897 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 33.519 41.387 L 16.863 53.18 L 50.2 53.16 L 33.519 41.387 z M 35.021 46.118 l 5.734 4.048 l -5.734 0.003 V 46.118 z M 32.021 46.124 v 4.047 L 26.3 50.174 L 32.021 46.124 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 79.52 54.237 c 6.367 -1.123 11.163 -9.307 11.163 -19.565 c 0 -11.052 -5.563 -19.709 -12.663 -19.709 c -2.153 0 -4.246 0.848 -6.094 2.405 C 69.64 7.967 63.971 1.463 57.17 1.463 c -8.884 0 -15.843 11.091 -15.843 25.25 c 0 1.437 0.081 2.86 0.228 4.263 l -8.027 -5.665 L 3.353 46.675 c -1.189 0.843 -1.931 2.159 -2.033 3.613 c -0.102 1.454 0.447 2.861 1.506 3.861 c 0.451 0.427 0.97 0.749 1.522 0.969 v 24.799 H 0 v 3 h 90 v -3 H 79.52 V 54.237 z M 62.711 55.092 c 0.542 -0.211 1.055 -0.514 1.502 -0.923 c 1.09 -0.994 1.662 -2.408 1.569 -3.881 c -0.041 -0.651 -0.216 -1.272 -0.495 -1.839 c 0.811 -0.765 1.568 -1.642 2.268 -2.611 c 2.045 4.706 5.274 7.746 8.965 8.398 v 25.682 H 62.711 V 55.092 z M 78.02 17.962 c 5.238 0 9.663 7.652 9.663 16.709 c 0 8.175 -3.609 15.185 -8.163 16.476 V 37.253 l 6.096 -8.119 l -2.398 -1.802 l -3.697 4.924 v -5.109 h -3 v 9.104 v 0.5 v 4.176 l -2.323 -2.725 l -2.283 1.946 l 4.606 5.403 v 5.608 c -2.919 -0.825 -5.538 -4.009 -6.992 -8.611 c 2.212 -4.42 3.485 -9.992 3.485 -15.838 c 0 -2.004 -0.144 -3.944 -0.409 -5.802 C 73.817 19.467 75.647 17.962 78.02 17.962 z M 44.327 26.713 c 0 -12.061 5.881 -22.25 12.843 -22.25 s 12.843 10.189 12.843 22.25 c 0 8.134 -2.599 15.611 -6.787 19.557 l -4.556 -3.215 v -8.832 l 7.911 -9.773 l -2.332 -1.888 l -5.579 6.893 v -4.248 v -0.538 V 12.206 h -3 v 8.821 l -4.546 -5.519 l -2.316 1.907 l 6.862 8.33 v 7.416 v 0.531 v 7.245 l -10.74 -7.58 C 44.536 31.211 44.327 28.981 44.327 26.713 z M 5.086 49.124 l 28.445 -20.139 l 28.479 20.1 c 0.459 0.323 0.742 0.831 0.777 1.392 c 0.035 0.56 -0.183 1.099 -0.603 1.482 c -0.645 0.589 -1.593 0.649 -2.307 0.145 L 33.528 33.507 L 7.219 52.134 c -0.715 0.507 -1.696 0.437 -2.333 -0.165 c -0.403 -0.381 -0.612 -0.916 -0.573 -1.47 S 4.634 49.444 5.086 49.124 z M 7.348 55.308 c 0.563 -0.143 1.109 -0.375 1.604 -0.725 l 24.579 -17.402 l 24.617 17.374 c 0.482 0.34 1.013 0.575 1.563 0.717 v 24.646 h -3.136 V 58.553 H 43.356 v 21.365 H 7.348 V 55.308 z M 53.575 79.918 h -7.219 V 61.553 h 7.219 V 79.918 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                </g>
                </svg>
                <p className="font-semibold text-3xl">
                  {scenes[displaySlide].range} sqft
                </p>
              </div>
              <p className="text-sm opacity-80">Property Size</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
