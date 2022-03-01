import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';


//const taskUrl = 'http://localhost/api/v1/tasks';
const taskUrl = 'https://jsonplaceholder.typicode.com/todos';


function App() {
  const [todoList, setTodoList] = useState([]);
  
  useEffect(()=>{
    const fetchData = async() => {
      const response = await axios.get(taskUrl);
      setTodoList(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log('レンダリング!')
  },[]);

  const inCompletedList = todoList.filter((todo: any) =>{
    return !todo.completed;
  });
  const completedList = todoList.filter((todo: any) => {
    return todo.completed;
  });

  return (
    <>
      <h1>Todo List</h1>
      <textarea />
      <button>Todoを追加する</button>
      <h2>未完了TODOリスト</h2>
      <ul>
        {inCompletedList.map((todo: any)=>(
          <li key={todo.id}>
            {todo.title}
            <button>{todo.completed ? "未完了リストへ": "完了リストへ"}</button>
            <button>削除する</button>
          </li>
      ))}
      </ul>

      <h2>完了TODOリスト</h2>
      <ul>
        {completedList.map((todo: any)=>(
          <li key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
