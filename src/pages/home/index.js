
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'dva';
import { removeItem } from '@/utils/method'
import styles from '@/assets/less/home.less';
import router from 'umi/router';
import { acquire } from '@/utils/method'
const { Header, Sider, Content } = Layout;

function Home(data) {
  console.log(data);
  // console.log(data.user_name);

  const [collapsed, setCollapsed] = useState(false);
  const [userData, setDate] = useState({});

  useEffect(()=>{
    if(acquire('login')){
      window.addEventListener('resize', debounce(handle, 1000));
      setDate({
        ...acquire('login')
      })
    }else {
      router.push('/');
    }
    return ()=>{
      window.removeEventListener('resize', debounce(handle, 300));
    }
  },[]);

  // 处理函数
  function handle() {
    let width=document.documentElement.clientWidth;
    if(width < 700 )  setCollapsed(true);
    if( width > 700) setCollapsed(false);
  }

  function debounce(fn, wait) {
    let timeout = null;
    return function() {
      if(timeout !== null)   clearTimeout(timeout);
      timeout = setTimeout(fn, wait);
    }
  }

  function toggle() {
    setCollapsed(!collapsed)
  }

  // 退出
  function quit() {
    removeItem('login');
    router.push('/login');
  }
 return (
   <Layout
     style={{
       height: '100vh'
     }}
   >
     <Sider trigger={null} collapsible collapsed={collapsed}>
       <div
         className={styles.logo}
       />
       <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
         <Menu.Item key="1">
           <Icon type="user" />
           <span>案场管理</span>
         </Menu.Item>
         <Menu.Item key="2">
           <Icon type="video-camera" />
           <span>nav 2</span>
         </Menu.Item>
         <Menu.Item key="3">
           <Icon type="upload" />
           <span>nav 3</span>
         </Menu.Item>
       </Menu>
     </Sider>
     <Layout>
       <Header style={{ background: '#fff', padding: 0 }}>
         <div
          className={styles.logoHead}
         >
           <div>
             <Icon
               className="trigger"
               style={{
                 fontSize: '22px',
                 marginLeft: '10px'
               }}
               type={collapsed ? 'menu-unfold' : 'menu-fold'}
               onClick={()=> toggle()}
             />
           </div>
           <div
            className={styles.logoNquit}
           >
             <p>欢迎! {userData.user_name}</p>
             <Icon
               onClick={()=> quit()}
               className={styles.trigger}
               type="poweroff"
             />
           </div>
         </div>
       </Header>
       <Content
         style={{
           margin: '24px 16px',
           padding: 24,
           background: '#fff',
           minHeight: 280,
         }}
       >
         {data.children}
       </Content>
     </Layout>
   </Layout>
 )
}

export default Home;
