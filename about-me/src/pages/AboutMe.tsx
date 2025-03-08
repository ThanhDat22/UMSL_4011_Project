import React from "react";
import './../styles/AboutMe.css';

const AboutMe: React.FC = () => {
    return (
        <div className="about-me-container">
          <h1>Thanh Dat Nguyen</h1>
          <img src="/image/Icon.jpg" alt="About me" className="about-me-image" />
          <p>I am a Computer Science major with a strong passion for algorithms and problem-solving. 
            This semester, I am taking four courses, and with just one more class in the Summer, I will be ready to graduate! My love for structured thinking and logic naturally led me to this field, where I enjoy unraveling complex problems and optimizing solutions.

            Beyond Computer Science, I also have a second major in Linguistics, which allows me to explore the intricate relationship between language, cognition, and communication.</p>
          
        </div>
      );
    };

export default AboutMe;