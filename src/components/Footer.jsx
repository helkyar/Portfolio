import React, { useContext } from "react";
import { Context } from "../App";
import { Link } from "react-router-dom";

const Footer = () => {
  const { atribution: a } = useContext(Context);
  return (
    <footer>
      <h2>{a.title}</h2>
      <Link to="https://www.flaticon.com/free-icons/web-development">
        {a.ref[0]}
      </Link>
    </footer>
  );
};

export default Footer;
