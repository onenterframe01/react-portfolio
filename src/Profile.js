import React from "react";
import ReactDOM  from "react-dom";
import logo from './profile-img.jpg';

function Profile() {
    return (
      <div className="container-fluid">
    <div className="row">
    <div className="col-md-12 profile-back">

    

    <h2 className="header-profile" id="profile">Profile</h2>
    
    <p className="personal-information">
    <div class="profile-pic">
    <img src={logo} width="277" height="323" className="rounded mx-auto d-block" />
    </div>
    My name is Daniel and I am an enthusiastic frontend developer. I am an energetic, resourceful and a self-motivated person. Being both a
goal orientated and results driven person I enjoy seeing a job well done and am someone who takes pride in my work. I am continually learning new technologies and languages that I can implement in my day-to-day projects, and go the extra mile to thoroughly understand concepts and practices to assist me in the workplace. I always ensure my skills are kept up to date within this rapidly changing industry.</p>
  </div>
  </div>
  </div>
)}
export default Profile;