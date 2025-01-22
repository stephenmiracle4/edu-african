import React from "react";
import "./About.css"; 
import AboutImage from "../../assets/about-2.jpg"; 
import AICards from "./AICards"; 

const AboutPage = () => {  
  return (  
    <div className="about-page">  
      {/* Header Section */}
      <div className="about-header">    
          <h1>About Us</h1>  
          <p>Home / About Us</p>  
        </div>   

      {/* Content Section */}
      <div className="about-content">  
        <h2>About Us</h2>  
        <h1>Welcome to Edu Afrika</h1>  
        <div className="content-section">  
          <p>  
            At Edu Afrika, we believe that education is the key to empowerment and growth. 
            Our mission is to provide quality educational opportunities and resources to individuals across the continent, laying the groundwork for a brighter and more sustainable future.

            Whether you are a student eager to learn, an educator passionate about teaching, 
            or a community member seeking to make a difference, you are in the right place. 
            Here, you'll find support, inspiration, and a community committed to fostering knowledge and lifting up those around us.

            Join us as we embark on this transformative journey together—because when we educate, we elevate!
          </p>  

          <img   
            src={AboutImage}    
            alt="Content Illustration"   
          />  
        </div>  
      </div> 

      {/* Cards Section */}
      <div>
        <AICards />
      </div>
    </div> 
  );  
};  

export default AboutPage;
