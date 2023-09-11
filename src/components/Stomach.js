import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faVideo } from "@fortawesome/free-solid-svg-icons";


const Stomach = () => {
  return (
    <div className="px-3 py-20 text-center bg-slate-200">
      <h2 className="text-4xl text-red-900 font-bold">
        When a man's stomach is full it makes no <br /> difference whether he is
        rich or poor.
      </h2>
      <p className="m-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus
        <br />a odio finibus bibendum in sit amet leo. Mauris feugiat erat
        tellus.
      </p>
      <a href="https://www.youtube.com/" target="_blank">
        <FontAwesomeIcon icon={faVideo} /> watch our story
      </a>
    </div>
  );
}

export default Stomach;