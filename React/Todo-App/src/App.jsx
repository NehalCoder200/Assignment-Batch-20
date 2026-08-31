import React, { useState } from "react"
// import todoItem from "./components/todoItem"
import { ToastContainer, toast } from "react-toastify";

function App() {

  let [input, setInput] = useState('')
  let [arryTodos, setArryTodos] = useState([])
  let [editTodo, setEditTodo] = useState(null)

  // console.log(todos);


  const toastHandler = (message) => {
    return toast(message);
  };

  let addHandler = () => {

    if (!input.trim()) {
      return toastHandler('Enter you task')
    }

    if (arryTodos) {
      let existingTodo = arryTodos.map((item) => item.title.includes(input))

      if (existingTodo[0]) {
        return toastHandler("This is item already in add...")
      }

    }

    if (editTodo) {
      let updateTodo = arryTodos.map((item) => item.id = editTodo ? { ...item, title: input } : item)

      setArryTodos(updateTodo)
      setEditTodo(null)
      setInput('')
    }

    let todoItem = {
      title: input,
      id: Date.now(),
    }

    setArryTodos((per) => [...per, todoItem]);
    setInput('')


  }

  let editHandler = (id) => {
    let editItem = arryTodos.find((item) => item.id == id)

    setEditTodo(editItem.id)
    setInput(editItem.title)

    if(editItem){
      return toastHandler("edit item")
    }

  }

  let deleteHandler = (id) => {
    let deleteTodo = arryTodos.filter((item) => item.id !== id)

    setArryTodos(deleteTodo)
    
    if (!deleteTodo.id) {
      return toastHandler(`delete item`)
    }

  }


  return (
    <>

      <div className="todo-container">

        <div className="todo-card">

          {/* <!-- Header --> */}
          <header className="todo-header">
            <div>
              <h2>Todo Task Manager</h2>
            </div>
          </header>

          {/* <!-- Input Section --> */}
          <div className="input-group">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a new task..." />
            <button type="button" onClick={addHandler}>Add Task</button>
          </div>

          {/* <!-- Task List --> */}
          <div className="">

            {/* console.log({arryTodos}); */}

            {arryTodos.length > 0 ? (arryTodos.map((todoItems) => <ul className="task-list " key={todoItems.id}>
              <li className="task-item">
                <span className="task-text">{todoItems.title}</span>

                <div className="flex gap-[5px]">

                  <button className="edit" onClick={() => editHandler(todoItems.id)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                  </button>

                  <button className="delete-btn" title="Delete" onClick={() => deleteHandler(todoItems.id)}>
                    <svg width="18" height="18" color="red" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                  </button>

                </div>

              </li>
            </ul>)) : (<p className="text-center text-[gray] ">No Task add...</p>)}






          </div>

        </div>
        <ToastContainer />

      </div>

    </>
  )
}

export default App
