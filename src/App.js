import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./layout/header";
import HomePage from "./pages/home-page";
import InputComponent from "./components/inputcomponent";
// import axios from "axios";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <InputComponent /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
