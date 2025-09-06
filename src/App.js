import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
// import BendoGridsExample from "./Pages/BendoGrids";
import { Normal } from "./Components/BendoGridExample/BendoGridEg";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}>
            <Route path='lock' element ={<Normal/>} />

            </Route>
          </Routes>
        </BrowserRouter>






    </>
  );
}

export default App;
