export const Banner = () => {
  return (
    <div
      style={{
        backgroundColor: "#18BA51",
        backgroundImage: 'url("HomeBanner.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[788px] relative left-0 right-0 overflow-hidden"
    >
      <div className="container mx-auto relative h-full flex items-center justify-between px-20">
        <div className="flex flex-col gap-[23px] w-[384px]">
          <p className="text-white font-semibold text-[55px] leading-none">
            Pinecone Food delivery
          </p>
          <div className="border border-white"></div>
          <p className="text-white text-[22px] font-thin leading-none">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="relative">
          <div
            style={{
              backgroundImage: 'url("banner-big-img.png")',
              backgroundSize: "cover",
            }}
            className="w-[443px] h-[438px] absolute right-0 top-[-240px] left-[-550px]"
          ></div>
          <div
            style={{
              backgroundImage: 'url("banner-small-img.png")',
              backgroundSize: "cover",
            }}
            className="w-[313px] h-[313px] absolute right-[220px] top-[-140px]"
          ></div>
        </div>
      </div>
    </div>
  );
};
