import React, { useState } from "react";
import { Navbar } from "flowbite-react";

import { Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import History from "../Pages/History";
import { GlobalContext } from "./Context";

export default function TestNav() {
  const { signInGoogle, isAuth, logOut } = GlobalContext();
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <Navbar className="bg-gray-500" fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
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

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
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

          {/* <Navbar.Link href="/navbars" className="text-gray-800">
            Services
          </Navbar.Link> */}
          {/* <Navbar.Link href="/navbars">Pricing</Navbar.Link> */}
          {/* <Navbar.Link href="/navbars">Contact</Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>

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
