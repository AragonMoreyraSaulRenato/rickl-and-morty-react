import React from "react";
import CustomLink from "../CustomLink";
import "./AppBar.css";

function AppBar() {
  return (
    <header className="AppBar AppBar-Fixed AppBar-Color">
      <div className="ToolBar ToolBar-Size">
        <div className="container">
          <h3 className="item">Rick and Morty</h3>
        </div>
        <div className="container ToolBar-List">
          <CustomLink to="" name="home" />
          <CustomLink to="characters" name="characters" />
          <CustomLink to="episodies" name="espisodies" />
          <CustomLink to="locations" name="locations" />
        </div>
      </div>
    </header>
  );
}

export default AppBar;
