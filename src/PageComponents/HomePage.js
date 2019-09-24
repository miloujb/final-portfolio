import React from "react";
import { Link } from "@reach/router";

const HomePage = () => {
  return (
    <>
      <div className="landing">
        <h1>Emily Bailey</h1>
        <h2>Developer | Linguist</h2>
        <h3>Please choose your language:</h3>
        <ul className="languagelist">
          <li>EN</li>
          <li>FR</li>
          <li>ES</li>
          <li>DE</li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
