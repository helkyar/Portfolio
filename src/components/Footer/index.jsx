import React, { useContext, useEffect, useState } from "react";
import { Context } from "App";

import { Atributions } from "./Atributions";

export const Footer = () => {
  let { value: a } = useContext(Context);
  a ? (a = a.atribution) : (a = null);

  return (
    <footer>
      <h2>Footer</h2>
      {a && <Atributions data={a} />}
    </footer>
  );
};
