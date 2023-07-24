import Axios from 'axios';
import {store} from '../store';
import {handleLoading} from '../store/auth';
import {Toast} from 'native-base';

const baseURL = 'https://yulbasali.urinboydev.uz';

const axios = Axios.create({baseURL, withCredentials: true});

axios.interceptors.request.use(configs => {
  store.dispatch(handleLoading(true));
  return configs;
});

axios.interceptors.response.use(res => {
  store.dispatch(handleLoading(false));
  if (res?.data?.errors > 0 && res?.data?.message) {
    Toast.show({
      title: res?.data?.message,
      placement: 'top',
    });
  }
  return res;
});

export {baseURL, axios as default};
