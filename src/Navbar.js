import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </li>
      </ul>
    </nav>
  );
}
