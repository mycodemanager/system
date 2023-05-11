import './App.css'
import { createContext, useEffect, useState } from 'react'
import { RenderRoutes } from "@/router/index.tsx"
import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useTheme } from "@/hooks/useTheme"
import BeforRouter from "@/router/beforRouter"
const { styleConfig, ThemeConfig } = useTheme()

function App() {
  const [theme, setTheme] = useState<any>({ styleConfig, style: "dark" })
  useEffect(()=>{
    console.log("改变了");
    
  },[ThemeConfig])
  return (
    <>
      <ThemeConfig.Provider value={{ theme, setTheme }}>
        <ConfigProvider theme={{ ...theme.styleConfig[theme.style] }}>
          <HashRouter>
            <BeforRouter>
              <RenderRoutes />
            </BeforRouter>
          </HashRouter>
        </ConfigProvider>
      </ThemeConfig.Provider>
    </>
  )
}

export default App
