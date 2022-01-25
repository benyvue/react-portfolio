import React from 'react'
//import my photo
import personalPhoto from '../../assets/imagesmyimage.jpg'

//About component function
function About(){
  return(
    <section id="about" className="container pt-4">
    <div className="row">
      <h3 className="pink-text text-center large-text col-12">About me</h3>

      <div className="about-me-text text-center">
        <img src={personalPhoto}  alt='Ben Vue' className="img-style mt-2"/>
  
        <p className="m-0 py-5 black-text fs-5">
        Hello, my name is Ben Vue. I am in the process of becoming a full stack web developer. 
        I am making a career change to find new challenges and learn skills to solve simple problems 
        that annoy me on the web. 
        <br></br>
        <br></br>
        I have a degree in Nutrition with a Dietetics focus, and have good communication skills
        due to my current job requiring me to. I am sure this will also transition well into my new place in the web.
        </p>
      </div>
      </div>    
  </section>
  )
}

export default About