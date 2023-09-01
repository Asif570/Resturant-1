const Banner = () => {
  return (
    <div className="mb-20">
      <div className="relative">
        <img
          className="w-full h-full object-cover max-h-[500px]"
          src="https://wallpaperaccess.com/full/1400914.jpg"
          alt="Banner Image"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold tracking-widest">
            Welcome to{" "}
            <span className="block font-bold text-xl md:text-5xl mt-5 text-[#f1550c]">
              Dǐng Tài Fēng
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Banner;
