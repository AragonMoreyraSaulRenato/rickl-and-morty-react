import React from "react";
import "./MainContainer.css";

interface MainContainerProps {
  children: JSX.Element | JSX.Element[] | string;
  top?: boolean;
}

function MainContainer(props: MainContainerProps) {
  return (
    <main
      className={`container Main-Container ${
        props.top ? ".Main-Container-Top" : ".Main-Container-Center"
      }`}
    >
      {props.children}
    </main>
  );
}

export default MainContainer;
