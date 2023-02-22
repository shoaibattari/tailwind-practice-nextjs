import Image from "next/image";
import React from "react";
import panaversePic from "/public/panaverse.png"
export default function page() {
  return (
    <div
    className="flex justify-center bg-gray-100"
    >
      <div className="mx-6 order-last my-8">
        <Image src={panaversePic} width={180} height={80} alt="abc" />
      </div>
      <div className=" mx-7 self-center">
        <h1 className="text-blue-700 text-6xl font-bold">Wellcome To Panaverse</h1>
        <h2 className="text-blue-400 text-4xl font-bold">A Community Of Web3 And Metaverse Developer</h2>
        <button className=" my-4 px-4 py-2 border-2 rounded-lg text-white bg-blue-900" >Learn More</button>
      </div>
    </div>
  );
}
