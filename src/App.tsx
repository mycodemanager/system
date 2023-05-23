import './App.css'
import { useSyncExternalStore } from 'react'
import { RenderRoutes } from "@/router/index.tsx"
import { HashRouter } from 'react-router-dom';
import { ConfigProvider, App } from 'antd';
import { useTheme } from "@/hooks/useTheme"
import BeforRouter from "@/router/beforRouter"



function AppRender() {
  const { todosStore } = useTheme();
  const state = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot)
  return (
    <>
      <ConfigProvider theme={{ ...JSON.parse(state)[JSON.parse(state).model] }}>
        <App>
          <HashRouter>
            <BeforRouter>
              <RenderRoutes />
            </BeforRouter>
          </HashRouter>
        </App>
      </ConfigProvider>
    </>
  )
}

export default AppRender