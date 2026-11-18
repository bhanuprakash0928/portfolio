import { Link } from "react-router-dom";

/** YB monogram in the original round logo badge + name. Used in the navbar. */
function Logo({ onClick }) {
  return (
    <Link
      to="/#home"
      className="logo"
      onClick={onClick}
      aria-label="Yettapu Bhanu Prakash Reddy – back to top"
    >
      <span className="logo-box">
        <img src="/logo-yb.png" alt="" width="28" height="24" />
      </span>
      <h2>Bhanu Prakash Reddy</h2>
    </Link>
  );
}

export default Logo;
