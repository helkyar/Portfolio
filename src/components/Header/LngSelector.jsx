import React from "react";
import { useLngContext } from "logic/useLngContext";

export const LngManager = () => {
  const { fn: setLng, lngNames } = useLngContext(null, 1);
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
