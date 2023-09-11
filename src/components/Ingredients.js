import React from 'react';

const Ingredients = () => {
  return (
    <div className="p-3 flex flex-col text-center md:flex-row md:text-left items-center space-x-5">
      <div className="w-full md:w-1/2">
        <img
          src={require("../images/1.png")}
          className="rounded"
          alt="ingredients"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-4xl font-bold text-red-900 my-4">
          We pride ourselves on making real food from the best ingredients.
        </h3>
        <p className="text-slate-400 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
          tellus.
        </p>
        <button className="bg-red-900 py-2 px-10 rounded mr-2 text-white font-bold hover:bg-slate-300 hover:text-red-900 hover:border-red-900 border transition-all">
          learn more
        </button>
      </div>
    </div>
  );
}

export default Ingredients;