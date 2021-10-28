import Category from "./Category";

const Categories = () => {
  return (
    <div className="categories">
      <div className="mobileRow">
        <Category image={"./images/womens.jpg"} title="Women's" />
        <Category image={"./images/mens.jpg"} title="Men's" />
      </div>
      <div className="mobileRow">
        <Category image={"./images/accessories.jpg"} title="Accessories" mobileImage="./images/accessoriesMobile.jpg" hasMobileImage="true" />
      </div>
    </div>
  );
};

export default Categories;