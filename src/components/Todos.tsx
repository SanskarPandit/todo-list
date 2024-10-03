import   { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

interface Todo {
  id: number;
  text: string;
}
const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState<number | null>(null); // Track the currently editing todo's id
  const [editText, setEditText] = useState<string>(""); // Track the new text for the todo being edited

  const handleUpdateTodo = (id: number) => {
    dispatch(updateTodo({ id, text: editText }));
    setIsEditing(null); // Reset the editing state
    setEditText(""); // Clear the input
  };

  return (
    <>
      <ul className="list-none mx-4 sm:mx-8 md:mx-12 lg:mx-24 xl:mx-32">
        {todos.map((todo:Todo) => (
          <li
            className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-800 px-4 py-3 rounded-md shadow-lg w-full"
            key={todo.id}
          >
            {/* Todo Text */}
            <div className="text-white text-base sm:text-lg font-medium w-full sm:w-auto mb-3 sm:mb-0">
              {isEditing === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="bg-gray-700 text-white p-2 rounded-md w-full sm:w-auto "
                />
              ) : (
                <span>{todo.text}</span>
              )}
            </div>

            {/* Buttons Container */}
            <div className="flex gap-2 sm:gap-4 flex-row items-center justify-end w-full sm:w-auto">
              {/* Remove Button */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-600 border-0 py-2 px-4 focus:outline-none hover:bg-red-700 rounded-md text-sm sm:text-md transition-all duration-300 flex items-center justify-center w-4/2 sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>

              {/* Edit or Save Button */}
              {isEditing === todo.id ? (
                <button
                  onClick={() => handleUpdateTodo(todo.id)}
                  className="text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded-md text-sm sm:text-md transition-all duration-300 w-1/2 sm:w-auto"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsEditing(todo.id);
                    setEditText(todo.text);
                  }}
                  className=" text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded-md text-sm sm:text-md transition-all duration-300 w-2/2 sm:w-auto "
                >
                  <img
                    src="src/assets/pencil.png"
                    alt="edit"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
