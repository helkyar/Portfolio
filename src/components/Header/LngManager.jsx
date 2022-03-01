import React, { useContext } from "react";
import { Context } from "App";

export const LngManager = () => {
  const { fn: setLng, lngNames } = useContext(Context);
  return (
    <>
      {lngNames.map((name, id) => (
        <button key={`lng-${id}`} onClick={() => setLng(name)}>
          {name}
        </button>
      ))}
    </>
  );
};
