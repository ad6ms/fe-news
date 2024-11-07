import { useContext } from "react";
import UserContext from "./UserContext";
import { getUserByUsername } from "../../api";

export default function Account() {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  function handleLogin(e) {
    e.preventDefault();
    const userInput = document.getElementById("username").value;
    getUserByUsername(userInput).then((response) => {
      setUser(response.user.username);
      setIsLoggedIn(true);
    });
  }

  return (
    <>
      <div>
        {isLoggedIn ? (
          <div>
            <h2>Welcome, {user}! </h2>
          </div>
        ) : (
          <div>
            <p>Please log in to view your account.</p>
            <form>
              <label> Username: </label>
              <input
                type="text"
                placeholder="Enter Username"
                id="username"
              ></input>
              <button onClick={handleLogin}> Log in </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
