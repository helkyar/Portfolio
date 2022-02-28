import React from "react";

export const Atributions = (props) => {
  const { title, references } = props.data;
  return (
    <>
      <h4>{title}</h4>
      {references.map(({ msg, url, name }, id) => (
        <p key={`atribution-${id}`}>
          {msg}
          <a href={url}>{name}</a>
        </p>
      ))}
    </>
  );
};
