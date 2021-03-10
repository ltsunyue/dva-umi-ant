
import { connect } from 'dva';
import { acquire } from '@/utils/method';

function SecurityLayout({children}) {
  if(acquire('login') === null ){
    window.location.href = '/login';
  }
  return children;
}

export default connect(({ index }) => ({
  currentUser: index,
}))(SecurityLayout);
