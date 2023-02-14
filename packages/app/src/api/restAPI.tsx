import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as React from 'react';

/*
const url = 'http://172.28.212.193:8080/members/new';
const options = {
  method: 'GET',
  url: url,
  headers: {
    //Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
  data: {
    // property_one: value_one,
    // property_two: value_two,
  },
};
const restApi = async () => {
  console.log('start');
  const result = await axios(options);
  console.log('end');
  console.log(result);
  return result;
};

export default restApi;
*/

const signUpUrl = 'http://172.28.212.193:8080/members/new';
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
    .post(encodeURI(signUpUrl), null, {
      params: {
        id,
        password,
      },
    })
    .then(response => response.status)
    .catch(err => console.warn('err : ', err));

  return response;
};

const queryMemberUrl = 'http://172.28.212.193:8080/members/new';
export const queryyMemberAxios = async id => {
  const response = await axios.get(queryMemberUrl + '/' + id);
  return response.data;
};

export const queryMemberReactQuery = (id: string) => {
  const { data } = useQuery(['test'], queryyMemberAxios(id));
  console.log('data : ', { data });
  return { data };
};
