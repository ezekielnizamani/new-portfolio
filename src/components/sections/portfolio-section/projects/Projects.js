import React from "react";
import "./Projects.css";
import Project from "./Project";
import covid from "../../../../assets/projects/covid.PNG";
import movieApp from "../../../../assets/projects/movieApp.PNG";
import outdoors from "../../../../assets/projects/outdoors.PNG";
import portfolio from "../../../../assets/projects/portfolio.PNG";

const projects = [
  {
    image: covid,
    title: "covid-19 tracker",
    overview:
      "A Covid-19 tracker where user can view cases all world use also can view by country and it has map whenever user click on specific country map move to that country built in react js",
  },
  {
    image: movieApp,
    title: "Movie app",
    overview:
      "Watch list movie app where users can search for any movie, add that movie to watch List and Watched list, this project is built in react is hook & context API for state management",
  },
  {
    image: outdoors,
    title: "outdoors",
    overview:
      "Outdoors is a tour agency website This is just a dummy website for practice responsive design",
  },
  {
    image: portfolio,
    title: "portfolio",
    overview:
      "My previous portfolio website to show my work and skills, this is built-in HTML, CSS grid, and Javascript it's fully responsive",
  },
  
];

const Projects = () => (
  <>
    <ul className="projects">
      {projects.map((project) => (
        <Project
          imagePath={project.image}
          name={project.title}
          overview={project.overview}
        />
      ))}
    </ul>
  </>
);

export default Projects;
