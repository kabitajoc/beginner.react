import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAdd = () => {
    setItems((todos) => {
      return [
        ...todos,
        {
          id: Date.now(),
          task: inputList,
          isEditing: false,
        },
      ];
    });
    setInputList("");
  };

  const handleEdit = (id) => {
    setItems(items.map(item => {
      if(item.id === id) {
        return {...item, isEditing: true}
      }
      return item;
    }));
  };

  const handleSaveEdit = (e, id) => {
    const editedTask = e.target.value;

    setItems(items.map(item => {
      if(item.id === id) {
        return {...item, task: editedTask, isEditing: false}
      }
      return item;
    }));
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
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
      </form>
      <ul>
        {items.map((item) => (
          <li className="myTodo" key={item.id} id={item.id}>
            {!item.isEditing ? (
              <span>{item.task}</span>
            ) : (
              <input
                type="text"
                defaultValue={item.task}
                onBlur={(e) => handleSaveEdit(e, item.id)}
                className="edit-input"
              />
            )}
            <div className="todos-btn">
              {!item.isEditing ? (
                <button onClick={() => handleEdit(item.id)}>Edit</button>
              ) : (
                <button onClick={(e) => handleSaveEdit(e, item.id)}>Save</button>
              )}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
