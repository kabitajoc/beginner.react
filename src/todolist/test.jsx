import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAdd = () => {
    setItems((todos) => {
      return [
        ...todos,
        {
          id: Date.now(), // Generate a unique id using the current timestamp
          task: inputList,
        },
      ];
    });
    setInputList("");
  };

  const handleEdit = (id) => {
    const editedTask = items.find((item) => item.id === id);
    if (editedTask) {
      setInputList(editedTask.task);
      setEditItemId(id);
    }
  };

  const handleSaveEdit = () => {
    setItems((todos) => {
      return todos.map((item) =>
        item.id === editItemId ? { ...item, task: inputList } : item
      );
    });
    setInputList("");
    setEditItemId(null);
  };
  //   const handleSaveEdit = () => {
  //     setItems((todos) => {
  //       return todos.map((item) =>
  //         item.id === editItemId ? { ...item, task: inputList } : item
  //       );
  //     });
  //     setInputList("");
  //     setEditItemId(null);
  //   };

  const handleDelete = (id) => {
    const delItems = items.filter((item) => item.id !== id);
    console.log(delItems);
    setItems(delItems);
  };

  return (
    <div className="to-do">
      <h1>To-do list</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          value={inputList}
          onChange={itemEvent}
        />
        <button type="submit" onClick={handleAdd}>
          Add
        </button>
        <button type="submit" onClick={handleSaveEdit}>
          Save Edit
        </button>
      </form>
      <ul>
        {items.map((item) => (
          <li className="myTodo" key={item.id} id={item.id}>
            <span>{item.task}</span>
            <div className="todos-btn">
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <button onClick={() => handleEdit(item.id)}>edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
