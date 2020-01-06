import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Nav component - back</Link>
        </li>
        {/* <li>
        <Link to="/running">Running</Link>
      </li>
      <li>
        <Link to="/swimming">Swimming</Link>
      </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
