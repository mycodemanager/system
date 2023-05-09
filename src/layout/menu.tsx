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
    return <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
            console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
        }}
    >
        <Menu onClick={onMenuRouter} theme="dark" mode="inline" items={menuRouter} />
    </Sider>
}