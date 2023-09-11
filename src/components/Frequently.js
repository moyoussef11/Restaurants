import React from "react";
import Frequentlys from "./Frequentlys";

const Frequently = () => {
  return (
    <div className="p-3 text-center">
      <h2 className="text-red-900 font-bold text-4xl">
        Frequently Asked Questions
      </h2>
      <div className="mt-10 flex flex-col md:flex-row flex-wrap items-center justify-between space-y-4">
        <Frequentlys
          pra="~ Is Foodera Bread really baked fresh each day?"
          desc=" Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language."
        />
        <Frequentlys
          pra="~ Do you bake breads containing animal fats or products?"
          desc=" Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language."
        />
        <Frequentlys
          pra="~ Can I order your products online?"
          desc=" Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language."
        />
        <Frequentlys
          pra="~ When are you opening a shop near me?"
          desc=" Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language."
        />
      </div>
    </div>
  );
};

export default Frequently;
