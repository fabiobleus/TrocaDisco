import Carousel from "../componentes/carousel";
import Header from "../componentes/header";
import ImgHome from "../componentes/imgHome";
import Logo from "../componentes/logoBusca.jsx";
import Menu from "../componentes/menu";
import { Link } from "react-router-dom";
import "../componentes/imgHome.css";
import Footer from "../componentes/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <ImgHome />
      <Footer />
    </div>
  );
};

export default Home;
