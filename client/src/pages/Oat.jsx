import { Button } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const Oat = ({ newMember }) => {
  const [finish, setFinish] = useState(false);

  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center">
        <div className=" shadow-md max-w-[900px] w-[600px] py-10 px-7 text-gray-700">
          <p className=" pb-4">
            I, {newMember.firstname + " " + newMember.lastname}, hereby agree to
            be completely submissive and to abide to every rules that governs
            this program. I also agree to be completely loyal to the leadership
            of this great family Citadel of Treasure Ministry
          </p>
          <p className=" pb-4">
            I also promise to give in my very best to ensure that our church
            becomes great and successful church as God gives me the ability, i
            will not in any way become a rebel and an enemy to this great
            commision.
          </p>
          <div className=" flex justify-end mt-4">
            <Link to={"/"}>
              <Button>Finish!</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Oat;
