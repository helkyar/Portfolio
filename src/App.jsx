import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.scss";
import languajes from "./assets/languaje/languaje";

import Main from "./views/Main";

export const Context = createContext(null);
//save in localStorage (avoid component innecessary render)

const App = () => {
  const lngNames = Object.keys(languajes);
  const [lng, setLng] = useState(lngNames[0]);
  return (
    <div className="App">
      <BrowserRouter>
        <Context.Provider value={languajes[lng]}>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
          {lngNames.map((name) => (
            <button onClick={() => setLng(name)}>{name}</button>
          ))}
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
