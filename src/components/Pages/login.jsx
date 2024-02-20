function Login() {
    return ( 
        
        <div className="container">
        <form className="form" action="" method="post">
            <h2>Login</h2>
            <input type="text" placeholder="Username" name="username" required/>
            <input type="password" placeholder="Password" name="password" required/>
            <button type="submit">Login</button>
            <p>Don't have an account? <a href="">Sign Up</a></p>
        </form>
    </div>
     );
}

export default Login;