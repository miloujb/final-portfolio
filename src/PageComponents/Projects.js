import React from "react";
import fencnews from "../images/fencnews.jpg";

const Projects = () => {
  return (
    <div class="projects">
      <h1>Projects</h1>
      <p>
        Here are some of the projects I have been working on. Please keep
        checking back for more!
      </p>
      <div>
        <h2>NC News - Front End Edition</h2>
        <img src={fencnews} alt="NC NEWS" class="techproj"></img>
        <div class="desctext">
          <p>
            A news aggregation board that emulates sites such as Reddit. Written
            in JavaScript, using ReactJS, this fetches information from an API
            made up of a PostgreSQL database, using Express.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
