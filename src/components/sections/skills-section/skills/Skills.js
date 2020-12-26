
import './Skills.css'
import Html from '../../../../assets//icons/html.png';
import Css from "../../../../assets//icons/css.png";
import Javascript from "../../../../assets//icons/javascript.png";
import Sass from "../../../../assets//icons/sass.png";
import Bootstrap from "../../../../assets//icons/bootstrap.png";
import Reactjs from "../../../../assets//icons/reactjs.png";
import Github from "../../../../assets//icons/Github.svg";
import AdobeXd from "../../../../assets//icons/AdobeXD.svg";
const Skills = () => (
  <>
    <ul className="skills">
      <li className="skill">
        <img src={Html} alt="html icon" className="skill-icon" />
        <p className="skill-name">HTML</p>
      </li>
      <li className="skill">
        <img src={Css} alt="CSS icon" className="skill-icon" />
        <p className="skill-name">CSS</p>
      </li>
      <li className="skill">
        <img src={Javascript} alt="Javascript icon" className="skill-icon" />
        <div className="skill-name">JAVASCRIPT</div>
      </li>
      <li className="skill">
        <img src={Sass} alt="sass icon" className="skill-icon" />
        <p className="skill-name">SASS</p>
      </li>
      <li className="skill">
        <img src={Bootstrap} alt="Bootstrap icon" className="skill-icon" />
        <p className="skill-name">BOOTSTRAP</p>
      </li>
      <li className="skill">
        <img src={Reactjs} alt="React js icon" className="skill-icon" />
        <p className="skill-name">React js</p>
      </li>

      <li className="skill">
        <img src={Github} alt="react js icon" className="skill-icon" />
        
        <p className="skill-name">Github & git</p>
      </li>
      <li className="skill">
        <img src={AdobeXd} alt="adobe xd icon" className="skill-icon" />
        <p className="skill-name">Adobe xd</p>
      </li>
    </ul>
  </>
);
export default Skills