import React, { useState } from "react";
import "./App.css";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <main className="page">
      <section className="card">
        {isLoggedIn ? (
          <>
            <div className="icon success">✓</div>
            <h1>Welcome Back!</h1>
            <p>You are successfully logged in.</p>
            <button className="logout" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <div className="icon">🔒</div>
            <h1>Welcome!</h1>
            <p>Please log in to continue.</p>
            <button onClick={handleLogin}>Login</button>
          </>
        )}
      </section>
    </main>
  );
}

export default LoginStatus;
