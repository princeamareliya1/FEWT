// import Hello from "./Hello";
// import Demo from "./React_lab15/demo";
// import Propsdemo from "./React_lab16/Propsdemo";
// import EventHandling from "./React_lab16/EventHandling";
// import Map_demo from "./React_lab17/Map_demo";
// import Display_Faculties from "./React_lab17/Display_Faculties";
// import Display_Student from "./React_lab17/Display_Student";
// import Display_Product from "./React_lab17/Display_Product";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./React_lab20/Home";
// import About from "./React_lab20/About";
// import Layout from "./React_lab20/Layout";
// import Navbar from "./React_lab20/Navbar";
// import Contact from "./React_lab20/Contact";

// import UseEffectHook from "./React_lab21/UseEffectHook";
// import UseStateHook from "./React_lab21/UseStateHook";

// import { useState } from "react";
// import A from "./React_lab18/A"

// import AppContent from './React_lab19/AppContent'

// import CalcEval from "./React_lab22/CalcEval";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FacultyList from "./React_lab24/FacultyList"

function App() {
  // const [name,setName] = useState("")
  return (
    <>
      {/* <Hello/>   */}
      {/* <Demo/> */}
      {/* <Propsdemo/> */}
      {/* <EventHandling/>   */}
      {/* <Map_demo/> */}
      {/* <Display_Faculties/> */}
      {/* <Display_Student/> */}
      {/* <Display_Product/> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
          </Route>  
        </Routes>
      </BrowserRouter> */}

      {/* <UseStateHook/>
      <UseEffectHook/>
      <A name={name} setName={setName}/> */}

      {/* <AppContent/> */}

      {/* <CalcEval/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FacultyList/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;