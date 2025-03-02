import "react";
import { Link } from "react-router-dom";
import "./Styles/GetStarted.css"

function GetStarted() {
  return (
    <div className="get-started-container">
      <h1>Get Started</h1>
      <p>Begin your journey with us today!</p>
      <Link to="/dashboard">
        <button className="btn btn-primary">Start Now</button>
      </Link>
    </div>
  );
}

export default GetStarted;

