import image from "/images/moneyTek.png";
const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "calc(100% - 40px) 40px",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-[50vh]"
    >
      <div className="max-w-fit relative mx-auto">
        <h2 className="text-2xl lg:pt-16 font-semibold  lg:text-5xl">
          Invest <span className="text-primary">Smarter</span> With{" "}
          <span className="text-primary">Moneyy.ai</span>
        </h2>
        <img
          className=" absolute right-3 "
          src="/images/revurseCurve.png"
          alt="curve"
        />
      </div>
      <h5 className="text-xl text-center my-8">
        Automate Trading with AI Algo Strategies by SEBI Reg. Experts
      </h5>
      <div className="flex justify-center items-center">
        <button className="btn btn-primary hover:bg-white hover:text-primary btn-xl ">
          Explore Strtegies
        </button>
      </div>
    </div>
  );
};

export default Hero;
