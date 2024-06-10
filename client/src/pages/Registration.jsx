import { Alert, Button, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Survey from "./Survey";

const Registration = ({
  userInfo,
  inProgress,
  errMsg,
  error,
  setUserInfo,
  handleSubmit,
  newMember,
  survey,
  qst,
  setQst,
  handleSurvey,
  oat,
}) => {
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <>
      <div className=" pt-6">
        <div className=" text-center py-6 px-3">
          <h1 className=" font-semibold text-gray-800 text-2xl md:text-4xl font-serif">
            Ministers Advancement Training (M.A.T) Form
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
    </>
  );
};

export default Registration;
