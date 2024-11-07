import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useContext } from "react";

export default function Navbar() {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/articles"> Articles</Link>
      <Link to="/users"> Users</Link>
      <Link to="/profile"> {isLoggedIn ? <> Profile </> : <> Log in</>}</Link>
    </div>
  );
}
