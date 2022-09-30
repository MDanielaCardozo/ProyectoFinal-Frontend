import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/views/Login';
import Error from './components/views/Error';

const App = () => {
  const setAdminLogged=(val)=>{

  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login setAdminLogged={setAdminLogged} />} />
          <Route exact path="/error" element={<Error></Error>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
};

export default App;