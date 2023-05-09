import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { menuRouter } from "@/router/index.tsx"
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;

export default function MenuDom() {
    const navigate = useNavigate();
    const onMenuRouter: MenuProps['onClick'] = ({ key }) => {
        const routerPath = `/layout/${key}`
        navigate(routerPath)
    }
    return <Menu onClick={onMenuRouter}  mode="inline" items={menuRouter} />

}