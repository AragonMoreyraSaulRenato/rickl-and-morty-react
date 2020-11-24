import React from 'react'
import './MainContainer.css'

interface MainContainerProps {
   children: JSX.Element | JSX.Element[] | string,
}

function MainContainer(props: MainContainerProps) {
   return (
      <main className="container Main-Container">
         {props.children}
      </main>
   )
}

export default MainContainer
