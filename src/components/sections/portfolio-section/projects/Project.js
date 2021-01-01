import React from 'react'

import "./Project.css"
const Project = ({ imagePath, name, overview }) => (
  <li className="project">
    <img src={imagePath} alt={name} />
    <div className="overlay">
      <p className="project-overview">{overview}</p>
      <a href="#" className="view-live">View Live</a>
    </div>
  </li>
);
export default Project;