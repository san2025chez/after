import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <h2>Nav Bar</h2>
        <NavBar />
        <Routes>
        <Route path="/" element={  <ItemListContainer />} />
        <Route path="/category/:Id" element={<ItemListContainer />} />
         <Route path="/item/:id" element={ <ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
