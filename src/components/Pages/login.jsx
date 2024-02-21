import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="container-login">
      <form className="form-login" action="http://localhost:3002/verify" method="post">
        <h2>Login</h2>
        <input type="text" placeholder="Username" name="username" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
