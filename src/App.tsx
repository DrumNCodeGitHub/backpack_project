import React, { useState } from "react";
import { MainPage } from "./pages/MainPage/MainPage";
import { NavBar } from "./pages/NavBar/NavBar";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="App">
      <NavBar activePage={activePage} onPageChange={setActivePage} />
      <MainPage />
    </div>
  );
}

export default App;
