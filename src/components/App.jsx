import { NavBar } from "./NavBar/NavBar";
import { Routes, Route } from 'react-router-dom';
import MainPage from "pages/MainPage";


export const App = () => {
 
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>

    </>
  );
};
