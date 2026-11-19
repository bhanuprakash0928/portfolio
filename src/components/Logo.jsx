import { Link } from "react-router-dom";

/** YB monogram + full name. The single logo implementation used by the navbar. */
function Logo({ onClick }) {
  return (
    <Link
      to="/#home"
      className="logo"
      onClick={onClick}
      aria-label="Yettapu Bhanu Prakash Reddy – back to top"
    >
      <span className="logo-mark">
        <img src="/logo-yb.png" alt="" width="26" height="22" />
      </span>
      <span className="logo-name">Yettapu Bhanu Prakash Reddy</span>
    </Link>
  );
}

export default Logo;
