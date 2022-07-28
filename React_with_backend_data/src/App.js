import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeadInfo from "./Components/HeadInfo";
import Nav from "./Card/Nav";
import Home from "./Components/Home"
import Hollywood from "./Components/Hollywood"
import Bollywood from "./Components/Bollywood"
import Technology from "./Components/Technology"
import Fitness from "./Components/Fitness"
import Food from "./Components/Food"
import Page from "./Components/Page";
import './Style.css'


function App() {
  return (
    <div className="App">
      <HeadInfo />
      <BrowserRouter>
      <Nav /> 
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/bollywood" element = {<Bollywood />} />
        <Route path="/hollywood" element = {<Hollywood />} />
        <Route path="/technology" element = {<Technology />} />
        <Route path="/fitness" element = {<Fitness />} />
        <Route path="/food" element = {<Food />} />
        <Route path=":category/:articleid" element = {<Page/>}/> 
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
