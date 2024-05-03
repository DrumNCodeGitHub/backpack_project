import React, { useState } from "react";
import { MainPage } from "./pages/MainPage/MainPage";
import { NavBar } from "./pages/MainPage/components/Header/NavBar/NavBar";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="App">
      <NavBar activePage={activePage} onPageChange={setActivePage} />
      {activePage === "home" && <MainPage activePage={activePage} />}
    </div>
  );
}

export default App;
