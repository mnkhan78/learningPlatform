import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import ClinicalClasses from "./components/ClinicalClasses";
import LectureDetail from "./components/LectureDetail";
import { auth } from "./components/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import RefundPolicy from "./RefundPolicy";
import About from "./components/About";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, [auth]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/clinicalClasses" element={<ClinicalClasses /> } />
        <Route path="/lecture/:id" element={ currentUser ?  <LectureDetail /> : <LogIn />} />
        <Route path="/refund-policy" element = {<RefundPolicy />} />
        <Route path = "/about" element = {<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
