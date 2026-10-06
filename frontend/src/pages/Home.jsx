function Home() {
  return (
    <>
      <p className="eyebrow">FOLLOWING</p>
      <h1>A feed of words</h1>

      <article>
        <strong>@maya</strong>
        <small>October 3</small>
        <h2>A quieter kind of evening</h2>
        <p>
          I used to think an empty evening meant I had wasted the day.
          Now I am beginning to think the opposite.
        </p>
      </article>

      <article>
        <strong>@arjun</strong>
        <small>October 2</small>
        <h2>Things I want to remember</h2>
        <p>
          The smell of rain on the road. A conversation that lasted longer
          than expected.
        </p>
      </article>
    </>
  );
}

export default Home;