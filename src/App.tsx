import './App.css'
import { RenderRoutes } from "@/router/index.tsx"
import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useTheme } from "@/hooks/useTheme"
import BeforRouter from "@/router/beforRouter"
const { dark, light } = useTheme()

function App() {
  return (
    <>
      <ConfigProvider theme={dark}>
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
