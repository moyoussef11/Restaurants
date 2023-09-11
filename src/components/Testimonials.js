import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <div className="bg-red-900 p-3 text-center overflow-hidden">
      <h2 className="text-white font-bold text-4xl my-10">Testimonials</h2>

      <motion.div className="cursor-grab" ref={carouselRef}>
        <motion.div
          className="min-w-[30rem] flex space-x-10"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          <div className="bg-white rounded w-1/2 p-10">
            <img
              src={require("../images/g.jpg")}
              alt="girl"
              className="h-20 w-20 rounded-full mx-auto"
            />
            <p className="text-slate-400 my-1">
              "Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. "
            </p>
            <span className="text-red-900 font-bold">
              Maccy Doe - Front End
            </span>
          </div>
          <div className="bg-white rounded w-1/2 p-10">
            <img
              src={require("../images/p.jpg")}
              alt="girl"
              className="h-20 w-20 rounded-full mx-auto"
            />
            <p className="text-slate-400 my-1">
              "Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. "
            </p>
            <span className="text-red-900 font-bold">
              Johnthan Doe - UX Designer
            </span>
          </div>
          <div className="bg-white rounded w-1/2 p-10">
            <img
              src={require("../images/gg.jpg")}
              alt="girl"
              className="h-20 w-20 rounded-full mx-auto"
            />
            <p className="text-slate-400 my-1">
              "Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. "
            </p>
            <span className="text-red-900 font-bold">
              Simab Dave - Web Designer
            </span>
          </div>
          <div className="bg-white rounded w-1/2 p-10">
            <img
              src={require("../images/g.jpg")}
              alt="girl"
              className="h-20 w-20 rounded-full mx-auto"
            />
            <p className="text-slate-400 my-1">
              "Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. "
            </p>
            <span className="text-red-900 font-bold">
              Simab Dave - Web Designer
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
