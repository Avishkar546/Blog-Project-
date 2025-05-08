import React from "react";
import Container from "../container/Container";
import { useSelector } from "react-redux";
import { Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const navigate = useNavigate();

  const navItem = [
    { name: "Home", path: "/", active: true },
    { name: "All post", path: "/all-post", active: isLoggedin },
    { name: "Add post", path: "/add-post", active: isLoggedin },
    { name: "Register", path: "/signup", active: !isLoggedin },
    { name: "Login", path: "/login", active: !isLoggedin },
  ];
  return (
    <header className="py-3 shadow bg-gray-300">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItem.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full"
                    onClick={() => navigate(item.path)}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {isLoggedin && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
