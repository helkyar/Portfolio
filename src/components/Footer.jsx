import React, { useContext } from "react";
import { Context } from "../App";

const Footer = () => {
  const url = "https://www.flaticon.com/free-icons/web-development";
  const { atribution: a } = useContext(Context);

  return (
    <footer>
      <h2>{a.title}</h2>
      <p>
        {a.ref[0]}
        <a href={url}>surang</a>
      </p>
    </footer>
  );
};

export default Footer;
