import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Points from "./pages/Points";
import Quiz1 from "./pages/Quiz1";
import Quiz2 from "./pages/Quiz2";

function App() {

  let [points, setPoints] = useState(0)

  let [data, setData] = useState()

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
      .then((response)=>response.json())
      .then((response)=>{
        setData(response)
      })
  },[])

  function addPoints() {
    setPoints(points + 1)
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Quiz1 data={data} addPoints={addPoints}/>}></Route>
      <Route path="/2" element={<Quiz2 data={data} addPoints={addPoints}/>}></Route>
      <Route path="/points" element={<Points points={points} addPoints={addPoints}/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
