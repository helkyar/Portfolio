import React, { useContext } from "react";
import { Context } from "App";

import { Atributions } from "./Atributions";

const Footer = () => {
  const { atribution: a } = useContext(Context);

  return (
    <footer>
      <h2>Footer</h2>
      {a && <Atributions data={a} />}
    </footer>
  );
};

export default Footer;
