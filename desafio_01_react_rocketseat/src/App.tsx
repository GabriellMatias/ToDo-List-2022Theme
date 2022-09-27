import { Header } from "./components/Header"
import { TaskList } from "./components/TaskList"
import { Tasks } from "./components/Tasks"
import './global.css'


function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>

      <main>

        <Tasks/>
        
      </main>
      
    </div>
  )
}

export default App
