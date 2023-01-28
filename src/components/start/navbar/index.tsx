import React, { useState } from "react";

import "./styles.css";
import iconBrand from "../../../images/icon/brand.svg";
import iconMenu from "../../../images/icon/menu.svg";
import iconClose from "../../../images/icon/close.svg";
import Button from "../../button";

interface Item {
  title: string;
  link: string;
}

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [itemsMenu] = useState<Item[]>([
    {
      title: "About me",
      link: "#about-me",
    },
    {
      title: "Cases",
      link: "#cases",
    },
    {
      title: "Contact",
      link: "#contact",
    },
  ]);

  function handleSidebar(): void {
    setSidebarOpen(!sidebarOpen);
    const sidebar = document.querySelector("#sidebar");
    const overlay = document.querySelector(".overlay");

    if (sidebarOpen) {
      sidebar?.classList.remove("active");
      overlay?.classList.remove("active");
    } else {
      sidebar?.classList.add("active");
      overlay?.classList.add("active");
    }
  }

  return (
    <header>
      <div className="overlay" id="menu"></div>

      {/* Navbar desktop */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container mt-2">
          <a href="/">
            <img
              className="navbar-logo"
              height="28"
              src={iconBrand}
              alt="Logo letra W"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleSidebar}
          >
            <img
              className="align-baseline d-flex"
              src={iconMenu}
              height="24"
              alt="Icon menu"
            />
          </button>
          <div className="collapse navbar-collapse justify-content-lg-end">
            <ul className="navbar-nav">
              {itemsMenu.map((item: Item, index: number) => {
                return (
                  <li key={index} className="ms-5">            
                    <Button type="button-nav" title={item.title} link={item.link} />
                  </li>
                );
              })}    
            </ul>
          </div>
        </div>
      </nav>

      {/* Navbar mobile */}
      <div className="wrapper" id="sidebar">
        <nav className="navbar mt-2">
          <div className="container d-flex justify-content-end">
            <button
              onClick={handleSidebar}
              className="navbar-toggler overlay my-auto"
              type="button"
            >
              <img
                className="align-baseline d-flex"
                src={iconClose}
                alt="ícone de menu"
              />
            </button>
          </div>
        </nav>
        {/* Menu */}
        <div className="container sidebar-content">
          <div className="d-flex justify-content-center">
            <div className="align-self-center">
              <div className="row">
                {itemsMenu.map((item: Item, index: number) => {
                  return (
                    <div key={index} className="col-12 my-4 text-center">
                      <h1 className="heading">
                        <a
                          onClick={handleSidebar}
                          href={item.link}
                          className="sidebar-link"
                        >
                          {item.title}
                        </a>
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
