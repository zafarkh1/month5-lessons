import React from "react";
import About from "../About/About";
// import { add, multiply } from "../reExport/reExport";

import styles from './home.module.css'

const Home = () => {
	// console.log(add(9, 8));
	// console.log(multiply(5, 9));
  return (
    <>
		<h2 className="heading">Xayr, Dunyo!</h2>
      <About />
    </>
  );
};

export default Home;