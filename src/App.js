import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false
        }
      ])
      setText('')
    }
  }

  return (
    <div className="App">
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button onClick={addTodo}>Add to do</button>
      </label>

      <ul className='todo-list'>
        {todos.map(todo => <li key={todo.id}>
          <input type="checkbox" />
          <span>{todo.text}</span>
          <span>&times;</span>
        </li>)}
      </ul>
    </div>
  );
}

export default App;
