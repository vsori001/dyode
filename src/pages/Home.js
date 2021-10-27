import PromoBar from "../components/PromoBar";
import HeroSlider from "../components/HeroSlider";
import Nav from "../components/Nav";
import Categories from "../components/Categories";
import NewArrivals from "../components/NewArrivals";
import Banner from "../components/Banner";
import StayConnected from "../components/StayConnected";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <PromoBar text="FREE SHIPPING ON ALL ORDERS OVER $75" bgColor="#000000" color="#ffffff" />
      <Nav />
      <HeroSlider />
      <Categories />
      <NewArrivals />
      <Banner image={"./images/banner.jpg"} />
      <StayConnected />
      <Footer />
    </>
  );
};

export default Home;