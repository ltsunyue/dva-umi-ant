
import {addinternal} from '@/utils/method'
import router from 'umi/router';

export default {
  namespace: 'index',
  state: {
    user_name: '',
    loading: false,
  },
  effects: {
    *login({ payload }, { call, put }) {
      yield put({
        type: 'saveCurrentUser',
        payload: {
          loading: true
        },
      });

      let {user_name} = payload;
      addinternal('login', payload);
      yield put({
        type: 'saveCurrentUser',
        payload: {
          user_name,
          loading: false
        },
      });
      router.push('/');
    }
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
