import React from "react";
import "./NavBar.scss";
import { ListItem } from "../../../../../types";

type Props = {
  activePage: string;
};

export const NavBar: React.FC<Props> = ({ activePage }) => {
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
      <div className="logo">Backpack</div>
      <ul className="nav-links">
        {navLinksList.map((item) => (
          <li
            className={"nav-item " + (activePage === item.id ? "active" : "")}
            key={item.id}
          >
            <a href={"#" + item.id}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
