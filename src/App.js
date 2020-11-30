import React from "react";
import "./App.css";
import Widgets from "./Component/Widgets/Widgets";
import Feed from "./Component/Feed/Feed";
import Sidebar from "./Component/Sidebar/Sidebar";

function App() {
  return (
    // BEM
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
