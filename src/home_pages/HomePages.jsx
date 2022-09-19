import FlashSale from "../components/FlashSale/FlashSale";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Product from "../components/Product/Product";
import Slide from "../components/Slide/Slide";
import "./HomePages.scss";
function HomePages() {
  return (
    <div className="home-pages">
      <Header />
      <Navbar />
      <Slide />
      <FlashSale />
      <Product />  
    </div>
   
  );
}

export default HomePages;
