function Infos({ title, location }) {
  return (
    <div className="infos">
      <h1 className="infos__title medium">{title}</h1>
      <p className="infos__location medium">{location}</p>
    </div>
  );
}

export default Infos;
