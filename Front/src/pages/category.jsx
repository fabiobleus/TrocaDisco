// import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "../componentes/header"
import Footer from "../componentes/footer"
import Products from "../componentes/products"


const Category = () => {
    return (
      <div>
        <Header />        
        <Products />
        <Footer />
      </div>
    );
  };
  
  export default Category