import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#f1550c] text-gray-300 py-8 flex flex-wrap justify-between">
      <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
        <h3 className="text-lg font-bold mb-4">About Us</h3>
        <p>
          We are a family-owned restaurant serving authentic Chinese cuisine.
        </p>
        <p>Address: 123 Main St, Anytown USA</p>
        <p>Phone: 555-555-5555</p>
        <p>Email: info@myrestaurant.com</p>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
        <h3 className="text-lg font-bold mb-4">Links</h3>
        <ul>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Reservations
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
        <h3 className="text-lg font-bold mb-4">Follow Us</h3>
        <ul className="flex justify-start">
          <li className="mr-4">
            <Link href="#">
              <BsFacebook className="text-gray-300  hover:scale-125 hover:text-white transition duration-300" />
            </Link>
          </li>
          <li className="mr-4">
            <Link href="#">
              <BsTwitter className=" text-gray-300  hover:scale-125 hover:text-white transition duration-300" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <BsInstagram className=" text-gray-300  hover:scale-125 hover:text-white transition duration-300" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
