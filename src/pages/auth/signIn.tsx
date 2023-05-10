import "./sigin.less"
import { Card, Button, Divider, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function SignIn() {
    const { t } = useTranslation();
    const formRules = {
        username: [{ required: true, message: t("message.account"), trigger: 'blur' }],
        password: [{ required: true, message: t("message.pwd"), trigger: 'blur' }],
    }
    const navigate = useNavigate();

    function informationEcho() {
        if (!localStorage?.getItem("userLoginInfo")) return []
        return JSON.parse(localStorage?.getItem("userLoginInfo") as string)
    }

    function onFinish(values: any) {
        if (values.remember) {
            localStorage.setItem("userLoginInfo", JSON.stringify([
                {
                    name: "username",
                    value: values.username,
                },
                {
                    name: "remember",
                    value: values.remember,
                },
            ]));
        } else {
            localStorage.removeItem("userLoginInfo");
        }
        localStorage.setItem("system_token","测试token")
        navigate("/layout/home")
    };

    return <>
        <div className="login_page">
            <Card style={{ width: 300, margin: "0 auto" }}>

                <Button block={true} >Google {t("login.loginBtn")}</Button>

                <Divider>Or</Divider>

                <Form name="basic" layout="vertical" onFinish={onFinish} fields={informationEcho()}  >
                    <Form.Item label="用户名" name="username" rules={formRules["username"]}  >
                        <Input />
                    </Form.Item>

                    <Form.Item label="密码" name="password" rules={formRules["password"]}  >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>{t("login.rememberPwd")}</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>{t("login.loginBtn")}</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    </>
}