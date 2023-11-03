import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import User from "./pages/user";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { signIn, user, home } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={signIn} element={<SignIn />} />
        <Route path={user} element={<User />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
