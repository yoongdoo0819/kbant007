import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { testAxios } from './react-queryAPI';

const testUrl = 'http://172.28.212.193:8080/members/new';
//const params = new URLSearchParams();

export const setSignUpInfo = (id: string, password: string) => {
  return new Promise((resolve, reject) => {
    if (id !== '' && password !== '') {
      resolve(true);
    } else {
      reject(false);
    }
  });
};

export const signUpAxios = async signUpInfo => {
  console.log('id : ', signUpInfo.id);
  console.log('password : ', signUpInfo.password);
  const id = signUpInfo.id;
  const password = signUpInfo.password;
  const response = await axios
    .post(encodeURI(testUrl), null, {
      params: {
        id,
        password,
      },
    })
    .then(response => response.status)
    .catch(err => console.warn('err : ', err));

  return response;
};
