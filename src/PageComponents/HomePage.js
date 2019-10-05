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
          <li>
            <Link to="/en">EN</Link>
          </li>
          <li>
            <Link to="/fr">FR</Link>
          </li>
          <li>
            <Link to="/es">ES</Link>
          </li>
          <li>
            <Link to="/de">DE</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
