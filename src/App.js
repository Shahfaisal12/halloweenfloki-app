import './App.scss';
import Routs from './components/routes/Routs';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

function App() {
  useEffect(() => {
    AOS.init({duration: '1000'});
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Routs />
    </div>
  );

}

export default App;
