import { useState } from 'react';  
import './App.css';  
import AboutPage from './Components/About/About';
import Nav from "./Components/Navbar/Navbar"  ;
import OurTeachers from './Components/Our Teachers/OurTeachers';

function App() {  
  // const [count, setCount] = useState(0)  

  return (  
    <>  
    <Nav/>
      <AboutPage />   
      <OurTeachers/>
    </>  
  );  
}  

export default App;