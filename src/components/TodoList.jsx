import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTdo, updateTodo } from "../features/todo/todoSlice";

function Modal({ todo, closeModal }) {
  const [input, setInput] = useState(todo.name); // Initialize with todo name
  const dispatch = useDispatch();

  // Ensure state updates when todo changes
  // React.useEffect(() => {
  //   setInput(todo.name);
  // }, [todo]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Prevent saving empty input
    dispatch(updateTodo({ id: todo.id, name: input })); // Dispatch updated todo
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold">Edit Todo</h2>
        <form onSubmit={addTodoHandler}>
          <div className="mt-4">
            <div>
              <label className="block text-sm font-semibold">Todo Name</label>
              <input
                type="text"
                value={input} // Controlled component
                className="mt-2 px-4 py-2 border border-gray-300 rounded w-full"
                onChange={(e) => setInput(e.target.value)} // Update state on change
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Todos() {
  const todos = useSelector((state) => state.todos.todo);
  const dispatch = useDispatch();

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  // Open Modal and set the current todo for editing
  const openModal = (todo) => {
    setCurrentTodo(todo);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTodo(null);
  };

  return (
    <div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white mr-10">{todo.name}</div>
            <button
              onClick={() => openModal(todo)} // Open modal on edit button click
              className="text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md mr-4"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(removeTdo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>

      {/* Show Modal if it's open */}
      {isModalOpen && currentTodo && (
        <Modal todo={currentTodo} closeModal={closeModal} />
      )}
    </div>
  );
}

export default Todos;
