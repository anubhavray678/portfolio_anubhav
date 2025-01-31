"use client";
import Image from "next/image";
import React from "react";

const services = [
  {
    id: 1,
    img: "/development.png",
    name: "Web Development",
  },
  {
    id: 2,
    img: "/app-development.png",
    name: "UI/UX Design",
  },
  {
    id: 3,
    img: "/ui.png",
    name: "Web Design",
  },
  {
    id: 4,
    img: "/ux.png",
    name: "App development",
  },
];
function Service() {
  return (
    <div>
      <div className="text-center">
        <h2 className=" font-bold text-4xl pt-10">Skills </h2>
        <p className="font-semibold text-gray-600 text-2xl">
          You Dont Hire For Skills, You Hire For Attitude. You Can Always Teach
          Skills.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {services.map((data) => {
          return (
            <div
              key={data.id}
              className="bg-gray-100 p-4 flex flex-col justify-center items-center"
            >
              <img src={data.img} alt="" className="w-[60%] h-[80%] fa-beat" />
              <h4 className="text-center font-bold text-xl">{data.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
    // <div>
    //   <section className="features_area mt-5 mb-5">
    //     <div className="container">
    //       <div className="row justify-content-center">
    //         <div className="col-lg-8 text-center">
    //           <div className="main_title">
    //             <h2 className="text-color-white"> service offers </h2>
    //             <p>
    //               We offer these services <br /> You can contact for any project
    //               and future Collaboration.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row feature_inner">
    //         <div className="col-lg-3 col-md-6">
    //           <div className="feature_item grid justify-items-center">
    //             <Image src={development} alt="" className="w-25" />
    //             <h4>Web Development</h4>
    //           </div>
    //         </div>
    //         <div className="col-lg-3 col-md-6">
    //           <div className="feature_item grid justify-items-center">
    //             <Image src={ui} alt="" className="w-25" />
    //             <h4>UI/ux design</h4>
    //           </div>
    //         </div>
    //         <div className="col-lg-3 col-md-6">
    //           <div className="feature_item grid justify-items-center">
    //             <Image src={ux} alt="" className="w-25" />
    //             <h4>Web design</h4>
    //           </div>
    //         </div>
    //         <div className="col-lg-3 col-md-6">
    //           <div className="feature_item grid justify-items-center">
    //             <Image src={appDev} alt="" className="w-25" />
    //             <h4>App Development</h4>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}

export default Service;
