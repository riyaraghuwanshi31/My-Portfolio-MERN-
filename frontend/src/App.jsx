import React from 'react';
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Content from "./components/Content";


const App = () => {
  return (
    <Router>
      <Content />
      <Toaster />
    </Router>
  );
};

export default App;