import Topbar from "./components/topbar/Topbar";
import React  from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css"


function App() {
  return (
    <div className="App">
      <Topbar></Topbar>  
      <div className="container">
      <Sidebar/>
      <div className="others">other pages</div>
      </div>
    </div>
  );
}

export default App;
