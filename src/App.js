import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    username: "admin",
    password: "admin",
  };

  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.username == adminUser.username &&
      details.password == adminUser.password
    ) {
      console.log("Login Successful");
      setUser({
        username: details.username,
        password: details.password,
      });
    } else {
      console.log("Login Failed");
      setError("Login Failed");
    }
  };

  const Logout = () => {
    console.log("logout");
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div className="App">
      <div className="body">
        {/* If the user is logged in print initial dashboard */}
        {user.username != "" ? (
          <div className="welcome">
            <Header />
            <h2>
              Welcome <span>{user.username}</span>
            </h2>
            <button onClick={Logout}>Logout</button>
            <Footer />
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>
    </div>
  );
}

export default App;

