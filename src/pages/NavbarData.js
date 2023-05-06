import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const NavbarData = [
  {
    title: "Acceuil",
    path: "/Acceuil",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Les etudiants",
    path: "/Etudiant",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Les Enseignants",
    path: "/Enseignants",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "à propos",
    path: "/Apropos",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];
