
import React,{ useState}  from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Checkbox } from 'antd';
import styles from '@/assets/less/app.less';
import icon from '@/assets/img/u12.png';

function App({form, data, dispatch}) {
  let {loading} = data;

  const { getFieldDecorator } = form;
  const [remember, setRemember] = useState(false);
  const [forget, setForget] = useState(true);

  function handleSubmit(e){
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        dispatch({
          type: 'index/login',
          payload: {
            user_name: values.username
          },
        });
      }
    });
  }

  // 记住密码
  function onPassword(e) {
    setRemember(e.target.checked);
  }

  // 移除表单数据
  function remove() {
    form.setFieldsValue({
      username:'',
      password: '',
    });
  }
  // 忘记密码
  function forgetPassword(data) {
    setForget(data);
    remove();
  }
  return (
    <div className={styles.welcome} >
      <div className={styles.register}>
        <div
          className={styles.registerDiv}
        >
          <div
            className={styles.registerImg}
          />
          <div
            className={styles.registerDivDiv}
          >
            <div
              className={styles.registerDivIcon}
            >
              <img src={icon} alt="logo"/>
            </div>
            <h2
              className={styles.loginH2}
            >胸牌智能系统</h2>
            {
              forget ? (
                <Form onSubmit={handleSubmit}>
                  <div
                    className={styles.from}
                  >
                    <p
                      className={styles.headline}
                    >账号：</p>
                    <Form.Item
                      style={{
                        flex: 1
                      }}
                    >
                      {getFieldDecorator('username', {
                        rules: [{ required: true, message: '账号不能为空!' }],
                      })(
                        <Input
                          style={{
                            height: '40px'
                          }}
                          placeholder="请输入用户名"
                        />,
                      )}
                    </Form.Item>
                  </div>
                  <div
                    className={styles.from}
                  >
                    <p
                      className={styles.headline}
                    >密码：</p>
                    <Form.Item
                      labelAlign='left'
                      style={{
                        flex: 1
                      }}
                    >
                      {getFieldDecorator('password', {
                        rules: [{ required: true, message: '密码不能为空!' }],
                      })(
                        <Input
                          style={{
                            height: '40px'
                          }}
                          type="password"
                          placeholder="请输入密码"
                        />,
                      )}
                    </Form.Item>
                  </div>
                  <div
                    className={styles.remember}
                  >
                    <Checkbox
                      defaultValue={remember}
                      onChange={(e)=>{onPassword(e)}}
                    >记住密码</Checkbox>
                    <p
                      onClick={()=> forgetPassword(false)}
                      className={styles.forgetPassword}
                    >忘记密码?</p>
                  </div>
                  <Button
                    loading={loading}
                    type="primary"
                    htmlType="submit"
                    style={{width: '100%', height: '40px', borderRadius: '50px'}}
                  >
                    登录
                  </Button>
                </Form>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <div
                    className={styles.from}
                  >
                    <p
                      className={styles.headline}
                    >旧密码：</p>
                    <Form.Item
                      style={{
                        flex: 1
                      }}
                    >
                      {getFieldDecorator('username', {
                        rules: [{ required: true, message: '账号不能为空!' }],
                      })(
                        <Input
                          style={{
                            height: '40px'
                          }}
                          placeholder="请输入用户名"
                        />,
                      )}
                    </Form.Item>
                  </div>
                  <div
                    className={styles.from}
                  >
                    <p
                      className={styles.headline}
                    >新密码：</p>
                    <Form.Item
                      labelAlign='left'
                      style={{
                        flex: 1
                      }}
                    >
                      {getFieldDecorator('password', {
                        rules: [{ required: true, message: '密码不能为空!' }],
                      })(
                        <Input
                          style={{
                            height: '40px'
                          }}
                          type="password"
                          placeholder="请输入密码"
                        />,
                      )}
                    </Form.Item>
                  </div>
                  <div
                    className={styles.from}
                  >
                    <p
                      className={styles.headline}
                    >确认密码：</p>
                    <Form.Item
                      labelAlign='left'
                      style={{
                        flex: 1
                      }}
                    >
                      {getFieldDecorator('password', {
                        rules: [{ required: true, message: '密码不能为空!' }],
                      })(
                        <Input
                          style={{
                            height: '40px'
                          }}
                          type="password"
                          placeholder="请输入密码"
                        />,
                      )}
                    </Form.Item>
                  </div>
                  <div
                    className={styles.remember}
                  >
                    <p
                      onClick={()=> forgetPassword(true)}
                      className={styles.forgetPassword}
                    >返回登录</p>
                  </div>
                  <Button type="primary" htmlType="submit" style={{width: '100%', height: '40px', borderRadius: '50px'}}>
                    确认
                  </Button>
                </Form>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(({index}) => ({
  data: index,
}))(Form.create({ name: 'login' })(App));


