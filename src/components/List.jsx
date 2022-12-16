function List(props) {
  return (
    <div>
      {props.list.map((item, i) => (
        <p key={i}>
          {item.name} {item.surname}
        </p>
      ))}
    </div>
  );
}

export default List;
