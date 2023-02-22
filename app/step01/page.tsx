import Image from "next/image";
import React from "react";
import panaversePic from "/public/panaverse.png"
// import panaversePic from "../public/thirteen.svg";
export default function page() {
  return (
    <div
    className="flex justify-center bg-gray-100"
    >
      <div className="mx-6 order-last" >
        <Image src={panaversePic} width={80} height={80} alt="abc" />
      </div>
      <div className=" mx-7 self-center">
        <h1>Wellcome To Panaverse</h1>
        <h2>A Community Of Web3 And Metaverse Developer</h2>
        <button>Learn More</button>
      </div>
    </div>
  );
}
