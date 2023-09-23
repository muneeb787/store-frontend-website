import { useState } from "react";
import logo from "../../assets/images/icons/logo-01.png"
import HomeSideBar from "./sidebar";
import CartMenu from "./cartMenu";
import { PageRoutes } from "../../routes";
import { Link, useNavigate } from "react-router-dom";
import WishListMenu from "./wishlist";


export default function Header() {
  const [dropDown, setDropDown] = useState(true);
  const [text, setText] = useState("Collections");
  const navigate = useNavigate()

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const selectItem = (item) => {
    setText(item);
    toggleDropDown();
  };


  const [isSidebarOpen, setIsSideOpen] = useState(false);

  // Function to open the Sidebar
  const openSidebar = () => {
    setIsSideOpen(true);
  };

  // Function to close the Sidebar
  const closeSidebar = () => {
    setIsSideOpen(false);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Function to open the Sidebar
  const openCart = () => {
    setIsCartOpen(true);
  };

  // Function to close the Sidebar
  const closeCart = () => {
    setIsCartOpen(false);
  };

  const [isWishOpen, setIsWishOpen] = useState(false);

  const openWish = () => {
    setIsWishOpen(true);
  };

  // Function to close the Sidebar
  const closeWish = () => {
    setIsWishOpen(false);
  };

  return (
    <div className="">
      <HomeSideBar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <CartMenu isOpen={isCartOpen} closeCart={closeCart} />
      <WishListMenu isOpen={isWishOpen} closeCart={closeWish} />
      <div className="bg-white rounded shadow-lg px-10" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-3 lg:pr-16 pr-4">
            <a href="/" className="logo">
              <img src={logo} alt="IMG-LOGO" />
            </a>
          </div>
          {/* For medium and plus-sized devices */}
          <ul className="hidden md:flex flex-auto space-x-2">
            {PageRoutes.map((route) => {
              if (route.status === true) {
                return (
                  <Link key={route.path} to={route.path} className="hover:text-indigo-600 cursor-pointer px-2">{route.title}</Link>
                )
              }
            })}
            {/* <li className="hover:text-indigo-600 cursor-pointer px-2 active-menu" onClick={() => selectItem("Collections")}>Collections</li>
            <li className="hover:text-indigo-600 cursor-pointer px-2" onClick={() => selectItem("Arts")}>Arts</li>
            <li className="hover:text-indigo-600 cursor-pointer px-2" onClick={() => selectItem("Space")}>Space</li>
            <li className="hover:text-indigo-600 cursor-pointer px-2" onClick={() => selectItem("Game")}>Game</li>
            <li className="hover:text-indigo-600 cursor-pointer px-2" onClick={() => selectItem("Utility")}>Utility</li>
            <Link  className="active-menu hover:text-indigo-600 cursor-pointer px-2" to={"/store"}>Cards</Link> */}
          </ul>
          <div className="wrap-icon-header flex-w flex-r-m h-full">
            {/* <div className="flex-c-m h-full p-r-24">
							<div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-modal-search">
								<i className="zmdi zmdi-search"></i>
							</div>
						</div> */}

            <div className="flex-c-m h-full p-l-18 p-r-25 bor5">
              <div onClick={openWish} className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-cart">
                <i className="zmdi zmdi-favorite"></i>
              </div>
            </div>
            <div className="flex-c-m h-full p-l-18 p-r-25 bor5">
              <div onClick={openCart} className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-cart">
                <i className="zmdi zmdi-shopping-cart"></i>
              </div>
            </div>

            <div className="flex-c-m h-full p-lr-19">
              <div onClick={openSidebar} className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-sidebar">
                <i className="zmdi zmdi-menu"></i>
              </div>
            </div>
            <div className="flex-c-m h-full p-lr-19">
              {localStorage.getItem('token') && localStorage.getItem('token') !== "undefined" ? (
                <button onClick={() => {
                  localStorage.setItem('token', 'undefined');
                  navigate('/');
                }} className="flex-c-m cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">Logout</button>
              ) : (
                <button onClick={() => { navigate("/login") }} className="flex-c-m cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">Login/Signup</button>
              )}
            </div>

          </div>
          {/* <div className="flex space-x-5 justify-center items-center pl-2">
            <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <svg
              className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <svg className="cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 " width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </svg>
          </div> */}
        </nav>
        {/* for smaller devices */}
        <div className="block md:hidden w-full mt-5">
          <div
            onClick={toggleDropDown}
            className="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full hover:bg-indigo-700"
          >
            <div className="flex space-x-2">
              <span
                id="s1"
                className={`${text !== "Collections" ? "" : "hidden"
                  } font-semibold text-sm leading-3`}
              >
                Selected:
              </span>
              <p
                id="textClicked"
                className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer"
              >
                {text}
              </p>
            </div>
            <svg id="ArrowSVG" className={`${dropDown ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <ul
            id="list"
            className={`${dropDown ? "hidden" : "block"
              } font-normal text-base leading-4 absolute top-12 w-full rounded shadow-md bg-white`}
          >
            <li
              className="cursor-pointer hover:bg-indigo-100 px-4 py-2"
              onClick={() => selectItem("Collections")}
            >
              Collections
            </li>
            <li
              className="cursor-pointer hover:bg-indigo-100 px-4 py-2"
              onClick={() => selectItem("Arts")}
            >
              Arts
            </li>
            <li
              className="cursor-pointer hover:bg-indigo-100 px-4 py-2"
              onClick={() => selectItem("Space")}
            >
              Space
            </li>
            <li
              className="cursor-pointer hover:bg-indigo-100 px-4 py-2"
              onClick={() => selectItem("Game")}
            >
              Game
            </li>
            <li
              className="cursor-pointer hover:bg-indigo-100 px-4 py-2"
              onClick={() => selectItem("Utility")}
            >
              Utility
            </li>
            <li
              className="cursor-pointer hover:bg-indigo-100 px-4 py-2"
              onClick={() => selectItem("Cards")}
            >
              Cards
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
