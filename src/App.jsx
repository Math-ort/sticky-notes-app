import { NotasProvider } from "./context/NotesContext"
import  NoteBoard from "./components/NoteBoard"
function App() {
  return (
    <NotasProvider> 
      <div className="app-container">
        <h1>🗒️ Sticky Notes</h1>
        <NoteBoard>

        </NoteBoard>
        
      </div>
    </NotasProvider>
  )
}

export default App
