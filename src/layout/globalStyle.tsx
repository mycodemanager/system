import { Button, Space, Popover, Radio, InputNumber, Slider } from 'antd';
import { useTranslation } from 'react-i18next';
import { useState, useSyncExternalStore } from 'react';
import { ChromePicker } from 'react-color';
import { useTheme } from "@/hooks/useTheme"
import dark from "@/json/drrk.json"
import light from "@/json/light.json"




export default function GlobalStyle() {
    const [borderRadius, setBorderRadius] = useState(dark.token.borderRadius);
    const { todosStore } = useTheme()
    const state = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot)
    const [colorPrimary, setColorPrimary] = useState(JSON.parse(state)[JSON.parse(state).model].token.colorPrimary);

    // 改变主题色
    function onChangeColor(colors: any) {
        setColorPrimary(colors.hex)
        if (JSON.parse(state).model === "light") {
            light.token.colorPrimary = colors.hex
            todosStore.addTodo({ key: "light", value: JSON.stringify(light) })
            return
        }
        if (JSON.parse(state).model === "dark") {
            dark.token.colorPrimary = colors.hex
            todosStore.addTodo({ key: "dark", value: JSON.stringify(dark) })
            return
        }
    };

    // 改变模式
    function onChangeModel(e: any) {
        todosStore.addTodo({ key: "model", value: e.target.value })
    };

    // 改变全局borderradius
    function onBorderradius(v: number) {
        setBorderRadius(v)
        if (JSON.parse(state).model === "light") {
            light.token.borderRadius = v
            todosStore.addTodo({ key: "light", value: JSON.stringify(light) })
            return
        }
        if (JSON.parse(state).model === "dark") {
            dark.token.borderRadius = v
            todosStore.addTodo({ key: "dark", value: JSON.stringify(dark) })
            return
        }
    }

    return <>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Space style={{ display: 'flex', textAlignLast: "justify" }}>
                <div style={{ width: "60px", textAlign: "-moz-initial" }}>主题色</div>
                <Popover content={<ChromePicker color={colorPrimary} onChange={onChangeColor} />} title="选择主题色" trigger="click">
                    <Button type="primary">{colorPrimary}</Button>
                </Popover>
            </Space>
            <Space style={{ display: 'flex', alignItems: "center" }}>
                <div style={{ width: "60px", textAlignLast: "justify" }}>风格</div>
                <Radio.Group defaultValue="light" buttonStyle="solid" onChange={onChangeModel}>
                    <Radio.Button value="light">白天</Radio.Button>
                    <Radio.Button value="dark">黑夜</Radio.Button>
                </Radio.Group>
            </Space>
            <Space style={{ display: 'flex', textAlignLast: "justify" }}>
                <div style={{ width: "60px", textAlign: "-moz-initial" }}>圆角</div>
                <InputNumber style={{ width: "100px" }} addonAfter="px" value={borderRadius} onChange={(value) => onBorderradius(value as number)} />
                <Slider style={{ width: "60px" }} min={1} max={20} onChange={onBorderradius} value={borderRadius} />
            </Space>
        </Space></>
}