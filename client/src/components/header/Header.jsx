import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../../main";
import { signOut } from "firebase/auth";
import { Auth } from "../../firebase/firebase";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const Header = () => {
  const [expand, setExpane] = useState(false);
  const { user } = useContext(Context);
  const mobile_menu_Style = expand ? "left-0" : "-left-[800px]";
  const mobile_menu_icon_Style = expand ? "rotate-90" : "rotate-0";
  return (
    <div className="navbar  h-[70px] shadow-md bg-[#f1550c]/20 text-white flex items-center justify-between relative">
      <div className="">
        <Link to={"/"} className=" normal-case text-xl lg:text-3xl ">
          Dǐng Tài Fēng
        </Link>
      </div>
      <div
        className={`menu md:menu-horizontal px-1 bg-orange-500/80 md:bg-transparent fixed md:relative top-[70px] z-20 md:top-[unset] w-[100vw] md:w-[unset]  md:left-[unset] 
        h-[calc(100vh-70px)] md:h-[unset] items-center justify-center  transition-all duration-500 ease-linear ${mobile_menu_Style}`}
      >
        <ul className="menu md:menu-horizontal gap-10 md:gap-[unset]">
          <li
            onClick={() => {
              setExpane(false);
            }}
          >
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li
            onClick={() => {
              setExpane(false);
            }}
          >
            <NavLink to={"/foods"}>Foods</NavLink>
          </li>
          <li
            onClick={() => {
              setExpane(false);
            }}
          >
            <NavLink to={"/chefs"}>Chefs</NavLink>
          </li>
          <li
            onClick={() => {
              setExpane(false);
            }}
          >
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
        </ul>
      </div>
      <div className="">
        {user ? (
          <div className="flex items-center gap-5 ">
            <div className="flex items-center gap-2 flex-col justify-center">
              {user.photoURL ? (
                <div
                  className="w-10 rounded-full relative group cursor-pointer"
                  onClick={() => {
                    setExpane(false);
                  }}
                >
                  <img src={user.photoURL} className=" rounded-full" />
                  <h3 className="font-bold text-white text-sm hidden group-hover:inline-block absolute -bottom-8 z-50 bg-white/20 p-1 w-[100px] rounded-md left-0 ">
                    {user.displayName}
                  </h3>
                </div>
              ) : (
                ""
              )}
            </div>
            <button
              className="btn text-white h-[unset] min-h-[unset] py-2"
              onClick={() => {
                signOut(Auth);
                setExpane(false);
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to={"/user/login"}
            className="btn bg-[#f1550c] hover:bg-[#f1550c] text-white h-[unset] min-h-[unset] py-2"
          >
            Login
          </Link>
        )}
        <FaBars
          className={`text-2xl cursor-pointer md:hidden ml-3 text-black transition-all duration-500 ease-linear ${mobile_menu_icon_Style}`}
          onClick={() => {
            setExpane(!expand);
          }}
        />
      </div>
    </div>
  );
};
export default Header;
