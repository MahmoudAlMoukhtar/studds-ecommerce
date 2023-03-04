import React from "react";
import {motion, useTransform, useViewportScroll} from "framer-motion";
//import WhyChoose from "../../WhyChose";

const ourTeam = [
  {
    img: "/images/person_1.jpg",
    name: "Lawson Arnold",
    title: "CEO, Founder, Atty.",
    descripWork:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    img: "/images/person_2.jpg",
    name: "Jeremy Walker",
    title: "CEO, Founder, Atty.",
    descripWork:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    img: "/images/person_3.jpg",
    name: "Patrik White",
    title: "CEO, Founder, Atty.",
    descripWork:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    img: "/images/person_1.jpg",
    name: "Test Al-test",
    title: "Front-end Developer.",
    descripWork:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
];

const OurTeam = () => {
  //const {data: ourTeam, loading, error} = useFetch("ourTeam");
  // if (error) throw error;
  // if (loading) return <Spinner />;

  const Employee = ({img, name, title, descripWork}) => {
    return (
      <div id="card-employ" className="flex flex-col gap-y-6 w-64">
        <img src={img} alt="" className="" width={300} height={300} />
        <a href="#home">
          <h2 className="text-3xl font-normal underline text-gray-800">
            {name}
          </h2>
        </a>
        <p className="text-gray-500">{title}</p>
        <p className="text-gray-500">{descripWork}</p>
        <a href="#home" className="underline font-medium text-gray-800">
          Learn More
        </a>
      </div>
    );
  };

  return (
    <section
      id="ourTeam"
      className="px-16 flex flex-col justify-center gap-20 w-full mt-40"
    >
      <h1 className="text-3xl font-semibold text-center">Our Team</h1>
      <div className="flex flex-wrap justify-center items-center gap-8 w-full">
        {ourTeam.map(employee => {
          return <Employee {...employee} key={employee.name} />;
        })}
      </div>
    </section>
  );
};

const AboutPage = () => {
  const container = {
    hidden: {opacity: 1, scale: 0},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div className="flex flex-col gap-20 items-center my-40 py-20 px-10 md:px-20 lg:px-40 xl:px-56 w-full bg-[#d9d4ce]">
      <motion.div
        variants={container}
        whileInView="visible"
        initial="hidden"
        className="container flex flex-row-reverse flex-wrap md:flex-nowrap justify-center gap-20  items-center w-full"
      >
        <div className="flex flex-col gap-6 text-center">
          <h4 className="text-4xl tracking-[0.2em] font-bold">ABOUT US</h4>
          <p>
            Motorcycle Helmets From full face sports helmets to modular helmets
            or open face urban helmets; whether you are heading out onto the
            open road or down onto the racing track, a quality motorcycle helmet
            is a necessity. We believe that safety, comfort and style are the
            most important aspects to consider when choosing a new motorbike
            helmet, and we believe the helmets in our collection are some of the
            safest, most comfortable and stylish lids available on the market
            today. As one of the largest online retailers of quality motorcycle
            helmets, we stock helmets of every shape, style, size and design
            from world-renowned brands such as Arai, AGV, Shoei, Shark and Bell.
            In the Moto Central collection, you will find a huge selection of
            competitively priced off-road helmets, carbon helmets, novelty
            helmets and Race Replica lids, in addition to our comprehensive
            range of helmet spares and accessories including visors, peaks,
            padding, anti-fog and Bluetooth Systems.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
