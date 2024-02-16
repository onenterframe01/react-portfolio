import React from "react";
import ReactDOM  from "react-dom";
import logo from './profile-img.jpg';

import node from './tech-icons/node.png';
import javascript from './tech-icons/js.png';
import css from './tech-icons/css.png';
import bootstrap from './tech-icons/bootstrap.png';
import html from './tech-icons/html.png';
import reactjs from './tech-icons/react.png';



function Tech() {
    return (
      <div className="container-fluid">
    <div className="row tech-back">
    <h2 className="tech-profile" id="tech">Tech</h2>

    <div className="col-md-7">
    <div class="intro-tech">
    <p>I'm a software engineer who is passionate about the online tech-space. Some technologies I enjoy working with are ReactJS, NodeJS, express and Javascript. I am continually learning new technologies and languages that I can implement in my day-to-day projects</p>

    <div class="float-container">

<div class="float-child">
  <div class="green"> <img src={bootstrap} width="75" height="75" /></div>
</div>

<div class="float-child">
  <div class="blue"><img src={html} width="75" height="75" /></div>
</div>

<div class="float-child">
  <div class="green"> <img src={node} width="75" height="75" /></div>
</div>

<div class="float-child">
  <div class="blue"><img src={css} width="75" height="75" /></div>
</div>

<div class="float-child">
  <div class="green"> <img src={javascript} width="75" height="75" /></div>
</div>

<div class="float-child">
  <div class="blue"><img src={reactjs} width="75" height="75" /></div>
</div>

</div>
    </div>
    </div>



    

   

  



    

    </div>
    </div>
)}
export default Tech;