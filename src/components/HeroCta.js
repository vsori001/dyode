import { useState, useEffect } from "react";

const HeroCta = ({image, title, text, link, textColor}) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 830px)");
    setMobile(!mediaQuery.matches);

    const updateMobile = (e) => {
      setMobile(!e.matches);
    };

    mediaQuery.addEventListener("change", updateMobile);

    return () => mediaQuery.removeEventListener("change", updateMobile);
  }, []);

  const color = mobile ? "#10504f" : textColor;

  return (
    <div className="heroCta">
      <img src={image} alt="hero" />
      <div className="cta">
        <h1 style={{color: color}}>{title}</h1>
        <p style={{color: color}}>{text}</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default HeroCta;