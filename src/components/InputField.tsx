import React, { useRef } from 'react';
import "../styles.css"

interface InputFieldProps {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<InputFieldProps> = ({todo, setTodo, handleAdd}) => {
  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      handleAdd(e)
    }
  };

  const inputRef = useRef<HTMLInputElement>(null)
  
  return (
    <form 
      className='input' 
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input 
        type='text' 
        placeholder='Enter a task' 
        value={todo} 
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)} 
        className='input__box'
        onKeyDown={handleEnterPress}
        />
      <button className='input__submit' type='submit'>GO</button>
    </form>
  )
}

export default InputField