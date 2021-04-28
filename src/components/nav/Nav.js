import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="ui secondary menu inverted">
      <div className="menu">
        <Link to="/" className="item">
          Colin Schlecht
        </Link>
        <a href="https://www.linkedin.com/in/colin-schlecht-390916a8/" className="item">
        <i class="linkedin icon"></i>
        </a>
        <a href="https://github.com/colinschlecht" className="item">
        <i class="github square icon "></i> 
        </a>
        <a href="https://colinschlecht.medium.com/" className="item">
        <i class="medium icon "></i>
        </a>
      </div>
    </div>
  );
}
