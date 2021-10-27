const StayConnected = () => {
  return (
    <div className="stayConnected greenBg">
      <div className="header">
        <img src={"./images/email.svg"} alt="envelope" />
        <h1>Sign Up &amp; Stay Connected</h1>
      </div>
      <div className="content">
        <p>Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
        <div className="form">
          <input type="text" placeholder="Enter Your Email Address" />
          <button>subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default StayConnected;