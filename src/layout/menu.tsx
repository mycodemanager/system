import { Layout, Menu } from 'antd';
import { menuRouter } from "@/router/index.tsx"
const { Sider } = Layout;

export default function MenuDom() {
    return <Sider
        style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
        }}
    >
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={menuRouter} />
    </Sider>
}