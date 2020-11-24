import React from 'react'
import './CustomIcon.css'

interface CustomIconProps {
   children: JSX.Element | JSX.Element[]
}

function CustomIcon(props: CustomIconProps) {
   return (
      <div className="Custom-Icon">
         {props.children}
      </div>
   )
}

export default CustomIcon
