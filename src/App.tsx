import React, { useState } from "react";
import { MainPage } from "./pages/MainPage/MainPage";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="App">
      {activePage === "home" && <MainPage activePage={activePage} />}
    </div>
  );
}

export default App;
