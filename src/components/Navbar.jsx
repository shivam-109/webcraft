import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Shivam Patel
      </Link>

      <div className="nav-links">
        <Link to="/#about">About</Link>
        <Link to="/#skills">Skills</Link>
        <Link to="/#experience">Experience</Link>
        <Link to="/#projects">Projects</Link>
      </div>
    </nav>
  );
}