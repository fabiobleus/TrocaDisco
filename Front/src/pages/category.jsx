// import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "../componentes/header"
import Footer from "../componentes/footer"
import ImgHome from "../componentes/imgHome"


const Category = () => {
    return (
      <div>
        <Header />        
        <ImgHome />
        <Footer />
      </div>
    );
  };
  
  export default Category