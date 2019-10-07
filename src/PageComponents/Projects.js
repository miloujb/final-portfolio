import React from "react";
import fencnews from "../images/fencnews.jpg";
import reactorgrow from "../images/reactorgrow.jpg";

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
          <ul class="button-list">
            <li>
              <button>Github</button>
            </li>
            <li>
              <button>Demo</button>
            </li>
          </ul>
        </div>
        <div>
          <h2>ReactorGrow - Mobile App</h2>
          <img src={reactorgrow} alt="reactorGrow" class="reactorgrow"></img>
          <div class="desctext">
            <p>
              A mobile app that is connected to an automated greenhouse
              controlled by a Raspberry Pi and a Python back end. The app shows
              the end user the most up-to-date data from the back end, and
              allows the end user to override the signals sent to the
              greenhouse. This lets the user water the plant or open the
              greenhouse window as and when they require. This app was made with
              React Native, hosted on Expo.
            </p>
            <ul class="button-list">
              <li>
                <button>Github</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
