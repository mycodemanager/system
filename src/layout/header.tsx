import { Avatar, Button, Dropdown, Drawer, Space, Popover, Radio } from 'antd';
import { TranslationOutlined, SkinOutlined } from "@ant-design/icons"
import type { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import GlobalStyle from "./globalStyle"

const headerStyle = {
    display: 'flex',
    justifyContent: "end",
    alignItems: "center",
    height: "100%"
}
const items: MenuProps['items'] = [
    {
        key: "en",
        label: "English"
    },
    {
        key: "zh-CN",
        label: "中文简体"
    }
]

export default function HeaderRender() {
    const [styleConfigOpen, setStyleConfigOpen] = useState(false);
    const { t, i18n } = useTranslation();

    function changeLanguage({ key }: any) {
        i18n.changeLanguage(key)
    }

    return <>
        <div style={headerStyle} >
            <Dropdown menu={{ items, onClick: changeLanguage }} placement="bottom" >
                <Button shape="circle" type="text" icon={<TranslationOutlined />} />
            </Dropdown>

            <Avatar
                style={{ marginLeft: "10px" }}
                size={32}
                src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
            />

            <Button shape="circle" type="text" onClick={() => setStyleConfigOpen(true)} icon={<SkinOutlined />} style={{ marginLeft: "10px" }} />

            <Drawer title={t("header.styleDrawerTitle")} placement="right" onClose={()=>setStyleConfigOpen(false)} open={styleConfigOpen}>
                <GlobalStyle />
            </Drawer>
        </div>
    </>
}