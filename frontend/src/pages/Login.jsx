function Login() {
  return (
    <>
      <p className="eyebrow">WELCOME BACK</p>
      <h1>Log in</h1>

      <article>
        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>Log in</button>
      </article>
    </>
  );
}

export default Login;