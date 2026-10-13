
function TodoList({ tasks, deleteTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((t, index) => (
        <li key={index} className="todo-item">
          <span>{t}</span>
          <button
            className="delete-button"
            onClick={() => deleteTask(index)}
            aria-label={`Delete ${t}`}
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
