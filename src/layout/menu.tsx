import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { menuRouter } from "@/router/index.tsx"
import { useNavigate } from 'react-router-dom';

export default function MenuDom() {
    const navigate = useNavigate();
    const onMenuRouter: MenuProps['onClick'] = ({ keyPath }) => {        
        const routerPath = `/layout/${keyPath.reverse().join('/')}`
        navigate(routerPath)
    }
    return <Menu onClick={onMenuRouter} mode="inline" items={menuRouter} />

}