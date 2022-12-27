import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";

export function Header() {
  return (
    <div className="container px-4 mx-auto">
      <nav className="py-8 bg-white flex items-center justify-between">
        <div className="flex">
          <NavLink to="/" title="Home">
            <img src={logo} alt="" className="max-w-8 max-h-8" />
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-purple-200 text-purple-600 rounded-md p-2">
            <MapPin size={22} weight="fill" className="text-purple-400" />
            Porto Alegre, RS
          </div>

          <NavLink to="/cart" title="Cart">
            <div className="bg-yellow-200 p-2 rounded-md relative">
              <ShoppingCart
                size={22}
                weight="fill"
                className="text-yellow-700"
              />

              <span className="bg-yellow-700 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs absolute -top-[10px] -right-[10px]">
                3
              </span>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
