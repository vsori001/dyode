const NewArrival = ({image, title, variant, price}) => {
  return (
    <div className="newArrival">
      <img src={image} alt="arrival" />
      <p className="title">{title}</p>
      <p className="variant">{variant}</p>
      <p className="price green">{price}</p>
    </div>
  );
};

export default NewArrival;