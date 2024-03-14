
import './App.css';
import Topbar from './components/Topbar/Topbar';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';

import Write from './pages/write/Write';
 import Home from './pages/Home/Home';
import Single from "./pages/single/Single";

function App() {
  const user = true;
  return (
    <>
  <Router>
       <Topbar/>
       <Routes>
       <Route exact path='/' element={ <Home/>
       }/>
       <Route path='/register' element={
        user ? <Home/> : <Register/>
       }/>
       <Route path='/login' element={
        user ? <Home/> : <Login/>
       }/>
       <Route path='/write' element={
        user ? <Write/> : <Register/>
       }/>
        <Route path='/settings' element={
          <Settings/>
       }/>
        <Route path='/post/:postId' element={<Single/>}/>
       </Routes>

       
        </Router>
    </>
  
  );
}

export default App;
