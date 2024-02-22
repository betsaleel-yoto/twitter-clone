import { Link } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router";

function Login() {
  const [error, setError] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [redirectToSignup, setRedirectToSignup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch("http://localhost:3002/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        if (responseData.message === "redirect") {
          setRedirectToHome(true);
        } else if (responseData.message === "signup") {
          setRedirectToSignup(true);
        }
      } else {
        alert("Utilisateur non trouvé. Veuillez créer un compte.");
      }
    } catch (error) {
      setError(
        "Une erreur s'est produite lors de la vérification de l'utilisateur."
      );
      console.error(error);
    }
  };

  if (redirectToHome) {
    return <Navigate to="/home" />;
  }

  if (redirectToSignup) {
    return <Navigate to="/signup" />;
  }

  return (
    <div className="container-login">
      <form className="form-login" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" name="username" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
