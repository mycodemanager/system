import { theme } from 'antd';
import { createContext } from 'react'

const ThemeConfig = createContext<any>(null)

const styleConfig: { [key: string]: any } = {
    dark: {
        token: {
            colorPrimary: '#A162F7',//主题色配置
        },
        //自定义组件主题
        components: {
        },
    },
    light: {
        token: {
            colorPrimary: '#00b96b',//主题色配置s
        },
        //自定义组件主题
        components: {
            Menu: {
                colorPrimary: "#A162F7"
            }
        },
    }
}

export function useTheme() {
    return {
        styleConfig,
        ThemeConfig
    }
}