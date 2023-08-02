import React, { useEffect, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./models/todo";


const App: React.FC = () => {
  const [currTodo, setCurrTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // runs everytime a new task is added to todos i.e todo's state changes
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(currTodo) {
      setTodos([...todos, {id: Date.now(), todo: currTodo, isDone: false}])
      setCurrTodo("");
    }

  };
  
  return (
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField currTodo={currTodo} setCurrTodo={setCurrTodo} handleAdd={handleAdd}/>
      </div>
    );
}

export default App;