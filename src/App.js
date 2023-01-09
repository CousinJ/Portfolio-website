
import {React, useState} from 'react';

import Bar from "./components/nav/Bar";
import Middlecontent from "./components/content/Midddlecontent";
import MoreInfo from "./components/helpers/MoreInfo";




function App() {

// controls the more about me pop up status.
const [moreAboutMeBool, setMoreAboutMeBool] = useState(false)


  return (
    <div className="App">
      <Bar></Bar>
     <Middlecontent setMoreAboutMeBool={setMoreAboutMeBool}></Middlecontent>
     {moreAboutMeBool && <MoreInfo></MoreInfo>}
    </div>
  );
}

export default App;
