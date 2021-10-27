const PromoBar = ({text, bgColor, color}) => {
  return (
    <div className="promoBar" style={{backgroundColor: bgColor}}>
      <p style={{color: color}}>{text}</p>
    </div>
  );
};

export default PromoBar;