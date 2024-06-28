import Carousel from "../componentes/carousel";
import Products from "../componentes/products.jsx";
import Header from "../componentes/header.jsx";

import "../componentes/imgHome.css";
import Footer from "../componentes/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
