const HeroCta = ({image, title, text, link, textColor}) => {
  return (
    <div className="heroCta">
      <img src={image} alt="hero" />
      <div className="cta">
        <h1 className="green">{title}</h1>
        <p className="green">{text}</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default HeroCta;