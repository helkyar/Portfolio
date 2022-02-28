import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.scss";
import languaje from "./assets/languaje/languaje";

import Main from "./views/Main";

export const Context = createContext(null);

const App = () => {
  const [lng, setLng] = useState("english");

  return (
    <div className="App">
      <BrowserRouter>
        <Context.Provider value={languaje[lng]}>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
          <button onClick={() => setLng("spanish")}>S</button>
          <button onClick={() => setLng("english")}>E</button>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
