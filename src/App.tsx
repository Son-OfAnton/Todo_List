import React, { useEffect, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./models/todo";
import {DragDropContext, DropResult} from "react-beautiful-dnd";


const App: React.FC = () => {
  const [currTodo, setCurrTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])


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

  const onDrapEnd = (result: DropResult) => {
    const {source, destination} = result;

    if(!destination) return;
    if(
      destination.droppableId === source.droppableId && 
      destination.index === source.index
    )
      return;

    let add, 
      active = todos,
      complete = completedTodos; 

    if(source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1)
    } else {
      add = active[source.index];
      complete.splice(source.index, 1) 
    }

    if(destination.droppableId === "TodosList") {
      active.splice(source.index, 0, add);
    } else {
      complete.splice(source.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);

  };
  
  return (
      <DragDropContext onDragEnd={() => {}}>
        <div className="App">
          <span className="heading">Taskify</span>
          <InputField currTodo={currTodo} setCurrTodo={setCurrTodo} handleAdd={handleAdd}/>
          <TodoList 
            todos={todos} 
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          />
        </div>
      </DragDropContext>
    );
}

export default App;