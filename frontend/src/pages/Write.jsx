function Write() {
  return (
    <>
      <p className="eyebrow">NEW ENTRY</p>
      <h1>Write</h1>

      <article>
        <input placeholder="Give your entry a title..." />

        <textarea
          placeholder="What is on your mind today?"
          rows="8"
        />

        <button>Publish</button>
      </article>
    </>
  );
}

export default Write;