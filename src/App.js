import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/FirstPage/Main/Main';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import DetaildeRoomPage from './components/DeatailedRoomPage/DetaildeRoomPage';

function App() {



  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Main />}  />
        <Route exact path='/aboutUs' element={<AboutUsPage />}  />
        <Route exact path='/detailed' element={<DetaildeRoomPage />}  />
      </Routes>
    </div>
  );
}

export default App;
