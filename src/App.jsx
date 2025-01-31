import { useState } from 'react';  
import './App.css';  
import AboutPage from './Components/About/About';
import Teachers from './Components/Teachers/Teachers';

function App() {    

  return (  
    <>  
      <AboutPage />   
      <Teachers/>
    </>  
  );  
}  

export default App;