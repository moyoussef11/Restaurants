import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Meal = () => {
    return (
      <div className="flex items-center flex-col text-center md:flex-row md:text-left p-3">
        <div className="w-full md:w-1/2">
          <h3 className="text-red-900 font-bold text-4xl mb-3">
            We make everything by hand with the best possible ingredients.
          </h3>
          <p className="my-3 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
          </p>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                size="2x"
                className="text-red-900 mx-3"
              />
              Etiam sed dolor ac diam volutpat.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                size="2x"
                className="text-red-900 mx-3"
              />
              Erat volutpat aliquet imperdiet.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                size="2x"
                className="text-red-900 mx-3"
              />
              purus a odio finibus bibendum.
            </li>
          </ul>
          <button className="bg-red-900 py-2 px-10 rounded text-white font-bold hover:bg-slate-300 hover:text-red-900 hover:border-red-900 border transition-all my-4">
            order now
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img src={require("../images/2.png")} alt="meal" />
        </div>
      </div>
    );
}

export default Meal;