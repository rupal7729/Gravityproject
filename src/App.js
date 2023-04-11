import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './container/Home/Home';
import Footer from './component/Footer/Footer';


function App() {
  return (

    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
