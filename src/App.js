// import axios from 'axios';
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import { dataList } from './Data';

export const DataContext = React.createContext();

function App() {

  const [products] = useState(dataList);

  return (
    <DataContext.Provider value={{ products }}>
      <div className="app">
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;


//https://3ayez-eh.azurewebsites.net/nearby_shops/?lat=31.207719321874073&lon=29.918701945555572&range=1&category=men