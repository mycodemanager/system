import { Button, Space, Popover, Radio } from 'antd';
import { useTranslation } from 'react-i18next';
import { useState, useSyncExternalStore } from 'react';
import { ChromePicker } from 'react-color';
import { useTheme } from "@/hooks/useTheme"
import dark from "@/json/drrk.json"
import light from "@/json/light.json"




export default function GlobalStyle() {
    const { todosStore } = useTheme()
    const state = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot)    
    const [colorPrimary, setColorPrimary] = useState(JSON.parse(state)[JSON.parse(state).model].token.colorPrimary);

    // 改变主题色
    function onChangeColor(colors: any) {
        setColorPrimary(colors.hex)
        if(JSON.parse(state).model === "light"){
            light.token.colorPrimary = colors.hex
            todosStore.addTodo({ key: "light", value: JSON.stringify(light) })
            return
        }
        if(JSON.parse(state).model === "dark"){
            dark.token.colorPrimary = colors.hex
            todosStore.addTodo({ key: "dark", value: JSON.stringify(dark) })
            return
        }
    };

    // 改变模式
    function onChangeModel(e: any) {
        todosStore.addTodo({ key: "model", value: e.target.value })
    };

    return <>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Space style={{ display: 'flex', alignItems: "center" }}>
                <span>主题色:</span>
                <Popover content={<ChromePicker color={colorPrimary} onChange={onChangeColor} />} title="选择主题色" trigger="click">
                    <Button type="primary">{colorPrimary}</Button>
                </Popover>
            </Space>
            <Space style={{ display: 'flex', alignItems: "center" }}>
                <span>风格:</span>
                <Radio.Group defaultValue="light" buttonStyle="solid" onChange={onChangeModel}>
                    <Radio.Button value="light">白天</Radio.Button>
                    <Radio.Button value="dark">黑夜</Radio.Button>
                </Radio.Group>

            </Space>
        </Space></>
}