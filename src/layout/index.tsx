import { Layout, theme } from 'antd';
import MenuDom from "./menu";
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

export default function LayoutDom() {
    const { token: { colorBgContainer }, } = theme.useToken();

    return <Layout hasSider>
        <MenuDom />
        <Layout>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer></Footer>
        </Layout>
    </Layout>
}