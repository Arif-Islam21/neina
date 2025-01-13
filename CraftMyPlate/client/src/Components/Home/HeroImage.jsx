// eslint-disable-next-line react/prop-types
const HeroImage = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { imageUrl } = item;
  return (
    <div
      className="hero min-h-[70vh]"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome there</h1>
          <p className="mb-5">
            Make your purchase for favourite products. All kinds of products
            available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
