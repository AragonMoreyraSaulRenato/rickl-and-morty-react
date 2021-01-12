import React from "react";
import "./CustomIcon.css";

interface CustomIconProps {
  children: JSX.Element | JSX.Element[];
  to?: string;
}

function CustomIcon(props: CustomIconProps) {
  return (
    <a href={props.to} className="Custom-Icon" rel="noreferrer" target="_blank">
      {props.children}
    </a>
  );
}

export default CustomIcon;
