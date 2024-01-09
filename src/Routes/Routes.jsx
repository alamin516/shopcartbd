import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Product from "../Pages/SinglePage/Product/Product";
import { mens_kurta } from "../data/Men/menKurta";
import Footer from "../Components/Footer/Footer";
import Checkout from "../Pages/Checkout/Checkout";
import SignupPage from "../Pages/SignUp/SignUp";
import SigninPage from "../Pages/SignIn/SignIn";
import ShopPage from "../Pages/Shop/Shop";
import AboutPage from "../Pages/About/About";
import CartPage from "../Pages/Cart/Cart";
import ContactPage from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import Wishlist from "../Pages/Wishlist/Wishlist";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/create-account',
                element: <SignupPage/>
            },
            {
                path: '/signin',
                element: <SigninPage/>
            },
            {
                path: '/about',
                element: <AboutPage/>
            },
            {
                path: '/shop',
                element: <ShopPage/>
                
            },
            {
                path: '/product/:id',
                element: <Product/>,
                loader: async({params}) => mens_kurta.filter(a=> a.id === params.id)
            },
            {
                path: '/cart',
                element: <CartPage/>
            },
            {
                path: '/wishlist',
                element: <Wishlist/>
            },
            {
                path: '/checkout',
                element: <Checkout/>
            },
            {
                path: '/contact',
                element: <ContactPage/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
        ]
    },
    {
        path: '*',
        element: <>
            <Navbar></Navbar>
            <NotFound></NotFound>
            <Footer/>
        </>
    }
])