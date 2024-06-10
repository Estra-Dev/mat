import { Navbar } from "flowbite-react";
import image1 from "../assets/CHURCHLOGO-removebg-preview.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <Navbar className=" border-b-2 flex justify-center">
      <div className=" flex justify-center items-center">
        <img src={image1} className=" w-10 h-10" alt="" />
        <h2 className=" font-bold text-gray-800">CTM</h2>
      </div>
      <div className=" flex justify-center items-center gap-4 text-sm">
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/about"}>
          <p>About</p>
        </Link>
        <Link to={"register"}>
          <p>Register</p>
        </Link>
      </div>
    </Navbar>
  );
};

export default Nav;
