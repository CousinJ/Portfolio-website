
import {React, useState} from 'react';

import Bar from "./components/nav/Bar";
import Middlecontent from "./components/content/Midddlecontent";
import AboutMe from './components/helpers/AboutMe';




function App() {
const [aboutBool, setAboutBool] = useState(false);





  return (
    <div className="App">
      <Bar></Bar>
     <Middlecontent aboutBool={aboutBool} setAboutBool={setAboutBool}></Middlecontent>
     <AboutMe aboutBool={aboutBool}></AboutMe>
    </div>
  );
}

export default App;
