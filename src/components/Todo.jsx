import { useState } from 'react';
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState('');

  function getId() {
    return Date.now().toString();
  }

  function onSaveHandler(event) {
    event.preventDefault();
    const newTodo = { id: getId(), name };
    setTodos((prevTodo) => [...prevTodo, newTodo]);
    setName('');
  }
  function onDeleteHandler(id) {
    const findTodo = todos.filter((item) => item.id !== id);
    setTodos(findTodo);
  }

  return (
    <>
      <form action="" onSubmit={onSaveHandler}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>

      <div>
        <ul>
          {todos.map((item) => (
            <li key={item.id}>
              {item.name} <button onClick={() => onDeleteHandler(item.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
