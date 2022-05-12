function Tags({ tags }) {
  return (
    <section className="tags">
      {tags.map((tag, index) => (
        <p className="tags__p" key={index}>
          {tag}
        </p>
      ))}
    </section>
  );
}

export default Tags;
