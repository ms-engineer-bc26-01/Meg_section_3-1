import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";

// 簡易的なコンポーネントを3つ定義
const Home: React.FC = () => <h1>Home</h1>;
const About: React.FC = () => <h1>About</h1>;
const Contact: React.FC = () => <h1>Contact</h1>;

const App: React.FC = () => {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
