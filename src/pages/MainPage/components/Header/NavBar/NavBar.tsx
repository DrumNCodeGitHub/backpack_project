import React from "react";
import "./NavBar.scss";
import { ListItem } from "../../../../../types";

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
  return (
    <nav className="NavBar">
      <div className="logo" onClick={() => onPageChange("home")}>
        <a href="#home">Backpack</a>
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
