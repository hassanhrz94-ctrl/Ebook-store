const Banner = () => {
  return (
    <div className="bg-pink-500 rounded-3xl mx-4 md:mx-12 mt-6 p-6 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* Left Content */}
      <div className="text-white max-w-lg">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Better way to read your textbooks
        </h1>

        <p className="mt-4 text-sm md:text-base text-white/80">
          Performing in dive information capitalize line your end ball from
          immersion. Foster provide management tool podcasting change
          podcasting fruit workflows line synopsis proposition new.
        </p>

        <button className="mt-6 bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-md font-medium">
          Get Started
        </button>
      </div>

      {/* Right Illustration */}
      <div className="relative mt-10 md:mt-0">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-yellow-400 rounded-full flex items-center justify-center">
          <div className="w-32 h-32 bg-purple-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;