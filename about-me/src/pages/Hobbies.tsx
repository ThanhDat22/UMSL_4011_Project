import './../styles/Hobbies.css';
import React from "react";

// Define the Hobbies interface
interface HobbiesProps {
    title: string;
    description: string;
    imgSrc: string;
}

// Define the Hobbies data
const hobbies: HobbiesProps[] = [
    {
        title: "Reading",
        description: "I love reading books, especially fiction and fantasy novels. I am a huge fan of the Harry Potter series.",
        imgSrc: "image/books.png"
    },
    {
        title: "Programming",
        description: "I am passionate about programming and I enjoy working on side projects in my free time. I am always looking for new technologies to learn and explore.",
        imgSrc: "image/code.jpg"
    }
];

// Define the Hobbies component
const HobbyCard: React.FC<HobbiesProps> = ({ title, description, imgSrc }) => {
    return (
        <div className="hobby-card">
            <h2>{title}</h2>
            <img src={imgSrc} alt={title} className="hobby-image" />
            <p className="hobby-description">{description}</p>
        </div>
    );
};

//Hobbies component that renders the list of hobbies
const Hobbies: React.FC = () => {
    return (
        <div className="hobbies-container">
            <h1 className="hobbies-title">Hobbies & Interests</h1>
            <div className="hobby-list">
                {hobbies.map((hobby, index) => (
                    <HobbyCard key={index} {...hobby} />
                ))}
            </div>
        </div>
    );
};

export default Hobbies;