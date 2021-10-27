const Footer = () => {
  return (
    <div className="footer">
      <ul className="customerService">
        <li className="heading">Customer Service</li>
        <li>Accessibility</li>
        <li>Contact Us</li>
        <li>Return Policy</li>
        <li>FAQ</li>
        <li>Gift Certificates</li>
        <li>Wishlist</li>
      </ul>
      <ul className="company">
        <li className="heading">Company</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Press</li>
        <li>Affiliates</li>
      </ul>
      <div className="social">
        <h5 className="heading">Follow Us</h5>
        <span className="socialIcon first"><img src={"./images/fbIcon.svg"} alt="Facebook" /></span>
        <span className="socialIcon"><img src={"./images/instagramIcon.svg"} alt="Instagram" /></span>
        <span className="socialIcon twitter"><img src={"./images/twitterIcon.svg"} alt="Twitter" /></span>
      </div>
    </div>
  );
};

export default Footer;