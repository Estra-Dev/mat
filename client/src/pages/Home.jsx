import { Link, useLocation, useNavigate } from "react-router-dom";
import image1 from "../assets/CHURCHLOGO-removebg-preview.png";
import { MdArrowRightAlt } from "react-icons/md";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import Registration from "./Registration";
import axios from "axios";
import Survey from "./Survey";
import Oat from "./Oat";

const Home = () => {
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();
  const [inProgress, setInProgress] = useState(false);
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [newMember, setNewMember] = useState("");
  const [survey, setSurvey] = useState(false);
  const [oat, setOat] = useState(false);

  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    console.log(tabFromUrl);

    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    address: "",
    phone: 0,
    nationality: "",
    email: "",
  });

  const [qst, setQst] = useState({
    qst1: "",
    qst2: "",
    qst3: "",
    qst4: "yes",
    qst5: "",
    qst6: "married",
  });

  console.log(userInfo);
  console.log(qst);

  const handleSubmit = async (ev) => {
    setInProgress(true);

    setErrMsg("");
    setError(false);
    ev.preventDefault();

    if (
      userInfo.firstname === "" ||
      userInfo.lastname === "" ||
      userInfo.address === "" ||
      userInfo.nationality === "" ||
      userInfo.email === ""
    ) {
      setInProgress(false);
      setError(true);
      setErrMsg("All fields are required");
    } else if (userInfo.phone.length < 11) {
      setInProgress(false);
      setError(true);
      setErrMsg("Phone No. cannot be less than 11 digits");
    } else {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_URL}/member/register`,
          userInfo,
          { headers: { "Content-Type": "application/json" } }
        );
        console.log(res);
        if (res.status === 201) {
          setNewMember(res.data);
          setInProgress(false);
          // setSurvey(true);
          navigate("/?tab=survey");
        }
      } catch (error) {
        console.log(error);
      }
    }
    setInProgress(false);
  };

  const handleSurvey = async (ev) => {
    ev.preventDefault();
    setInProgress(true);
    setErrMsg("");
    setError(false);

    console.log("newmember", newMember);

    if (
      qst.qst1 === "" ||
      qst.qst2 === "" ||
      qst.qst3 === "" ||
      qst.qst5 === ""
    ) {
      setInProgress(false);
      setError(true);
      setErrMsg("All fields are required");
    } else {
      try {
        const res = await axios.put(
          `${import.meta.env.VITE_URL}/member/survey/${newMember._id}`,
          qst,
          { headers: { "Content-Type": "application/json" } }
        );
        console.log(res);
        if (res.status === 201) {
          // setNewMember(res.data.firstname + " " + res.data.lastname);
          setInProgress(false);
          setSurvey(true);
          // setOat(true);
          navigate("/?tab=oat");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      {!tab && (
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
              <Link to={"/?tab=register"}>
                <Button
                  gradientDuoTone={"purpleToPink"}
                  outline
                  onClick={() => setRegister(true)}
                >
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
      )}
      {tab === "oat" && <Oat newMember={newMember} />}
      {tab === "survey" && (
        <Survey
          newMember={newMember}
          qst={qst}
          setQst={setQst}
          handleSurvey={handleSurvey}
          oat={oat}
        />
      )}
      {tab === "register" && (
        <Registration
          qst={qst}
          setQst={setQst}
          userInfo={userInfo}
          inProgress={inProgress}
          errMsg={errMsg}
          error={error}
          setUserInfo={setUserInfo}
          handleSubmit={handleSubmit}
          newMember={newMember}
          survey={survey}
          handleSurvey={handleSurvey}
          oat={oat}
        />
      )}
    </>
  );
};

export default Home;
