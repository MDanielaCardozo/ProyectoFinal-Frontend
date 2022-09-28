import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Burger1 from './img/Burger2.jpg'

const App = () => {
  return (
    <div>
      <Menu></Menu>
      <img
              alt=""
              src={Burger1}
              width="100%"
              height="auto"
              className=""
            />{' '}
      <Footer></Footer>
    </div>
  );
};

export default App;