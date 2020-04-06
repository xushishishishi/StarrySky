import React from "react";
import "./login.css";
import { Form, Input, Button, message } from "antd";
import { createBrowserHistory } from "history";

const imgUrl = require("../../asset/image/astronaut-balloon.png");
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 }
};

const tailLayout = {
  wrapperCol: { offset: 12, span: 12 }
};
const history = createBrowserHistory();
export default class login extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    // 表单通过校验提交
    const onFinish = values => {
      const { username, password } = values;
      if (username === "许许" && password === "2020") {
        this.props.history.push("/home");
      } else {
        message.error("账号/密码错误，请重新输入");
      }
    };
    // 表单未通过校验
    const onFinishFailed = errorInfo => {};
    return (
      <div className="login-page">
        <div className="clear-float">
          <img className="main-img" src={imgUrl} alt=""></img>
          <div className="main-body">
            <div className="main-word">
              <span className="word-welcome">Welcome to</span>
              <span className="word-title">❤许许2号</span>
            </div>
            <div className="login-form-wrap">
              <div className="login-form-title">欢迎乘坐许许2号</div>
              <div className="login-form">
                <Form
                  {...layout}
                  name="loginIn"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "请输入你的用户名!"
                      }
                    ]}
                  >
                    <Input placeholder="请输入用户名" />
                  </Form.Item>

                  <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "请输入你的密码!"
                      }
                    ]}
                  >
                    <Input.Password placeholder="请输入密码" />
                  </Form.Item>

                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                      出发
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
          <div className="footer">
            一个人至少拥有一个梦想，有一个理由去坚强。心若没有栖息的地方，到哪里都是在流浪。
          </div>
        </div>
      </div>
    );
  }
}
