import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid ">
        {/* <a class="navbar-brand" href="#">
          Navbar w/ text
        </a> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link active">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Register" class="nav-link active">
                Register
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Login" class="nav-link active">
                Login
              </Link>
            </li>
          </ul>
          <span class="navbar-text">WELL COME</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
