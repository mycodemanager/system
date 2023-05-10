import { Avatar, Button, Dropdown } from 'antd';
import { TranslationOutlined } from "@ant-design/icons"
import type { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';

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
    const { i18n } = useTranslation()
    function changeLanguage({ key }: any) {
        i18n.changeLanguage(key)
    }
    return <>
        <div style={headerStyle} >
            <Dropdown menu={{ items, onClick: changeLanguage }} placement="bottom" >
                <Button shape="circle" icon={<TranslationOutlined />} />
            </Dropdown>

            <Avatar
                style={{ marginLeft: "10px" }}
                size={32}
                src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
            />
        </div>
    </>
}