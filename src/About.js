import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import logo from "./profile-img.jpg";
import hand from "./hand.png";
import hand2 from "./hand.jpg";
import cloud from "./clouds.png";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import pic4 from "./pic4.jpg";
import pic5 from "./pic5.jpg";
import pic6 from "./pic6.jpg";
import pic7 from "./pic7.jpg";
import photo from "./photo.jpg";
import badge from "./badges/Mission-Ready-Badge.png";

/*Practice*/

// //Functional Component
// function App(props) {
//   //Function Method
//   const handleSubmit = () => {
//     const [age, setAge] = state(0);
//   };

//   return (
//     <header>
//       <h1>{props.name} kitchen</h1>
//     </header>
//   );
// }

// const App = () => {
//   return (
//     <header>
//       <h1>{props.name}</h1>
//     </header>
//   );
// };

// const dishes = ["Black Bean Soup", "Macaroni and Cheese", "Soup of the day"];

// const newArray = dishes.map((dish) => {
//   dish;
// });

// function Main() {
//   <section>
//     <ul>
//       {dishes.map((dish) => (
//         <li>{dish}</li>
//       ))}
//     </ul>
//   </section>;
// }

// function App() {
//   <Header name="Daniel" />;
//   const [emotion, setEmotion] = useState("happy");

//   return (
//     <div>
//       <p>Current emotion is {emotion}</p>
//       <button onClick={() => setEmotion("sad")}>Sad</button>
//     </div>
//   );
// }

// useEffect(() => {
//   console.log("Hello");
// }, []);

/*Practice*/

function About() {
  return (
    <div className="container-fluid">
      {/* Start Row */}
      <div className="row">
        <div className="col-md-12 about-daniel" id="home">
          <p className="intro-text">
            <div>
              <img
                src={photo}
                width="373"
                height="428"
                className="rounded mx-auto d-block baby-photo"
              />
            </div>
            <div>
              <img
                src={badge}
                width="200"
                height="200"
                className="rounded mx-auto d-block mission-badge"
              />
            </div>
            <span class="hello">
              Hello,{" "}
              <img
                src={hand}
                width="100"
                height="100"
                className="rounded mx-auto d-block profile-img"
              />
            </span>{" "}
            <br />
            <span class="mynameis">
              my name is <span class="name">Daniel</span>
            </span>
            <br />
            <span class="amplisand">&</span>
            <br />
            <span class="iamawebdev">i am a web developer</span>
          </p>

          <div class="main-nav">
            <ul>
              <li>
                <a href="#" data-target="home" className="btn-scroll-into">
                  Home
                </a>
              </li>
              <li>
                <a href="#" data-target="profile" className="btn-scroll-into">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" data-target="tech" className="btn-scroll-into">
                  Tech
                </a>{" "}
              </li>
              <li>
                <a href="#" data-target="portfolio" className="btn-scroll-into">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" data-target="contact" className="btn-scroll-into">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Row */}
    </div>
  );
}
export default About;
