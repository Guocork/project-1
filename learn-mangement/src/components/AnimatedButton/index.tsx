import { useState } from "react";


const AnimatedButton = () => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleHover = () => {
      setIsHovered(!isHovered);
    };
  
    const buttonStyle = {
      padding: '10px 20px',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '5px',
      backgroundColor: isHovered ? '#ff9900' : '#ffcc66',
      color: '#fff',
      transition: 'background-color 0.3s ease',
      cursor: 'pointer',
    };
  
    return (
      <button
        style={buttonStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        Click Me
      </button>
    );
  };


  export default AnimatedButton