import React from 'react'

function Nav(props){
  //decontrust the props
    const {
      navElements = [],
      setCurrentNavElement,
      currentNavElement
    } = props

  return (
    <header className="h-50">
    <div className="header-coloring">
      <div className="container">
        <div className="row g-0">

            <h2 className="fs-1 col-4">Ben Vue</h2>
  
          
          
  
        </div>
  
      </div>
    </div>

    
  </header>
  )
}

export default Nav