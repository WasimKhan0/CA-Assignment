import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailsPage from "./Compartments/DetailsPage";
import Header from "./Compartments/Header";
import Hero from "./Compartments/Hero";
import { MyContext } from "./assets/MyContext";
import { useState, React } from "react";
import Display from "./Compartments/Display";

function App() {
  const [info, setInfo] = useState({});

  return (
    <>
      <div className="relative">
        <MyContext.Provider value={{ info, setInfo }}>
          <Header />
          <Routes>
            <Route path="/" element={<Hero />}></Route>
            <Route path="/details" element={<DetailsPage />}></Route>
          </Routes>
        </MyContext.Provider>
      </div>
    </>
  );
}

export default App;
