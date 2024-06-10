import { Button, Select, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import Oat from "./Oat";

const Survey = ({ newMember, qst, setQst, handleSurvey, oat }) => {
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setQst({ ...qst, [name]: value });
  };

  console.log(qst);

  return (
    <>
      <div className=" max-w-[700px] mx-auto px-5">
        <div className=" py-6">
          <h3 className=" text-[14px] font-semibold">
            Welcome, {newMember.firstname + " " + newMember.lastname}
          </h3>
          <h1 className=" text-3xl font-semibold mt-4">
            Kindly complete the Survey
          </h1>
        </div>
        <form
          className=" flex flex-col justify-center gap-3 mt-6 py-6"
          onSubmit={handleSurvey}
        >
          <div className=" flex flex-col gap-2">
            <label htmlFor="qst1">When did you join C.T.M?</label>
            <TextInput
              type="date"
              name="qst1"
              value={qst.qst1}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label htmlFor="qst2">Your current Position/Office?</label>
            <TextInput
              type="text"
              placeholder="e.g: Admin"
              name="qst2"
              value={qst.qst2}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label htmlFor="qst3">When did you become Born again?</label>
            <TextInput
              type="text"
              placeholder="2020"
              name="qst3"
              value={qst.qst3}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label htmlFor="qst4">
              Have you handle any Office in any Church outside C.T.M before?
            </label>
            <Select onChange={handleChange} name="qst4">
              <option value={"yes"}>Yes</option>
              <option value={"no"}>No</option>
            </Select>
          </div>
          <div className=" flex flex-col gap-2">
            <label htmlFor="qst5">What is your major area of Assignment?</label>
            <TextInput
              type="text"
              placeholder="e.g: Evangelism"
              name="qst5"
              value={qst.qst5}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label htmlFor="qst6">Marital Status</label>
            <Select name="qst6" onChange={handleChange}>
              <option value={"married"}>Married</option>
              <option value={"single"}>Single</option>
              <option value={"divorced"}>Divorced</option>
              <option value={"relationship"}>In a Relationship</option>
              <option value={"notsay"}>Prefer not to say</option>
            </Select>
          </div>
          <div className=" flex justify-end gap-3 mt-4">
            <Link to={"/?tab=oat"}></Link>
            <Button>Continue</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Survey;
