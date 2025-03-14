import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'; 
import Login from './Login';  
import Signup from './Signup'; 
import Home from './Home';  
import CreateEmployee from './components/Employee/createEmployee'; 
import SearchEmployee from './components/Employee/SearchEmployee'; 
import Tabs from './components/More/Tabs/Tabs'; 
import Menu from './components/More/Menu/Menu'; 
import Images from './components/More/Images/Images'; 
import Frames from './components/More/IFrames/IFrames'; 
import CSSProperties from './components/More/CSSProperties/CSSProperties'; 
import Links from './components/More/Links/Links'; 
import Tooltips from './components/More/Tooltips/Tooltips'; 
import Slider from './components/More/Slider/Slider'; 
import Popups from './components/More/Popups/Popups'; 
import Collapse from './components/More/Collapse/Collapse'; 
import AutoComplete from './components/More/AutoComplete/AutoComplete'; 

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/employee/create" element={<ProtectedRoute><CreateEmployee /></ProtectedRoute>} />
          <Route path="/employee/search" element={<ProtectedRoute><SearchEmployee /></ProtectedRoute>} />
          <Route path="/home/tabs" element={<ProtectedRoute><Tabs /></ProtectedRoute>} />
          <Route path="/home/menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
          <Route path="/home/images" element={<ProtectedRoute><Images /></ProtectedRoute>} />
          <Route path="/home/frames" element={<ProtectedRoute><Frames /></ProtectedRoute>} />
          <Route path="/home/cssproperties" element={<ProtectedRoute><CSSProperties /></ProtectedRoute>} />
          <Route path="/home/links" element={<ProtectedRoute><Links /></ProtectedRoute>} />
          <Route path="/home/tooltips" element={<ProtectedRoute><Tooltips /></ProtectedRoute>} />
          <Route path="/home/slider" element={<ProtectedRoute><Slider /></ProtectedRoute>} />
          <Route path="/home/popups" element={<ProtectedRoute><Popups /></ProtectedRoute>} />
          <Route path="/home/collapse" element={<ProtectedRoute><Collapse /></ProtectedRoute>} />
          <Route path="/home/autocomplete" element={<ProtectedRoute><AutoComplete /></ProtectedRoute>} />
        </Routes>
    </Router>
  );
}

export default App;

