import { theme } from 'antd';
import { useState } from 'react';



const publicTheme = {
    algorithm: theme.defaultAlgorithm
}

const dark = {
    tkoen: {
        colorPrimary: '#A162F7',//主题色配置
    },
    //自定义组件主题
    components: {
        Menu: {
            colorPrimary: "#A162F7",
        }
    },
}
const light = {
    tkoen: {
        colorPrimary: '#00b96b',//主题色配置
    },
    //自定义组件主题
    components: {
        Menu: {
            colorPrimary: "#A162F7"
        }
    },
}

function cutoverTheme() {

}

export function useTheme() {
    return {
        dark,
        light,
    }
}