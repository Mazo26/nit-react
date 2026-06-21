import { useState } from "react";
import { v4 as uuid } from "uuid";
import Header from "../components/Header/Header";

const List = ({ goalName, id, deleteHandler }) => (
  <div className='inline'>
    <p>{goalName}</p>
    <button onClick={() => deleteHandler(id)}>Delete</button>
  </div>
);

const ToDoLista = () => {
  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const deleteHandlerFunc = (id) => {
    const filteredToDoList = toDoList.filter((todo) => todo.id !== id);

    setToDoList(filteredToDoList);
  };

  const handleInput = (event) => {
    const { value } = event.target;

    setInputValue(value);
  };

  const addGoal = () => {
    const newGoal = {
      id: uuid(),
      name: inputValue,
    };
    setToDoList((prev) => [...prev, newGoal]);
    setInputValue("");
  };

  return (
    <>
      <Header />
      <div>
        {toDoList.map((todo) => (
          <List
            goalName={todo.name}
            id={todo.id}
            deleteHandler={(id) => deleteHandlerFunc(id)}
          />
        ))}
        <div className='inline'>
          <input
            type='text'
            onChange={handleInput}
            value={inputValue}
            placeholder='Enter your goal...'
          />
          <button onClick={addGoal}>Enter</button>
        </div>
      </div>
    </>
  );
};

export default ToDoLista;
