import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput("");
    }
  };

  return (
    <>
      <form
        onSubmit={addTodoHandler}
        className="flex flex-col sm:flex-row items-center justify-center mt-12 mx-4 space-y-3 sm:space-y-0 sm:space-x-3"
      >
        <input
          type="text"
          className="w-full sm:w-auto bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full sm:w-auto text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-all duration-300"
        >
          Add Todo
        </button>
      </form>
    </>
  );
};

export default AddTodo;
