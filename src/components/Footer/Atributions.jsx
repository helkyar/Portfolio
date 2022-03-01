import React from "react";

export const Atributions = ({ lng }) => {
  return (
    <>
      <h4>{lng.title}</h4>
      {lng.references.map(({ msg, url, name }, id) => (
        <p key={`atribution-${id}`}>
          {msg}
          <a href={url}>{name}</a>
        </p>
      ))}
    </>
  );
};
