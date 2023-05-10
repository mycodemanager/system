import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { menuRouter } from "@/router/index.tsx"
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function MenuDom() {
    const location = useLocation();
    const [selectKey, setSelectKey] = useState<string[]>([...location.pathname.replace("/layout", "").split("/").filter((item) => { return item !== "" })])
    const navigate = useNavigate();

    const onMenuRouter: MenuProps['onClick'] = ({ keyPath }) => {
        setSelectKey(keyPath)
        const routerPath = `/layout/${keyPath.reverse().join('/')}`
        navigate(routerPath)
    }
    return <Menu onClick={onMenuRouter} defaultSelectedKeys={selectKey} defaultOpenKeys={selectKey} mode="inline" items={menuRouter} />

}