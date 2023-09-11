import React from "react";
import { food } from "../Data/Food";

const Foods = () => {
  const foods = food.map((food) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" key={food.id}>
      <img className="w-full rounded" src={food.pic} alt={food.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{food.title}</div>
        <p className="text-gray-700 text-base">Time:{food.time}Minutes</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-bold text-red-900 mr-2 mb-2">
          ${(food.price - 1.5).toFixed(3)}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 line-through">
          ${food.price}
        </span>
      </div>
      <button className="bg-red-900 py-2 px-10 rounded text-white font-bold hover:bg-slate-300 hover:text-red-900 hover:border-red-900 border transition-all my-4">
        order now
      </button>
    </div>
  ));
  return (
    <div className="text-center p-5">
      <h2 className="font-bold text-4xl text-red-900 m-3">Explore Our Foods</h2>
      <p className="w-1/2 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus
        a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far
        far away, behind the word mountains, far from the countries Vokalia and
        Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove.
      </p>
          <div className='py-10 flex flex-col md:flex-row items-center justify-around flex-wrap'>
              {foods}
      </div>
    </div>
  );
};

export default Foods;
