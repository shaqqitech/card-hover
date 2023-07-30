import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Card = ({
  imageUrl,
  description,
  facebookLink,
  twitterLink,
  instagramLink,
}) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="card relative w-64 h-72 border-2 border-gray-300 rounded-lg overflow-hidden transition-opacity"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className={`card-image h-full object-cover ${
          hovered
            ? "opacity-40 scale-150 transform transition-opacity duration-500 "
            : "scale-100"
        }`}
        src={imageUrl}
        alt="Card"
      />
      {hovered && (
        <>
          <div className="card-content absolute bottom-12 left-16 w-full p-4 text-white transform transition-opacity duration-500">
            <div className="social-icons flex gap-2 mt-2">
              <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" size={20} />
              </a>
              <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" size={20} />
              </a>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" size={20} />
              </a>
            </div>
          </div>

          <div className="card-content absolute bottom-0 left-0 bg-black bg-opacity-80 w-full p-4 text-white transform transition-opacity duration-500">
            <p>{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
