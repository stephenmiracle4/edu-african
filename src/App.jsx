import { useState } from 'react';  
import './App.css';  
import AboutPage from './Components/About/About';
import Teachers from './Components/Teachers/Teachers';

function App() {  
  // const [count, setCount] = useState(0)  

  return (  
    <>  
      <AboutPage />   
      <Teachers/>
    </>  
  );  
}  

export default App;