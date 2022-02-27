import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.scss";
import languaje from "./assets/languaje/languaje";

import Main from "./views/Main";

export const Context = createContext(null);

const App = () => {
  const { english: lng } = languaje;
  return (
    <div className="App">
      <BrowserRouter>
        <Context.Provider value={lng}>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
