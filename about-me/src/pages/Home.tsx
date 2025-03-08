import React from "react";
import { Link } from "react-router-dom";
import './../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <img src="/image/dat-logo.jpg" alt="My Logo" className="my-logo" />
      <h1 className="home-title">Welcome to NGUYEN THANH DAT Website</h1>
      <p className="home-description">
        Discover my passions and interests. Explore my hobbies and learn more about me!
      </p>
      <div className="flex space-x-4 mt-8">
        <Link to="/about" className="home-btn">
          Learn More About Me
        </Link>
        <Link to="/hobbies" className="home-btn">
          Check My Hobbies
        </Link>
        <Link to="/pets" className="home-btn">
          Meet my Pets
        </Link>
      </div>
    </div>
  );
};

export default Home;
