import './App.css'
import { useSyncExternalStore } from 'react'
import { RenderRoutes } from "@/router/index.tsx"
import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useTheme } from "@/hooks/useTheme"
import BeforRouter from "@/router/beforRouter"



function App() {
  const { todosStore } = useTheme();
  const state = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot)
  return (
    <>
      <ConfigProvider theme={{ ...JSON.parse(state)[JSON.parse(state).model] }}>
        <HashRouter>
          <BeforRouter>
            <RenderRoutes />
          </BeforRouter>
        </HashRouter>
      </ConfigProvider>
    </>
  )
}

export default App