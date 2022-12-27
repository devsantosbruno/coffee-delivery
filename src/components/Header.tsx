import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div>
      <h1>Header</h1>

      <nav>
        <NavLink to="/" title="Home">
          Home
        </NavLink>

        <NavLink to="/payment" title="Payment">
          Payment
        </NavLink>
      </nav>
    </div>
  );
}
