import React from "react";

import { Atributions } from "./Atributions";
import { useLngContext } from "logic/useLngContext";

export const Footer = () => {
  const { lng } = useLngContext("atribution");

  return (
    <footer>
      <h2>Footer</h2>
      {lng && <Atributions lng={lng} />}
    </footer>
  );
};
