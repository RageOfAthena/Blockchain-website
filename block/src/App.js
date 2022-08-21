import Section1 from "./Section/Section1.js";
import Section2 from "./Section/Section2.js";
import Section3 from "./Section/Section3.js";
import Section4 from "./Section/Section4.js";
import Section5 from "./Section/Section5.js";
import Section6 from "./Section/Section6.js";
import Section7 from "./Section/Section7.js";
import Section8 from "./Section/Section8.js";
import Header from "./Section/Header.js";
import "./App.css";
import { useState } from "react";
function App() {
  const [passprops, onpassprops] = useState();
  function getval(e) {
    onpassprops(e);
  }
  return (
    <div className="App">
      <Header passprops={passprops}></Header>
      <Section1 getval={getval}></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Section7></Section7>
      <Section8></Section8>
    </div>
  );
}

export default App;
