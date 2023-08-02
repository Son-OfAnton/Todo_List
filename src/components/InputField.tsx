import React from 'react';
import "../styles.css"

interface InputFieldProps {
  currTodo: string,
  setCurrTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<InputFieldProps> = ({currTodo, setCurrTodo, handleAdd}) => {
  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      handleAdd(e)
    }
  };
  
  return (
    <form className='input' onSubmit={handleAdd}>
      <input 
        type='input' 
        placeholder='Enter a task' 
        className='input__box'
        value={currTodo} 
        onChange={(e) => setCurrTodo(e.target.value)} 
        onKeyDown={handleEnterPress}
        />
      <button className='input__submit' type='submit'>GO</button>
    </form>
  )
}

export default InputField