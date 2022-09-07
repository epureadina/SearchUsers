import React from "react";
import "./App.css";
import DATASET from "./components/data";
import DataFromArray from "./components/DataFromArray";
import DataFromFirebase from "./components/DataFromFirebase";

function App() {
  const users = DATASET;

  return (
    <div className="app-container">
      <DataFromArray users={users} />
      <DataFromFirebase users={users} />
    </div>
  );
}

export default App;
