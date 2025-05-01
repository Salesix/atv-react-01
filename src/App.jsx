import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import './App.css';

import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const User = lazy(() => import("./pages/User"));

import Erro from "./pages/Erro";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Carregando...</p>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="*" element={<Erro />} />
          </Route>
          
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;