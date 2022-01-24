import React from 'react'; 
// import images from assets
import myImage from '../../assets/images/myimage.jpeg';
import { Col } from 'react-bootstrap';


function About() {
    return(
    <section className="title">
      
      <div className="row justify-content-center" id="about-container">       
      <Col lg={6} md={12}>
      <center><img src={myImage} className="my-image" alt="nicole-profile"/></center>
      <p class="name">ben vue</p>
      <p class="job">full stack web developer</p>
      <h2 class="education">about me</h2>
        <p>
        Hello, my name is Ben Vue. I am in the process of becoming a full stack web developer. 
        I am making a career switch to find new challenges and learn skills to solve simple problems 
        that annoy me on the web. 
        <br></br>
        <br></br>
        There are many different ways to improve the web and I believe I have the answers, just not the skills yet. 
        This is the first step to solving those problems that people have been ignoring. I have a
        degree in Nutrition with a Dietetics focus, and have good communication skills. 
        This is why I beleive my idas to improve the web will be a success!
        <br></br>
        <br></br>
         </p>
      </Col>

      </div>
    </section> 
)}
  
export default About;