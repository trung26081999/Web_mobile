import React from "react";
import "./App.css";
import HomePages from "./home_pages/HomePages";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details/Details";

function App() {
  return (
    <Fragment>
      <Routes path="/" element={<HomePages />}>
        <Route index element={<HomePages/>}></Route>
        <Route path="details" element={<Details/>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
