import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaPython,
  FaJs,
  FaNode
} from "react-icons/fa";

const TechStack = () => {
  return (
    <div class="tech">
      <h1>Tech Stack</h1>
      <ul>
        <li>
          <FaJs />
        </li>
        <li>
          <FaReact />
        </li>
        <li>
          <FaHtml5 />
        </li>
        <li>
          <FaCss3 />
        </li>
        <li>
          <FaPython />
        </li>
        <li>
          <FaNode />
        </li>
      </ul>
      <p>JavaScript || HTML || CSS || ReactJS || React Native</p>
      <p>Express || SQL || node.js </p>
      <p>Mocha || Chai || Jest || Sinon || Supertest</p>
    </div>
  );
};

export default TechStack;
