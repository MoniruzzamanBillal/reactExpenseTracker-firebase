import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import History from "../Pages/History";

import "./Navbar.css";
import { GlobalContext } from "./Context";

export default function NavBar() {
  const { theme, ToggleTheme, signInGoogle, isAuth, logOut } = GlobalContext();
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div className="NavParentContainer bg-white">
        <div className="container bg-gray-300">
          <div className="navContainer ">
            <div className="NavWrapper">
              {/* navLeft side  */}
              <div className="logo navLeft">
                <a href="/" className="flex items-center">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-8 mr-3"
                    alt="Flowbite Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                    Logo
                  </span>
                </a>
              </div>

              {/* navLeft side ends  */}
              {/* middle side  */}
              <div className="NavLinks middle ">
                <ul className={menuActive ? "Menu MobileMenuLink" : "Menu"}>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 text-2xl text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                    onClick={() =>
                      menuActive
                        ? setMenuActive(!menuActive)
                        : setMenuActive(menuActive)
                    }
                  >
                    Home
                  </Link>

                  <Link
                    to="/history"
                    className="block py-2 pl-3 pr-4 text-2xl text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                    onClick={() =>
                      menuActive
                        ? setMenuActive(!menuActive)
                        : setMenuActive(menuActive)
                    }
                  >
                    History
                  </Link>
                </ul>
              </div>
              {/* middle side ends  */}
              {/* navRight side  */}
              <div className=" navRight">
                <div className="changeTheme">
                  {!isAuth ? (
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
                      onClick={() => signInGoogle()}
                    >
                      sign in
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
                      onClick={() => logOut()}
                    >
                      sign Out
                    </button>
                  )}
                </div>

                <div className="HamBurgerMenu ">
                  <i
                    className={menuActive ? " ri-close-line " : "ri-menu-line"}
                    onClick={() => setMenuActive(!menuActive)}
                  ></i>
                </div>
              </div>
              {/* navRight side ends  */}
            </div>
          </div>
        </div>
      </div>

      {/* navbar ends  */}

      {isAuth && (
        <>
          <div className="routesComponents bg-gray-50 h-full pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
}
