import NewTodo from './components/NewTodo'
import Todolist from './components/Todolist'

const App: React.FC = () => {
  const todos = [{ id: 't1', text: 'Finish the course' }]
  return (
    <div className="App">
      <NewTodo />
      <Todolist items={todos} />
    </div>
  )
}

export default App
