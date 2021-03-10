
import React, {useEffect} from 'react';
import { connect } from 'dva';
import { Card, Button, Input, Icon, Table, Popconfirm, Pagination } from 'antd';
import EnterpriseFrom from '@/form/enterpriseFrom';
import styles from '@/assets/less/enterprise.less';
import {TableList} from '@/utils/packaging';

let name = 'enterprise';
function Enterprise({data, dispatch}) {
  let {state, queryDate} = data;
  console.log(data);
  useEffect(()=>{
    dispatch({
      type: `${name}/login`,
      payload: {},
    });
  },[dispatch]);

  function query() {
    // let data = calculation();
    dispatch({
      type: `${name}/login`,
      payload: {
        current: 1,
        row: 10,
        ...data
      }
    });
  }

  function refresh() {
    // setQueryDate({
    //   industry_name: '',
    // });
    // dispatch({
    //   type: `${name}/login`,
    //   payload: {
    //     current: 1,
    //     row: 10
    //   }
    // });
  }

  // function calculation() {
  //   let data = {};
  //   for (let key in queryDate){
  //     if(queryDate[key] !== ''){
  //       data[key] = queryDate[key]
  //     }
  //   }
  //   return data
  // }

  // 展开
  function open(){
    // setState(!state);
  }
  return (
   <div>
     <Card
       className={styles.card}
       title={<p
        className={styles.title}
       >案场管理</p>}
       style={{
         marginBottom: '20px'
       }}
     >
       <div
         className={styles.search}
       >
         <div
           className={styles.condition}
         >
           <div
             className={styles.searchName}
           >
             <p
               className={styles.searchnamep}
             >行业名称：</p>
             <Input
               placeholder="行业名称"
               onChange={(item)=> {
                 // setQueryDate({ industry_name: item.target.value })
               }}
             />
           </div>
           <div
             className={styles.searchName}
           >
             <p
               className={styles.searchnamep}
             >行业名称：</p>
             <Input
               placeholder="行业名称"
               onChange={(item)=> {
                 // setQueryDate({ industry_name: item.target.value })
               }}
             />
           </div>
           <div
             className={styles.searchName}
           >
             <p
               className={styles.searchnamep}
             >行业名称：</p>
             <Input
               placeholder="行业名称"
               onChange={(item)=> {
                 // setQueryDate({ industry_name: item.target.value })
               }}
             />
           </div>
         </div>

         <div
           className={styles.queryButton}
         >
           <Button
             type="primary"
             onClick={()=> refresh()}
           >新增</Button>
           <Button
             type="primary"
             className={styles.addIndustry}
             onClick={()=> refresh()}
           >重置</Button>
           <Button
             type="primary"
             className={styles.addIndustry}
             onClick={()=> query()}
           >
             查询
           </Button>
           <span
             onClick={()=> open()}
             className={styles.open}
           >展开{ state ? <Icon type="down" /> : <Icon type="up" /> }</span>
         </div>
       </div>
     </Card>
     <div className={styles.Industry}>
       <Table
         pagination={ false }
         columns={TableList([
           {
             title: '姓名',
             key: 'name',
           },
           {
             title: '年龄',
             key: 'age',
           },
           {
             title: '住址',
             key: 'address',
           },
           {
             title: '操作',
             key: 'action',
             render: (text, record) => (
               <>
                 <Button
                   type="primary"
                   onClick={() => {}}
                 >
                   编辑
                 </Button>
                 <Popconfirm
                   title="修改当前状态?"
                   onConfirm={() => {}}
                   onCancel={() => {}}
                   okText="启用"
                   cancelText="禁用"
                 >
                   <Button
                     style={{
                       marginLeft: '10px',
                       marginRight: '10px',
                     }}
                     type="primary"
                   >修改状态</Button>
                 </Popconfirm>
                 <Button
                   type="primary"
                   onClick={() => {}}
                 >
                   账号信息
                 </Button>
               </>
             ),
           },
         ])}
         loading={data.loading}
         rowKey={(record, index) => `${record.age + index}`}
         dataSource={[
           {
             key: '1',
             name: '胡彦斌',
             age: 32,
             address: '西湖区湖底公园1号',
           },
           {
             key: '2',
             name: '胡彦祖',
             age: 42,
             address: '西湖区湖底公园1号',
           },{
             key: '3',
             name: '胡彦祖',
             age: 42,
             address: '西湖区湖底公园1号',
           },
         ]}
       />
       <div
        className={styles.pagination}
       >
         <Pagination defaultCurrent={6} total={500} />
       </div>
     </div>
     <EnterpriseFrom />
   </div>
 )
}

export default connect(({enterprise}) => ({
  data: enterprise,
}))(Enterprise);
