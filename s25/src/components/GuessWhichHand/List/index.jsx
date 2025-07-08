const List = ({ items }) => {
  return (
    <ol className="Hand--list">
      {items.map((item) => (
        <li className="item" key={item.id}>
          {item.title}
        </li>
      ))}
    </ol>
  );
};

export default List;
