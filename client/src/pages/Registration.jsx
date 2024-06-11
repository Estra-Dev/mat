import { Alert, Button, Spinner, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Survey from "./Survey";
import axios from "axios";
import Oat from "./Oat";

const Registration = () => {
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // const [register, setRegister] = useState(false);
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
          navigate("/register/?tab=survey");
        }
      } catch (error) {
        console.log(error);
      }
    }
    // setInProgress(false);
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
          navigate("/register/?tab=oat");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {!tab && (
        <div className=" pt-6">
          <div className=" text-center py-6 px-3">
            <h1 className=" font-semibold text-gray-800 text-2xl md:text-4xl font-serif">
              Ministers/Leaders Advancement Training (M.A.T) Form
            </h1>
          </div>
          <form
            className=" w-[80%] md:w-[50%] mx-auto flex flex-col gap-3 mt-6"
            onSubmit={handleSubmit}
          >
            <div className=" flex flex-col gap-2">
              <label htmlFor="firstname">First Name:</label>
              <TextInput
                type="text"
                placeholder="Your First Name"
                name="firstname"
                value={userInfo.firstname}
                onChange={handleChange}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label htmlFor="lastname">Last Name:</label>
              <TextInput
                type="text"
                placeholder="Your Last Name"
                name="lastname"
                value={userInfo.lastname}
                onChange={handleChange}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label htmlFor="address">Address:</label>
              <TextInput
                type="text"
                placeholder="Your Address"
                name="address"
                value={userInfo.address}
                onChange={handleChange}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label htmlFor="phone">Phone:</label>
              <TextInput
                type="number"
                placeholder="Your Phone No."
                name="phone"
                value={userInfo.phone}
                onChange={handleChange}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label htmlFor="nationality">Nationality:</label>
              <TextInput
                type="text"
                placeholder="e.g: Nigeria"
                name="nationality"
                value={userInfo.nationality}
                onChange={handleChange}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label htmlFor="email">Email:</label>
              <TextInput
                type="email"
                placeholder="Email Address"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
              />
            </div>
            <div>{error && <Alert color={"failure"}>{errMsg}</Alert>}</div>
            <div className=" flex justify-end mt-4">
              <Button type="submit" disabled={inProgress}>
                {inProgress ? <Spinner /> : "Register"}
              </Button>
              <Link></Link>
            </div>
          </form>
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

export default Registration;
