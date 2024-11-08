import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navibar from "./components/Navbar";
import Home from "./components/Home";
import Browse from "./components/Browse";
import View from "./components/View";
import UserContext from "./components/UserContext";
import Account from "./components/Account";
import Users from "./components/Users";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      <>
        <Navibar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Browse />} />
          <Route path="/articles/:article_id" element={<View />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Account />} />
        </Routes>
      </>
    </UserContext.Provider>
  );
}

export default App;
