import axios from "axios";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";

export function Header() {
  const [userLocation, setUserLocation]: any = useState({});

  useEffect(() => {
    const successfullLookup = (position: any) => {
      const { latitude, longitude } = position.coords;
      axios
        .get(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=9d12a3f37e79498ea1bdce12a557d55d`,
          {}
        )
        .then((response) => {
          setUserLocation({
            city: response.data.results[0].components.city,
            stateCode: response.data.results[0].components.state_code,
          });
        });
    };
    window.navigator.geolocation.getCurrentPosition(successfullLookup);
  }, []);

  return (
    <div className="shadow-md sticky top-0 py-8 bg-gray-100 ">
      <div className="container px-4 lg:px-14 mx-auto">
        <nav className="flex items-center justify-between">
          <div className="flex">
            <NavLink to="/" title="Home">
              <img src={logo} alt="" className="max-w-8 max-h-8" />
            </NavLink>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-purple-200 text-purple-800 rounded-md p-2">
              <MapPin size={22} weight="fill" className="text-purple-400" />
              {`${userLocation.city}, ${userLocation.stateCode}`}
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
    </div>
  );
}
