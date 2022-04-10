import React from 'react';
import coding from "../../assets/coding.svg";
import { Container, Top, Bottom } from "./style";

const About = () => {
  return (
    <Container>
       <Top>
          <img src={coding} alt="" />
          <h2>〈 About Full Stack Developer <span>Elif</span> 〉</h2>
       </Top>
       <Bottom>
       <h2>I'm Elif!</h2>
       <p>I'm currently learning Web Development languages.</p>
       <p>I've already known JS, ReactJS, Python, HTML, CSS.</p>
       <p><a href="mailto:elif.turhan345@gmail.com">Send email 📩 :</a> elif.turhan345@gmail.com</p>
       </Bottom>
    </Container>
  )
}

export default About;