import { Button, Space, Popover, Radio } from 'antd';
import { useTranslation } from 'react-i18next';
import { useState, useContext } from 'react';
import { ChromePicker } from 'react-color';
import { useTheme } from "@/hooks/useTheme"

const { ThemeConfig, styleConfig} = useTheme()

export default function GlobalStyle() {
    const [colorPrimary, setColorPrimary] = useState("#A162F7");
    // const { t, i18n } = useTranslation();
    const { theme, setTheme } = useContext(ThemeConfig);

    function onChangeColor(colors: any) {
        setColorPrimary(colors.hex)
        styleConfig[theme.style].token.colorPrimary = colors.hex;
        const obj = Object.assign(theme,styleConfig)
        setTheme(obj)
        console.log(obj,theme,1111);
        
    };

    function onChangeModel(e: any) {
        setTheme((obj: any) => ({ ...obj, style: e.target.value }))
        console.log(theme,2222);
        
    };

    return <>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Space style={{ display: 'flex', alignItems: "center" }}>
                <span>主题色:</span>
                <Popover content={<ChromePicker color={colorPrimary} onChange={onChangeColor} />} title="选择主题色" trigger="hover">
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