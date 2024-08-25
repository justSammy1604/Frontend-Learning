import { useEffect, useState } from 'react';
import './styles.css';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

export default function App() {
  // const [newItem,setNewItem] = useState("");
  const [todos,setTodos] = useState(() => {
    const saved = localStorage.getItem('ITEMS');
    if (saved == null) return []
    return JSON.parse(saved);
  });
  
  useEffect(() => { 
  localStorage.setItem('ITEMS',JSON.stringify(todos));
  },[todos])
  
  function addTodo(title){
    setTodos(currentTodo => {
      return [...currentTodo, 
        {id:crypto.randomUUID(),
        title, 
        completed:false},];
    })
  }

    function toggleTodo(id,completed) {
      setTodos(currentTodos => {
        return currentTodos.map(todo => {
          if(todo.id === id) {
            return {...todo,completed};
          }
          return todo;
        })
      })
    }
  
    function deleteTodo(id) {
      setTodos(currentTodos => {
        return currentTodos.filter(todo => todo.id !== id);
      })
    }
  // console.log(todos);
  return (
    <>
    <TodoForm onSubmit = {addTodo}/>
    <h1 className='header'>Todo List</h1><br />
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}