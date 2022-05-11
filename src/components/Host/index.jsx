function Host({ name, picture }) {
  const firstName = name.split(' ')[0];
  const lastName = name.split(' ')[1];

  return (
    <div className="host">
      <p className="host__name medium">
        {firstName}
        <br />
        {lastName}
      </p>
      <img className="host__picture" src={picture} alt={name} />
    </div>
  );
}

export default Host;
