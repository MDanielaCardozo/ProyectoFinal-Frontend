import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/views/Login';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Burger1 from './img/Burger2.jpg'

const App = () => {
  const setAdminLogged=(val)=>{

  }

  return (
    <div>
      <BrowserRouter>
      <Menu></Menu>
      <img
              alt=""
              src={Burger1}
              width="100%"
              height="auto"
              className=""
            />{' '}
        <Routes>
          <Route exact path="/login" element={<Login setAdminLogged={setAdminLogged} />} />
        </Routes>
      <Footer></Footer>
      </BrowserRouter> 
    </div>
  );
};

export default App;