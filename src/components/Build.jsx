import { useEffect } from "react";

import ThumbnailGallery from "./ThumbnailGallery";

const Page1 = () => {
  useEffect(() => {
    // Trigger a page refresh when navigating to this page
    window.scrollTo(0, 0); // Ensure scroll to top
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div
      className="relative dark:bg-gray-950 w-full bg-cover bg-center pt-40"
      style={{
        backgroundImage: "url('/img/bgd_top-min.jp')", 
        backgroundAttachment: "", // Parallax effect
      }}
    >
      <h2 className="text-4xl  text-gray-400 font-semibold mb-4 ">
        The Build<span className="ml-2 text-sky-400">Gallery</span>
      </h2>
      <p className="text-xl  text-gray-300  mb-4 ">
        Click pictures for details
      </p>

      <div className="max-w-[95%] m-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 my-8  p-2">
        <div className="rounded-lg  p-8 text-sm/7 bg-gray-900 text-gray-300">
          <ul className="space-y-3  ">
            <li className="flex">
              <svg
                className="h-[1lh] w-5.5 shrink-0"
                viewBox="0 0 22 22"
                fill="none"
                strokeLinecap="square"
              >
                <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                <circle
                  cx="11"
                  cy="11"
                  r="10.5"
                  className="stroke-sky-400/25"
                />
                <path
                  d="M8 11.5L10.5 14L14 8"
                  className="stroke-sky-800 dark:stroke-sky-300"
                />
              </svg>
              <p className="ml-3">
                Custom Interior
                <code className="font-mono font-medium text-gray-950 dark:text-white">
                  {/* @theme */}
                </code>
              </p>
            </li>

            <li className="flex">
              <svg
                className="h-[1lh] w-5.5 shrink-0"
                viewBox="0 0 22 22"
                fill="none"
                strokeLinecap="square"
              >
                <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                <circle
                  cx="11"
                  cy="11"
                  r="10.5"
                  className="stroke-sky-400/25"
                />
                <path
                  d="M8 11.5L10.5 14L14 8"
                  className="stroke-sky-800 dark:stroke-sky-300"
                />
              </svg>
              <p className="ml-3">
                All guages have custom colored LED lighting.
                <code className="font-mono font-medium text-gray-950 dark:text-white">
                  {/* sdffsdf */}
                </code>
              </p>
            </li>

            <li className="flex">
              <svg
                className="h-[1lh] w-5.5 shrink-0"
                viewBox="0 0 22 22"
                fill="none"
                strokeLinecap="square"
              >
                <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                <circle
                  cx="11"
                  cy="11"
                  r="10.5"
                  className="stroke-sky-400/25"
                />
                <path
                  d="M8 11.5L10.5 14L14 8"
                  className="stroke-sky-800 dark:stroke-sky-300"
                />
              </svg>
              <p className="ml-3">
                Diamond plate inside that is removable.
                <code className="font-mono font-medium text-gray-950 dark:text-white">
                  {/* sdffsdf */}
                </code>
              </p>
            </li>

            <li className="flex">
              <svg
                className="h-[1lh] w-5.5 shrink-0"
                viewBox="0 0 22 22"
                fill="none"
                strokeLinecap="square"
              >
                <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                <circle
                  cx="11"
                  cy="11"
                  r="10.5"
                  className="stroke-sky-400/25"
                />
                <path
                  d="M8 11.5L10.5 14L14 8"
                  className="stroke-sky-800 dark:stroke-sky-300"
                />
              </svg>
              <p className="ml-3">
                Fat mat sound deadening insulation.
                <code className="font-mono font-medium text-gray-950 dark:text-white">
                  {/* sdffsdf */}
                </code>
              </p>
            </li>
          </ul>
        </div>

        <div className="rounded-lg  p-8 text-sm/7 bg-gray-900 text-gray-300">
          <ul className="space-y-3">
            <li className="flex">
              <svg
                className="h-[1lh] w-5.5 shrink-0"
                viewBox="0 0 22 22"
                fill="none"
                strokeLinecap="square"
              >
                <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                <circle
                  cx="11"
                  cy="11"
                  r="10.5"
                  className="stroke-sky-400/25"
                />
                <path
                  d="M8 11.5L10.5 14L14 8"
                  className="stroke-sky-800 dark:stroke-sky-300"
                />
              </svg>
              <p className="ml-3">
                Custom powder coated hood latch and radiator brackets.
                <code className="font-mono font-medium text-gray-950 dark:text-white">
                  {/* @theme */}
                </code>
              </p>
            </li>
            <li className="flex">
              <svg
                className="h-[1lh] w-5.5 shrink-0"
                viewBox="0 0 22 22"
                fill="none"
                strokeLinecap="square"
              >
                <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                <circle
                  cx="11"
                  cy="11"
                  r="10.5"
                  className="stroke-sky-400/25"
                />
                <path
                  d="M8 11.5L10.5 14L14 8"
                  className="stroke-sky-800 dark:stroke-sky-300"
                />
              </svg>
              <p className="ml-3">
                Windows are tinted to 20 percent and slider in back.
                <code className="font-mono font-medium text-gray-950 dark:text-white">
                  {/* @utility */}
                </code>
              </p>
            </li>

            <li className="flex">
              <svg
                className="h-[1lh] w-5.5 shrink-0"
                viewBox="0 0 22 22"
                fill="none"
                strokeLinecap="square"
              >
                <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                <circle
                  cx="11"
                  cy="11"
                  r="10.5"
                  className="stroke-sky-400/25"
                />
                <path
                  d="M8 11.5L10.5 14L14 8"
                  className="stroke-sky-800 dark:stroke-sky-300"
                />
              </svg>
              <p className="ml-3">
                Truck is completely rewired from fron to back I used American
                Autowire kit..
                <code className="font-mono font-medium text-gray-950 dark:text-white">
                  {/* @utility */}
                </code>
              </p>
            </li>
          </ul>
        </div>

        <div className="rounded-lg  p-8 text-sm/7 bg-gray-900 text-gray-300">
          <ul className="space-y-3">
            <li className="flex">
              <svg
                className="h-[1lh] w-5.5 shrink-0"
                viewBox="0 0 22 22"
                fill="none"
                strokeLinecap="square"
              >
                <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                <circle
                  cx="11"
                  cy="11"
                  r="10.5"
                  className="stroke-sky-400/25"
                />
                <path
                  d="M8 11.5L10.5 14L14 8"
                  className="stroke-sky-800 dark:stroke-sky-300"
                />
              </svg>
              <p className="ml-3">
                Truck is lowered 2 1/2 in. in front and 4 in. in rear for a
                clean leveled look.
                <code className="font-mono font-medium text-gray-950 dark:text-white">
                  {/* @theme */}
                </code>
              </p>
            </li>
            <li className="flex">
              <svg
                className="h-[1lh] w-5.5 shrink-0"
                viewBox="0 0 22 22"
                fill="none"
                strokeLinecap="square"
              >
                <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                <circle
                  cx="11"
                  cy="11"
                  r="10.5"
                  className="stroke-sky-400/25"
                />
                <path
                  d="M8 11.5L10.5 14L14 8"
                  className="stroke-sky-800 dark:stroke-sky-300"
                />
              </svg>
              <p className="ml-3">
                3in. exhaust to 50 series Flowmasters.
                <code className="font-mono font-medium text-gray-950 dark:text-white">
                  {/* @utility */}
                </code>
              </p>
            </li>
            <li className="flex">
              <svg
                className="h-[1lh] w-5.5 shrink-0"
                viewBox="0 0 22 22"
                fill="none"
                strokeLinecap="square"
              >
                <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                <circle
                  cx="11"
                  cy="11"
                  r="10.5"
                  className="stroke-sky-400/25"
                />
                <path
                  d="M8 11.5L10.5 14L14 8"
                  className="stroke-sky-800 dark:stroke-sky-300"
                />
              </svg>
              <p className="ml-3">
                Rebuilt automatic TH350 with lokar floor shifter..
                <code className="font-mono font-medium text-gray-950 dark:text-white">
                  {/* @utility */}
                </code>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <ThumbnailGallery />
    </div>
  );
};

export default Page1;
