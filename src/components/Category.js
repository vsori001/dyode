import { useState, useEffect } from "react";

const Category = ({image, title, mobileImage = "", hasMobileImage = false}) => {

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

  const categoryImage = mobile && hasMobileImage ? mobileImage : image;

  return (
    <div className="category">
      <img src={categoryImage} alt="title" />
      <span>{title}</span>
    </div>
  );
};

export default Category;