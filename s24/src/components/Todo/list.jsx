const List = ({ items, onDeleteTask }) => {
  return items.length ? (
    <ol>
      {items.map((item) => (
        <li key={item.id}>
          {item.newTask}
          <button onClick={() => onDeleteTask(item.id)}>Delete</button>
        </li>
      ))}
    </ol>
  ) : (
    <small>No Task</small>
  );
};

export default List;
