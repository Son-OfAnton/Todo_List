import React from 'react';
import "../styles.css";
import { Todo } from '../models/todo';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos}) => {
  return (
    <div className='container'>
      <Droppable droppableId='TodosList'>
        {(provided, snapshot) => (
          <div 
            className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`}
            ref={provided.innerRef} 
            {...provided.droppableProps}
          >
            <span className="todos__heading">Tasks</span>
            {todos.map((todo, index) => (
              <SingleTodo 
                index={index}
                todos={todos} 
                todo={todo} 
                key={todo.id} 
                setTodos={setTodos} 
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {/* <Droppable droppableId='TodosRemove'>
        {(provided, snapshot) => (
          <div 
            ref={provided.innerRef} 
            {...provided.droppableProps}
            className={`todos ${snapshot.isDraggingOver ? 'dragcomplete' : 'remove'}`}
          >
            <span className="todos__heading">Completed Tasks</span>
              {completedTodos.map((todo, index) => (
                <SingleTodo 
                  index={index}
                  todos={completedTodos} 
                  todo={todo} 
                  key={todo.id} 
                  setTodos={setCompletedTodos} 
                />
              ))}
              {provided.placeholder}
          </div>
        )}
      </Droppable> */}

    </div>
  );
}

export default TodoList;
