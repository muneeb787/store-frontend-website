import { useNavigate } from "react-router-dom"
import banner1 from "../../../assets/images/banner-04.jpg"
import banner2 from "../../../assets/images/banner-05.jpg"
import banner3 from "../../../assets/images/banner-06.jpg"

const Banners = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="sec-banner bg0">
                <div className="flex-w flex-c-m">
                    <div className="size-202 m-lr-auto respon4">
                        <div className="cursor-pointer block1 wrap-pic-w">
                            <img src={banner1} alt="IMG-BANNER" />

                                <a onClick={()=>{navigate("/store")}} className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                    <div className="block1-txt-child1 flex-col-l">
                                        <span className="block1-name Poppins text-3xl font-black trans-04 p-b-8">
                                            Women
                                        </span>

                                        <span className="text-sm block1-info trans-04">
                                            Spring 2018
                                        </span>
                                    </div>

                                    <div className="block1-txt-child2 p-b-4 trans-05">
                                        <div className="block1-link cl0 trans-09">
                                            Shop Now
                                        </div>
                                    </div>
                                </a>
                        </div>
                    </div>

                    <div className="size-202 m-lr-auto respon4">
                        <div className="cursor-pointer block1 wrap-pic-w">
                            <img src={banner2} alt="IMG-BANNER" />

                                <a onClick={()=>{navigate("/store")}} className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                    <div className="block1-txt-child1 flex-col-l">
                                        <span className="block1-name Poppins text-3xl font-black trans-04 p-b-8">
                                            Men
                                        </span>

                                        <span className="text-sm block1-info trans-04">
                                            Spring 2018
                                        </span>
                                    </div>

                                    <div className="block1-txt-child2 p-b-4 trans-05">
                                        <div className="block1-link cl0 trans-09">
                                            Shop Now
                                        </div>
                                    </div>
                                </a>
                        </div>
                    </div>

                    <div className="size-202 m-lr-auto respon4">
                        <div className=" cursor-pointer block1 wrap-pic-w">
                            <img src={banner3} alt="IMG-BANNER" />

                                <a onClick={()=>{navigate("/store")}} className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                    <div className="block1-txt-child1 flex-col-l">
                                        <span className="block1-name Poppins text-3xl font-black trans-04 p-b-8">
                                            Bags
                                        </span>

                                        <span className="text-sm block1-info trans-04">
                                            New Trend
                                        </span>
                                    </div>

                                    <div className="block1-txt-child2 p-b-4 trans-05">
                                        <div className="block1-link cl0 trans-09">
                                            Shop Now
                                        </div>
                                    </div>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banners
