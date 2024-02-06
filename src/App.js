import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/MainPage/Main";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import DetaildeRoomPage from "./pages/DetailPage/DetaildeRoomPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/aboutUs" element={<AboutUsPage />} />
        <Route exact path="/:id" element={<DetaildeRoomPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
