import React from "react";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { getUser, auth, firebase } from "../firebase";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const user = getUser();

  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <img
            className="logo-img"
            src={Logo}
            width={60}
            height={60}
            alt="logo"
            align="CENTER"
          />
          <span className="ml-3 text-xl">FreeChat</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `mr-5 duration-200 ${
                isActive ? "text-customColor" : ""
              } hover:text-white`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `mr-5 duration-200 ${
                isActive ? "text-customColor" : ""
              } hover:text-white`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `mr-5 duration-200 ${
                isActive ? "text-customColor" : ""
              } hover:text-white`
            }
          >
            About
          </NavLink>
          <div>{user ? <SignOut /> : <SignIn />}</div>
        </nav>
      </div>
    </header>
  );
};

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button
        size="lg"
        variant="outlined"
        color="blue-gray "
        className="bg-white flex items-center gap-3 p-1.5 rounded-3xl"
        onClick={signInWithGoogle}
      >
        <img
          src="https://docs.material-tailwind.com/icons/google.svg"
          alt="metamask"
          className="h-6 w-6"
        />
      </button>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button
        className="sign-out bg-[#F7BE38] text-white p-1.5 rounded-lg"
        onClick={() => auth.signOut()}
      >
        <FaSignOutAlt />
      </button>
    )
  );
}

export default Header;
