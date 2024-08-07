import './carousel.css'

const Carousel = () => {

    return (

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators ">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            
                        </div>
                        <div className="container-carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="\src\assets\banner 1.png" className="d-block " alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="\src\assets\banner 2.png" className="d-block " alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="\src\assets\banner 3.png" className="d-block " alt="..." />
                                </div> 
                                <div className="carousel-item">
                                    <img src="\src\assets\banner 4.png" className="d-block " alt="..." />
                                </div> 

                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )



}

export default Carousel