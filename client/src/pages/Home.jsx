import { Link } from "react-router-dom";
import image1 from "../assets/CHURCHLOGO-removebg-preview.png";
import { MdArrowRightAlt } from "react-icons/md";
import { Button } from "flowbite-react";
// import { useEffect, useState } from "react";
// import Registration from "./Registration";
// import axios from "axios";
// import Survey from "./Survey";
// import Oat from "./Oat";

const Home = () => {
  return (
    <>
      <div className=" h-screen max-w-[1200px] mx-auto">
        <div className=" flex flex-col md:flex-row gap-3 justify-center items-center py-10">
          <div className=" px-4">
            <p className=" text-sm">PRESENTS:</p>
            <h1 className=" font-bold text-3xl text-gray-800">
              Ministers/Leaders Advancement Training (M.A.T)
            </h1>
            <p className=" italic text-[14px] mb-6">
              The one Training for all Ministers, Pastors and Upcoming
              Ministers...
            </p>
            <Link to={"/register"}>
              <Button gradientDuoTone={"purpleToPink"} outline>
                <p className=" ">Register Now</p>
                <MdArrowRightAlt className=" pl-1 text-2xl text-gray-800" />
              </Button>
            </Link>
          </div>
          <div className="">
            <img src={image1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
