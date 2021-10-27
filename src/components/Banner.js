import HeroCta from "./HeroCta";

const Banner = ({image}) => {
  return (
    <div className="banner">
      <HeroCta 
        image={image}
        title="Our Favorite Tees"
        text="Everyday tees you need."
        link="#"
        textColor="#ffffff"
      />
    </div>
  );
};

export default Banner;