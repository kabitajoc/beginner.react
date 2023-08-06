import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const [editList,setEditList]=useState([]);
 
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
          id: Date.now(),
          task: inputList,
        },
      ];
    });
    setInputList("");
  };

  const handleEdit = (e,id) => {
    const editedTask = items.find((item) => item.id === id);
    if (editedTask) {
      setEditList([].task);
      // e.target
      setEditItemId(id);
    }
    

  };

  // const handleEdit = (id) => {
  //   const editedTask = items.find((item) => item.id === id);
  //   console.log(editedTask);
  // };

  // const handleSaveEdit = () => {
  //   setItems((items) => {
  //     return items.map((item) =>
  //       item.id === editItemId ? { ...item, task: inputList } : item
  //     );
  //   })}
  //   setInputList("");
  //   setEditItemId(null);
  // };
  const handleDelete = (id) => {
    const delItems = items.filter((item) => item.id !== id);
    console.log(delItems);
    setItems([...delItems]);
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
            <span>{item.task}</span>
            <input type="text" 
            disabled="true" 
             className="edit-input" />
            <div className="todos-btn">
              <button onClick={(e) => handleEdit(e,item.id)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
