import React from 'react';
import "../styles.css";
import { Todo } from '../models/todo';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  return (
    <div className='container'>
      <Droppable droppableId='TodosList'>
        {(provided, snapshot) => (
          <div 
            className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`}
            ref={provided.innerRef} 
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {completedTodos.map((todo, index) => (
              <SingleTodo 
                index={index}
                todo={todo} 
                todos={completedTodos} 
                key={todo.id} 
                setTodos={setCompletedTodos} 
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId='TodosRemove'>
        {(provided, snapshot) => (
          <div 
            className={`todos remove ${snapshot.isDraggingOver ? 'dragcomplete' : ''}`}
            ref={provided.innerRef} 
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed Tasks</span>
              {todos.map((todo, index) => (
                <SingleTodo 
                  index={index}
                  todo={todo} 
                  key={todo.id} 
                  todos={todos} 
                  setTodos={setTodos} 
                />
              ))}
              {provided.placeholder}
          </div>
        )}
      </Droppable>

    </div>
  );
}

export default TodoList;