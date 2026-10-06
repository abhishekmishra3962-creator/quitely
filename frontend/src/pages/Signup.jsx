function Signup() {
  return (
    <>
      <p className="eyebrow">JOIN QUIETLY</p>
      <h1>Create your account</h1>

      <article>
        <input
          type="text"
          placeholder="Your name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>Sign up</button>
      </article>
    </>
  );
}

export default Signup;