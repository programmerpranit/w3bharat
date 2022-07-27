import React from "react";
import Image from "next/image";

const Bootcamp = () => {
  return (
    <>
      <div className="bootcamp bg-w3voilet text-center ">
        <h1 className="pb-3 pt-14 text-3xl font-semibold text-center">
          Web3Bharat <span className="text-w3yellow "> Bootcamp</span>
        </h1>

        <p className="text-lg text-center mt-3 leading-6">
          We just launched a new 30 days web3 course! Get started here
        </p>

        <p className="text-2xl mt-7 pb-8 font-medium text-center">
          The Value we provide
        </p>

        <div className=" flex m-auto justify-center flex-wrap">
          <div className="bg-bootcamp flex justify-between items-center py-8 px-7 w-[345px] rounded-2xl mx-5 my-3">
            <p className="font-semibold text-white text-lg leading-6">
              Curated Content Everyday
            </p>

            <Image src={"/content.png"} width={78} height={78} alt="" />
          </div>

          <div className="bg-bootcamp flex justify-between items-center py-8 px-7 w-[345px] rounded-2xl mx-5 my-3">
            <p className="font-semibold text-white text-lg leading-6">
            Weekly Session with Expert
            </p>

            <Image src={"/content2.png"} width={78} height={78} alt="" />
          </div>
          <div className="bg-bootcamp flex justify-between items-center py-8 px-7 w-[345px] rounded-2xl mx-5 my-3">
            <p className="font-semibold text-white text-lg leading-6">
            Deep Dive Web3 With Community
            </p>

            <Image src={"/content4.png"} width={78} height={78} alt="" />
          </div>
          <div className="bg-bootcamp flex justify-between items-center py-8 px-7 w-[345px] rounded-2xl mx-5 my-3">
            <p className="font-semibold text-white text-lg leading-6">
            Milestone Points
            </p>

            <Image src={"/content6.png"} width={70} height={70} alt="" />
          </div>
          <div className="bg-bootcamp flex justify-between items-center py-8 px-7 w-[345px] rounded-2xl mx-5 my-3">
            <p className="font-semibold text-white text-lg leading-6">
            W3Bharat Discord Access
            </p>

            <Image src={"/content3.png"} width={70} height={70} alt="" />
          </div>
          <div className="bg-bootcamp flex justify-between items-center py-8 px-7 w-[345px] rounded-2xl mx-5 my-3">
            <p className="font-semibold text-white text-lg leading-6">
            Qualified for Web3Bharat cohort- hands on project
            </p>

            <Image src={"/content5.png"} width={85} height={85} alt="" />
          </div>
        </div>


        <button className="enroll-now mt-12  py-3 px-7 font-semibold m-auto text-black rounded-full" >Enroll Now</button>

        <p className="text-lg py-7">On completion, an NFT will be Airdropped to your metamask wallet address.</p>


      </div>
    </>
  );
};

export default Bootcamp;
