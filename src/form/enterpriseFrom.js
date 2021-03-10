
import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Button, Modal, Form, Input, Radio } from 'antd';
import styles from '@/assets/less/app.less';

function EnterpriseFrom(props) {
  const { data, dispatch, form } = props;

  const { getFieldDecorator } = form;

  useEffect(()=>{

  },[data]);

  return (
    <Modal
      visible={true}
      centered={true}
      title={data.name}
      okText="确认"

      cancelText="取消"
      onCancel={()=>{}}
      onOk={()=>{}}
    >
      <Form  layout="vertical">
        <div
          className={styles.from}
        >
          <p
            className={styles.headline}
          >案场名称</p>
          <Form.Item style={{flex: 1}}>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input the title of collection!' }],
            })(<Input  />)}
          </Form.Item>
        </div>
        
      </Form>
    </Modal>
  );
}

export default connect(({ enterprise }) => ({
  data: enterprise,
}))(Form.create({ name: 'form_in_modal' })(EnterpriseFrom));
