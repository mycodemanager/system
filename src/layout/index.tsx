import { Layout, theme, App } from 'antd';
import MenuDom from "./menu";
import { Outlet } from 'react-router-dom';
import HeaderRender from "./header"

const { Header, Content, Footer, Sider } = Layout;

export default function LayoutDom() {

    const { message, notification, modal } = App.useApp();
    const { token: { colorBgContainer }, } = theme.useToken();
    
    window.$message = message;
    window.$notification = notification;
    window.$modal = modal;

    return <Layout style={{ height: "100vh", background: colorBgContainer }}>
        <Sider
            style={{ background: colorBgContainer }}
            breakpoint="lg"
            collapsedWidth="0"
        >
            <MenuDom />
        </Sider>

        <Layout>
            <Header style={{ background: colorBgContainer }} >
                <HeaderRender />
            </Header>
            <Content>
                <Outlet />
            </Content>
            <Footer></Footer>
        </Layout>
    </Layout>
}