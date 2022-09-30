import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const[isDarkMode, setDarkMode]= useState(false)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  function handleDarkModeClick(){
  setDarkMode((isDarkMode)=> !isDarkMode)
}

  return (
    <div className={"App " +(isDarkMode ? "App dark" : "App light")}>
      <Header onDarkModeClick={handleDarkModeClick} />  
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

/**
 * Creating a state variable in this component called isLightMode with its setter function
 *  setLightMode to determine if app is in light or dark mode.
 * Create a function to handle the event, click on the button that is created in the header component
 * in the JSX section in Header component so we pass function as props
 */