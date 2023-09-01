import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/loader/Loader";
const Layout = () => {
  return (
    <>
      <Header />
    
        <ToastContainer />
        <Loader />
        <Outlet />
     
      <Footer />
    </>
  );
};
export default Layout;
