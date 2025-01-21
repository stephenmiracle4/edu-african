import { useState } from 'react';  
import './App.css';  
import AboutPage from './Components/About/About';
import Nav from "./Components/Navbar/Navbar"  ;

function App() {  
  // const [count, setCount] = useState(0)  

  return (  
    <>  
    <Nav/>
      <AboutPage />   
    </>  
  );  
}  

export default App;