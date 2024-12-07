import React from "react";
import PersonList from "./PersonList";
import AddPerson from "./AddPerson";
import "./App.css";

const App = () => {
  return (
    <div>
      <AddPerson />
      <PersonList />
    </div>
  );
};

export default App;
