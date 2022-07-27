import { useRouter } from "next/router";
import React, { useState } from "react";

const Form = () => {
  const router = useRouter();

  const [error, setError] = useState(null);

  const [identity, setIdentity] = useState({
    name: "",
    email: "",
    city: "",
    twitter: "",
    discord: "",
  });
  const [profession, setProfession] = useState("School Student");
  const [professionName, setProfessionName] = useState("");
  const [professionPlaceholder, setProfessionPlaceholder] =
    useState("School Name");
  const [experience, setExperience] = useState(0);
  const [interest, setInterest] = useState("-select-");
  const [looking, setLooking] = useState(
    "To learn and up skill yourself in Web3"
  );

  const handleIdentity = (e) => {
    if (e.target.name == "name") {
      setIdentity((pre) => ({
        name: e.target.value,
        email: pre.email,
        city: pre.city,
        twitter: pre.twitter,
        discord: pre.discord,
      }));
    }
    if (e.target.name == "email") {
      setIdentity((pre) => ({
        name: pre.name,
        email: e.target.value,
        city: pre.city,
        twitter: pre.twitter,
        discord: pre.discord,
      }));
    }
    if (e.target.name == "city") {
      setIdentity((pre) => ({
        name: pre.name,
        email: pre.email,
        city: e.target.value,
        twitter: pre.twitter,
        discord: pre.discord,
      }));
    }
    if (e.target.name == "twitter") {
      setIdentity((pre) => ({
        name: pre.name,
        email: pre.email,
        city: pre.city,
        twitter: e.target.value,
        discord: pre.discord,
      }));
    }
    if (e.target.name == "discord") {
      setIdentity((pre) => ({
        name: pre.name,
        email: pre.email,
        city: pre.city,
        twitter: pre.twitter,
        discord: e.target.value,
      }));
    }
  };

  const handleProfession = (e) => {
    console.log(profession);
    setProfession(e.target.value);
    if (e.target.value == "School Student") {
      setProfessionPlaceholder("School Name");
    }
    if (e.target.value == "College Student") {
      setProfessionPlaceholder("College Name");
    }
    if (e.target.value == "Professional") {
      setProfessionPlaceholder("Company Name");
    }
    if (e.target.value == "Founder") {
      setProfessionPlaceholder("Company Name");
    }
    if (e.target.value == "Other") {
      setProfessionPlaceholder("please specify...");
    }
  };

  const handleProfessionName = (e) => {
    setProfessionName(e.target.value);
  };

  const handleExperience = (e) => {
    setExperience(e.target.value);
  };

  const handleInterest = (e) => {
    setInterest(e.target.value);
  };

  const handleLooking = (e) => {
    setLooking(e.target.value);
  };

  const handleSubmit = async () => {
    var data = {
      identity,
      profession,
      professionName,
      experience,
      interest,
      looking,
    };

    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const fetchResponse = await fetch(
      "http://localhost:3000/api/member",
      settings
    );
    const response = await fetchResponse.json();

    if (fetchResponse.status == 201) {
      // console.log(response);
      router.push("/form2");
    } else {
      // console.log(response);
      setError(response)
      // toast.error("You not have access to this page");
    }
  };

  return (
    <>
      <div className=" bg-w3voilet py-20">
        <div className="form-box bg-white bg-opacity-5 rounded-lg p-20 w-8/12 m-auto">
          <h1 className="text-w3yellow text-3xl font-semibold">
            Kindly help us know you more
          </h1>

          <div className="identity my-3 flex flex-wrap">
            <h2 className="text-lg my-6 w-full font-medium">Your Identity</h2>

            <div className="flex-col flex w-1/2 pr-5">
              <p className="text-xs mb-2 ">Name <span className="text-red-500">*</span> </p>
              <input
                type="text"
                name="name"
                required
                value={identity.name}
                onChange={handleIdentity}
                className="bg-inpvoilet rounded-sm p-1 outline-none"
              />
            </div>
            <div className="flex-col flex w-1/2 ">
              <p className="text-xs mb-2 ">Email <span className="text-red-500">*</span></p>
              <input
                type="email"
                name="email"
                required
                value={identity.email}
                onChange={handleIdentity}
                className="bg-inpvoilet rounded-sm p-1 outline-none"
              />
            </div>
            <div className="flex-col flex w-1/2 pr-5 mt-4">
              <p className="text-xs mb-2 ">City <span className="text-red-500">*</span></p>
              <input
                type="text"
                name="city"
                required
                value={identity.city}
                onChange={handleIdentity}
                className="bg-inpvoilet rounded-sm p-1 outline-none"
              />
            </div>
            <div className="flex-col flex w-1/2 mt-4">
              <p className="text-xs mb-2 ">Twitter Handle <span className="text-red-500">*</span></p>
              <input
                type="text"
                name="twitter"
                required
                value={identity.twitter}
                onChange={handleIdentity}
                className="bg-inpvoilet rounded-sm p-1 outline-none"
              />
            </div>
            <div className="flex-col flex w-1/2 mt-4 pr-5">
              <p className="text-xs mb-2 ">Discord Id <span className="text-red-500">*</span></p>
              <input
                type="text"
                name="discord"
                required
                value={identity.discord}
                onChange={handleIdentity}
                className="bg-inpvoilet rounded-sm p-1 outline-none"
              />
            </div>
          </div>

          <hr className="mt-8 " />

          <div className="profession my-3 flex flex-wrap">
            <h2 className="text-lg my-6 font-medium w-full">
              What describes you best?
            </h2>

            <div className="w-1/3 mb-2">
              <input
                className="mr-2 "
                type="radio"
                readOnly
                value={"School Student"}
                onClick={handleProfession}
                checked={profession == "School Student"}
              />
              School Student
            </div>
            <div className="w-1/3 mb-2">
              <input
                className="mr-2 "
                type="radio"
                value={"College Student"}
                readOnly
                onClick={handleProfession}
                checked={profession == "College Student"}
              />
              College Student
            </div>
            <div className="w-1/3 mb-2">
              <input
                className="mr-2 "
                type="radio"
                value={"Professional"}
                readOnly
                onClick={handleProfession}
                checked={profession == "Professional"}
              />
              Professional
            </div>
            <div className="w-1/3 mb-2">
              <input
                className="mr-2 "
                type="radio"
                value={"Founder"}
                readOnly
                onClick={handleProfession}
                checked={profession == "Founder"}
              />
              Founder
            </div>
            <div className="w-1/3 mb-2">
              <input
                className="mr-2 "
                type="radio"
                value={"Other"}
                readOnly
                onClick={handleProfession}
                checked={profession == "Other"}
              />
              Other
            </div>

            <div className="w-full my-2">
              <input
                type="text"
                value={professionName}
                onChange={handleProfessionName}
                className="bg-inpvoilet rounded-sm p-1 outline-none"
                placeholder={professionPlaceholder}
              />
            </div>
          </div>

          <hr className="mt-8 " />

          <div className="exp my-3 flex flex-wrap">
            <h2 className="text-lg my-6 font-medium w-full">
              Experience level in Web3
            </h2>

            <div className="w-1/4 px-2">
              <input
                className="mr-2 "
                type="radio"
                readOnly
                value={0}
                onClick={handleExperience}
                checked={experience == 0}
              />{" "}
              New to Web3
            </div>
            <div className="w-1/4 px-2">
              <input
                className="mr-2 "
                type="radio"
                readOnly
                value={1}
                onClick={handleExperience}
                checked={experience == 1}
              />{" "}
              6 months exp.
            </div>
            <div className="w-1/4 px-2">
              <input
                className="mr-2 "
                type="radio"
                readOnly
                value={2}
                onClick={handleExperience}
                checked={experience == 2}
              />{" "}
              1-2 years exp.
            </div>
            <div className="w-1/4 px-2">
              <input
                className="mr-2 "
                type="radio"
                readOnly
                value={3}
                onClick={handleExperience}
                checked={experience == 3}
              />{" "}
              2+ years exp
            </div>
          </div>
          <hr className="mt-8 " />

          <div className="interest my-3 flex flex-wrap">
            <h2 className="text-lg my-6 font-medium w-full">
              What interests you most?
            </h2>

            <select
              value={interest}
              onChange={handleInterest}
              className="w-1/2 bg-inpvoilet rounded-sm p-1 outline-none"
            >
              <option value="1">Option1</option>
              <option value="2">Option2</option>
              <option value="3">Option3</option>
            </select>
          </div>

          <hr className="mt-8 " />

          <div className="looking my-3 flex flex-wrap">
            <h2 className="text-lg my-6 font-medium w-full">
              What are you looking in Web3?
            </h2>

            <div className="w-2/4 px-2 my-3">
              <input
                className="mr-2 "
                type="radio"
                readOnly
                value={"To learn and up skill yourself in Web3"}
                onClick={handleLooking}
                checked={looking == "To learn and up skill yourself in Web3"}
              />
              To learn and up skill yourself in Web3
            </div>
            <div className="w-2/4 px-2 my-3">
              <input
                className="mr-2 "
                type="radio"
                readOnly
                value={"To network with like minded folks"}
                onClick={handleLooking}
                checked={looking == "To network with like minded folks"}
              />
              To network with like minded folks
            </div>
            <div className="w-2/4 px-2 my-3">
              <input
                className="mr-2 "
                type="radio"
                readOnly
                value={"Opportunity (job/hands- on projects)"}
                onClick={handleLooking}
                checked={looking == "Opportunity (job/hands- on projects)"}
              />
              Opportunity (job/hands- on projects)
            </div>
            <div className="w-2/4 px-2 my-3">
              <input
                className="mr-2 "
                type="radio"
                readOnly
                value={"Funding for your startup/business idea"}
                onClick={handleLooking}
                checked={looking == "Funding for your startup/business idea"}
              />
              Funding for your startup/business idea
            </div>

            <br />
            <br />
          </div>

          <div className="text-center mt-16">
            <button className="px-5 py-2 bg-inpvoilet" onClick={handleSubmit}>
              Next
            </button>
          </div>

          {error && <p className="text-red-500 text-sm text-center">Fields Marked with * are mandetory</p>}

        </div>
      </div>
    </>
  );
};

export default Form;
