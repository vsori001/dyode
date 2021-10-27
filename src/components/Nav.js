const logo = "./images/logo.png";
const search = "./images/search.svg";
const account = "./images/account.svg";
const cart = "./images/cart.svg";

const Nav = () => {
  return (
    <div className="nav greenBg">
      <div className="container">
        <div className="menu">
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </div>
        <img className="logo" src={logo} alt="logo" />
        <div className="navItems">
          <ul className="navLinks">
            <li>Men's</li>
            <li>Women's</li>
            <li>Accesories</li>
            <li>Sale!</li>
          </ul>
          <ul>
            <li><img src={search} alt="search" /></li>
            <li><img src={account} alt="account" /></li>
            <li><img src={cart} alt="cart" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;