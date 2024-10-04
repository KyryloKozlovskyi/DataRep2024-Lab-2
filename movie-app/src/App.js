import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  // Main page. Client side routing for home -> Content/read-> Footer/create -> Header pages.
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<Footer />} />
        <Route path="/create" element={<Header />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
