import "./sigin.less"
import { Card, Button, Divider, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function SignIn() {
    const { t } = useTranslation();
    const formRules = {
        username: [{ required: true, message: t("message.pwd"), trigger: 'blur' }],
        password: [{ required: true, message: t("message.pwd"), trigger: 'blur' }],
    }
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        navigate("/layout/home")
    };

    return <>
        <div className="login_page">
            <Card style={{ width: 500, margin: "0 auto" }}>

                <Button block={true} >Google 登录</Button>
                <Divider>Or</Divider>
                <Form name="basic" layout="vertical" onFinish={onFinish}  >
                    <Form.Item label="用户名" name="username" rules={formRules["username"]}  >
                        <Input />
                    </Form.Item>

                    <Form.Item label="密码" name="password" rules={formRules["password"]}  >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>记住账号密码</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>登录</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    </>
}