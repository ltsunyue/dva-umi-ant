
export function TableList(list) {
  let data = [];
  for (let i = 0; i< list.length; i++){
    if(list[i]['render'] === undefined){
      data.push({
        title: list[i].title,
        key: list[i].key,
        dataIndex: list[i].key,
        align: 'center',
      })
    }else {
      data.push({
        title: list[i].title,
        key: list[i].key,
        dataIndex: list[i].key,
        align: 'center',
        render: list[i].render,
      })
    }
  }
  return data;
}
