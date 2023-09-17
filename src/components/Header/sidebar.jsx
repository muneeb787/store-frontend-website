import PropTypes from 'prop-types';
import image1 from "../../assets/images/gallery-01.jpg"
import image2 from "../../assets/images/gallery-02.jpg"
import image3 from "../../assets/images/gallery-03.jpg"
import image4 from "../../assets/images/gallery-04.jpg"
import image5 from "../../assets/images/gallery-05.jpg"
import image6 from "../../assets/images/gallery-06.jpg"
import image7 from "../../assets/images/gallery-07.jpg"
import image8 from "../../assets/images/gallery-08.jpg"
import image9 from "../../assets/images/gallery-09.jpg"

const HomeSideBar = ({ isOpen, closeSidebar }) => {
    return (
        <aside className={`wrap-sidebar js-sidebar ${isOpen ? 'show-sidebar' : ''}`}>
            <div className="s-full js-hide-sidebar"></div>

            <div className="sidebar flex-col-l p-t-22 p-b-25">
                <div className="flex-r w-full p-b-30 p-r-27">
                    <div onClick={closeSidebar} className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-sidebar">
                        <i className="zmdi zmdi-close"></i>
                    </div>
                </div>

                <div className="sidebar-content flex-w w-full p-lr-65 js-pscroll">
                    <ul className="sidebar-link w-full">
                        <li className="p-b-13">
                            <a href="index.html" className=" cl2 hov-cl1 trans-04">
                                Home
                            </a>
                        </li>

                        <li className="p-b-13">
                            <a href="#" className=" cl2 hov-cl1 trans-04">
                                My Wishlist
                            </a>
                        </li>

                        <li className="p-b-13">
                            <a href="#" className=" cl2 hov-cl1 trans-04">
                                My Account
                            </a>
                        </li>

                        <li className="p-b-13">
                            <a href="#" className=" cl2 hov-cl1 trans-04">
                                Track Oder
                            </a>
                        </li>

                        <li className="p-b-13">
                            <a href="#" className=" cl2 hov-cl1 trans-04">
                                Refunds
                            </a>
                        </li>

                        <li className="p-b-13">
                            <a href="#" className=" cl2 hov-cl1 trans-04">
                                Help & FAQs
                            </a>
                        </li>
                    </ul>

                    <div className="sidebar-gallery w-full p-tb-30">
                        <span className="mtext-101 cl5">
                            @ CozaStore
                        </span>

                        <div className="flex-w flex-sb p-t-36 gallery-lb">

                            <div className="wrap-item-gallery m-b-10">
                                <a className="item-gallery bg-img1" href="images/gallery-01.jpg" data-lightbox="gallery"
                                    style={{backgroundImage: `url("${image1}")`}}></a>
                            </div>

                            <div className="wrap-item-gallery m-b-10">
                                <a className="item-gallery bg-img1" href="images/gallery-02.jpg" data-lightbox="gallery"
                                    style={{backgroundImage: `url("${image2}")`}}></a>
                            </div>

                            <div className="wrap-item-gallery m-b-10">
                                <a className="item-gallery bg-img1" href="images/gallery-03.jpg" data-lightbox="gallery"
                                    style={{backgroundImage: `url("${image3}")`}}></a>
                            </div>

                            <div className="wrap-item-gallery m-b-10">
                                <a className="item-gallery bg-img1" href="images/gallery-04.jpg" data-lightbox="gallery"
                                    style={{backgroundImage: `url("${image4}")`}}></a>
                            </div>

                            <div className="wrap-item-gallery m-b-10">
                                <a className="item-gallery bg-img1" href="images/gallery-05.jpg" data-lightbox="gallery"
                                    style={{backgroundImage: `url("${image5}")`}}></a>
                            </div>

                            <div className="wrap-item-gallery m-b-10">
                                <a className="item-gallery bg-img1" href="images/gallery-06.jpg" data-lightbox="gallery"
                                    style={{backgroundImage: `url("${image6}")`}}></a>
                            </div>

                            <div className="wrap-item-gallery m-b-10">
                                <a className="item-gallery bg-img1" href="images/gallery-07.jpg" data-lightbox="gallery"
                                    style={{backgroundImage: `url("${image7}")`}}></a>
                            </div>

                            <div className="wrap-item-gallery m-b-10">
                                <a className="item-gallery bg-img1" href="images/gallery-08.jpg" data-lightbox="gallery"
                                    style={{backgroundImage: `url("${image8}")`}}></a>
                            </div>

                            <div className="wrap-item-gallery m-b-10">
                                <a className="item-gallery bg-img1" href="images/gallery-09.jpg" data-lightbox="gallery"
                                    style={{backgroundImage: `url("${image9}")`}}></a>
                            </div>
                        </div>
                    </div>

                    <div className="text-xl sidebar-gallery w-full">
                        <span className=" cl5">
                            About Us
                        </span>

                        <p className="text-sm cl6 p-t-27">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus vulputate hendrerit. Praesent faucibus erat vitae rutrum gravida. Vestibulum tempus mi enim, in molestie sem fermentum quis.
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    )
}

HomeSideBar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeSidebar: PropTypes.func.isRequired,
};

export default HomeSideBar
