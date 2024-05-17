import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) {
      alert("Task tidak boleh kosong");
      return;
    }

    setTodos([...todos, { task: newTodo, completed: false }]);

    console.log(todos);

    setNewTodo("");
  };

  const handleDelete = (index) => {
    const updateTodo = [...todos];
    updateTodo.splice(index, 1);
    setTodos(updateTodo);
  };

  const handleComplete = (index) => {
    const updateTodo = [...todos];
    updateTodo[index].completed = !updateTodo[index].completed;
    setTodos(updateTodo);
  };

  return (
    <>
      <div className="bg-amber-300 flex flex-col items-center min-h-screen pt-10">
        <div className="rounded-md bg-slate-900 w-1/2 h-28 text-center mx-auto">
          <h1 className="text-white text-2xl py-4">TodoList App React</h1>
          <div className="">
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                className="rounded-sm w-3/4 h-10 focus:outline-none px-4"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
              <button
                type="submit"
                className="rounded-sm bg-amber-300 ml-3 py-2 px-10"
              >
                Tambah
              </button>
            </form>
          </div>
        </div>

        {todos.map((task, index) => {
          return (
            <div
              key={index}
              className="ontainer px-2 mt-5 bg-amber-50 w-1/2 h-28 rounded-md flex items-center justify-between"
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleComplete(index)}
                className="h-10 w-10  "
              />
              <h2
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.task}
              </h2>
              <button
                onClick={() => handleDelete(index)}
                className="text-3xl text-red-800"
              >
                {" "}
                &times;
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
