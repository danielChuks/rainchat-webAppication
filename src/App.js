import { useContext } from 'react';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import "./style.scss"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';


function App() {
  const {currentUser} = useContext(AuthContext);
  
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login" />
    }else{
      return children;
    }
  }

  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route  index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute> }/>
            <Route  path='login' element={<Login /> }/>
            <Route  path='register' element={<Register /> }/>
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
