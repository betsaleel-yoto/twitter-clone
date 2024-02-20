function Signup() {
  return (
    <div className="container-signup">
      <form className="form-signup" action="" method="post">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Username" name="username" required />
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <a href="">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
