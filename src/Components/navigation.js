import { Link } from 'react-router-dom';
import {  FaArrowLeft } from 'react-icons/fa'
const Navigation = () => (
    <nav>
    <ul>
      <li>
        <Link to="/"><FaArrowLeft /> </Link>
      </li>
      <li>
        <Link to="/details"> <FaArrowLeft /> </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;