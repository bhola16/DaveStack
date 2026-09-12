import BannerPhoto from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto max-w-full px-4 py-8 sm:px-6 md:px-8 lg:px-20 lg:py-12">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-center lg:gap-10">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Build Your Ideal
          </h1>

          <h1 className="my-2 bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-3xl font-bold text-transparent sm:my-3 sm:text-4xl lg:text-5xl">
            Development Stack
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 md:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-7 flex items-center justify-center gap-2 sm:gap-4 md:justify-start">
            <button className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90 sm:px-6 sm:py-3 sm:text-base">
              Explore Technologies
            </button>

            <button className="rounded-full border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-gray-400 sm:px-6 sm:py-3 sm:text-base">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={BannerPhoto}
            alt="Dev Stack image"
            className="mx-auto w-full max-w-md md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
