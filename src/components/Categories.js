import Category from "./Category";

const Categories = () => {
  return (
    <div className="categories">
      <Category image={"./images/womens.jpg"} title="Women's" />
      <Category image={"./images/mens.jpg"} title="Men's" />
      <Category image={"./images/accessoriesMobile.jpg"} title="Accessories" />
    </div>
  );
};

export default Categories;