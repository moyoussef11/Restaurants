import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Analysis from "./components/Analysis";
import Ingredients from "./components/Ingredients";
import Meal from "./components/Meal";
import Stomach from "./components/Stomach";
import Foods from "./components/Foods";
import Testimonials from "./components/Testimonials";
import Frequently from "./components/Frequently";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='container mx-auto'>
      <Nav />
      <Hero />
      <Analysis />
      <Ingredients />
      <Meal />
      <Stomach />
      <Foods />
      <Testimonials />
      <Frequently />
      <Footer />
    </div>
  );
}

export default App;
