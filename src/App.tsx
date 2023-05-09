import './App.css'
import { RenderRoutes } from "@/router/index.tsx"
import { HashRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <HashRouter>
        <RenderRoutes />
      </HashRouter>
    </>
  )
}

export default App
