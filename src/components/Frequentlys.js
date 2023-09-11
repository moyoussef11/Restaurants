import React from "react";

const Frequentlys = (props) => {
  return (
    <div className="w-full md:w-1/2 text-left">
      <h3 className="font-bold text-red-900">{props.pra}</h3>
      <p>{props.desc}</p>
    </div>
  );
};

export default Frequentlys;
