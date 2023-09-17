import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../../../assets/images/slide-01.jpg";
import slider2 from "../../../assets/images/slide-02.jpg";
import slider3 from "../../../assets/images/slide-03.jpg";

const Slider = () => {
    return (
        <div>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                dynamicHeight={true}
                showStatus={false}
                infiniteLoop={true}
                transitionTime={1000} // Adjust the transition time as needed
                useKeyboardArrows={true}
                swipeable={true}
                showIndicators={false}
            >
                <div className="item-slick1" style={{ backgroundImage: `url(${slider1})` }} >
                    <div className="container h-full px-30">
                        <div className="flex-col-l-m h-full p-t-100 p-b-30">
                            <div className="layer-slick1 animated " data-appear="fadeInDown" data-delay={0} >
                                <span className="croissant text-2xl px-1 cl2 respon2">
                                    Men Collection 2018
                                </span>
                            </div>
                            <div className="layer-slick1 animated " data-appear="fadeInUp" data-delay={800}>
                                <h2 className="Poppins font-bold text-8xl cl2 pt-1 pb-4 respon1">New arrivals</h2>
                            </div>
                            <div className="layer-slick1 animated " data-appear="zoomIn" data-delay={1600}>
                                <button href="product.html" className="flex-c-m cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item-slick1" style={{ backgroundImage: `url(${slider2})` }} >
                    <div className="container h-full px-30">
                        <div className="flex-col-l-m h-full p-t-100 p-b-30">
                            <div className="layer-slick1 animated " data-appear="fadeInDown" data-delay={0} >
                                <span className="croissant text-2xl px-1 cl2 respon2">
                                    Men Collection 2018
                                </span>
                            </div>
                            <div className="layer-slick1 animated " data-appear="fadeInUp" data-delay={800}>
                                <h2 className="Poppins font-bold text-8xl cl2 pt-1 pb-4 respon1">New arrivals</h2>
                            </div>
                            <div className="layer-slick1 animated " data-appear="zoomIn" data-delay={1600}>
                                <button href="product.html" className="flex-c-m cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item-slick1" style={{ backgroundImage: `url(${slider3})` }} >
                    <div className="container h-full px-30">
                        <div className="flex-col-l-m h-full p-t-100 p-b-30">
                            <div className="layer-slick1 animated " data-appear="fadeInDown" data-delay={0} >
                                <span className="croissant text-2xl px-1 cl2 respon2">
                                    Men Collection 2018
                                </span>
                            </div>
                            <div className="layer-slick1 animated " data-appear="fadeInUp" data-delay={800}>
                                <h2 className="Poppins font-bold text-8xl cl2 pt-1 pb-4 respon1">New arrivals</h2>
                            </div>
                            <div className="layer-slick1 animated " data-appear="zoomIn" data-delay={1600}>
                                <button href="product.html" className="flex-c-m cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;
