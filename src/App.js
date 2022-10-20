import { useContext } from 'react';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import "./style.scss"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';





function App() {
  const {currentUser} = useContext(AuthContext) 
  console.log(currentUser)

  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route  index element={<Home /> }/>
            <Route  path='login' element={<Login /> }/>
            <Route  path='register' element={<Register /> }/>
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
