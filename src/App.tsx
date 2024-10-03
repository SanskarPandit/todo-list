
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

const App = () => {
  return (
  <>
     <h1 className="mt-12 flex justify-center" style={{fontSize:"1.5rem",color:"white"}} >Add your daily TODOs</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App