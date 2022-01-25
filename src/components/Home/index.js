import React from "react";
import About from '../About'
import Portfolio from '../Portfolio'
import ContactPage from "../Contact";
import ResumePage from "../Resume";

//home page component determines page to be rendered
function Homepage(props) {
  //decontrust the props
  const {currentNavElement} = props

  //set variable with empty string
  let render = ''

  //currentNavElment. Then return the element to variable to be rendered
  switch (currentNavElement.name){
    case 'About Me':
      render = <About/>
      break;
    case 'Portfolio':
      render = <Portfolio/>
      break;
    case 'Contact Me':
      render = <ContactPage/>
      break;
    case 'Resume':
      render = <ResumePage/>
      break;
    default:
    render = <About/>
  }

  return(
  <>
    {render}
  </>
  )
}

export default Homepage