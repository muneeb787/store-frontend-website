import Home from "../pages/Home/home";
import Login from "../pages/Login/login";
import Signup from "../pages/SignUp/signup";
import ProductStore from "../pages/Store/store";
import WishList from "../pages/WishList/wishList";
import ShoppingCart from "../pages/shoppingCart/shopingCart";


export const PageRoutes = [
    
    {
        title: "404",
        path: "*",
        status: false,
        element: <>Hellow</> 
    },
    {
        title: "Home",
        path: "/",
        status: true,
        element: <Home /> 
    },
    {
        title: "Store",
        path: "/store",
        status: true,
        element: <ProductStore /> 
    },
    {
        title: "WishList",
        path: "/wishlist",
        status: false,
        element: <WishList /> 
    },
    {
        title: "Shopping Cart",
        path: "/shoppingCart",
        status: false,
        element: <ShoppingCart /> 
    },
    {
        title: "Login",
        path: "/login",
        status: false,
        element: <Login /> 
    },
    {
        title: "SignUp",
        path: "/signup",
        status: false,
        element: <Signup /> 
    },
]