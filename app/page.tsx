import Image from "next/image";
import React from "react";
import panaversePic from "../public/panaverse.png"
export default function page() {
  return (
    // <div>
    //   <h1
    //   className="text-6xl underline text-center mt-16 text-red-700" >
    //     Hello World Next.js With Tailwind Css!
    //   </h1>
    // </div>
    <div
    className="flex"
    >
      <div>
        <Image src={panaversePic} width={80} height={80} alt="abc" />
      </div>
      <div>
        <h1>Wellcome To Panaverse</h1>
        <h2>A Community Of Web3 And Metaverse Developer</h2>
        <button>Learn More</button>
      </div>
    </div>
  );
}
