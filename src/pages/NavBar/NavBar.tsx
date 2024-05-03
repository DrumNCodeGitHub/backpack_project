import React, { useEffect, useRef } from "react";
import "./NavBar.scss";
import { ListItem } from "../../types";
import burger from "../../images/svg/burger_menu.svg";
import close from "../../images/svg/close_menu.svg";

type Props = {
  activePage: string;
  onPageChange: (page: string) => void;
};

export const NavBar: React.FC<Props> = ({ activePage, onPageChange }) => {
  const navLinksList: ListItem[] = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "journey",
      title: "Our Journey",
    },
    {
      id: "product",
      title: "Product",
    },
    {
      id: "reviews",
      title: "Reviews",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  function handleLinkCLick(id: string) {
    onPageChange(id);
    setIsMenuOpen(false);
  }

  return (
    <nav className="NavBar">
      <div className="logo" onClick={() => handleLinkCLick("home")}>
        <a href="#home">Backpack</a>
      </div>

      <div className="burger-icon">
        <img
          src={burger}
          alt="burger-menu"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(true);
          }}
        />
      </div>
      <div
        className={"sidebar-menu " + (isMenuOpen ? "opened" : "")}
        ref={sidebarRef}
      >
        <div className="close-section">
          <img
            src={close}
            alt="close-menu"
            className="close"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
        <ul className="sidebar-links">
          {navLinksList.map((item) => (
            <li
              className={
                "sidebar-item " + (activePage === item.id ? "active" : "")
              }
              key={item.id}
              onClick={() => handleLinkCLick(item.id)}
            >
              <a href={"#" + item.id}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <ul className="nav-links">
        {navLinksList.map((item) => (
          <li
            className={"nav-item " + (activePage === item.id ? "active" : "")}
            key={item.id}
            onClick={() => onPageChange(item.id)}
          >
            <a href={"#" + item.id}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
