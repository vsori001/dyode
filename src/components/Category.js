const Category = ({image, title}) => {
  return (
    <div className="category">
      <img src={image} alt="title" />
      <span>{title}</span>
    </div>
  );
};

export default Category;