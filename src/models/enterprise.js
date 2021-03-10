
import {addinternal} from '@/utils/method'

export default {
  namespace: 'enterprise',
  state: {
    name: '案场管理',
    loading: false,
    state: true,
    queryDate: {
      industry_name: '',
    }
  },
  effects: {
    *login({ payload }, { call, put }) {
      console.log(88);
      yield put({
        type: 'saveCurrentUser',
        payload: {
          loading: true
        },
      });

      addinternal('login', payload);
      yield put({
        type: 'saveCurrentUser',
        payload: {
          loading: false
        },
      });
    }
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
