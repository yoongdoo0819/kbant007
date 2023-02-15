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

const queryMemberUrl = 'http://172.28.212.193:8080/members/new';
export const queryyMemberAxios = async () => {
  const response = await axios.get(queryMemberUrl);
  return response.data;
};

const queryMemberReactQuery = (id: string) => {
  const { data } = useQuery(['test'], queryyMemberAxios);
  console.log('data : ', { data });
  return { data };
};

/**
 * signUp
 */
const signUpUrl = 'http://172.28.212.193:8080/member/new';
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

/**
 * signIn
 */
const signInUrl = 'http://172.28.212.193:8080/member/login';
export const setSignInInfo = (id: string, password: string) => {
  return new Promise((resolve, reject) => {
    if (id !== '' && password !== '') {
      resolve(true);
    } else {
      reject(false);
    }
  });
};

export const signInAxios = async signInInfo => {
  console.log('id : ', signInInfo.id);
  console.log('password : ', signInInfo.password);
  const id = signInInfo.id;
  const password = signInInfo.password;
  const response = await axios
    .post(encodeURI(signInUrl), null, {
      params: {
        id,
        password,
      },
    })
    .then(response => response.status)
    .catch(err => console.warn('err : ', err));

  return response;
};

/**
 * storePost
 */
const storeBoardUrl = 'http://172.28.212.193:8080/board/store';
export const setBoardInfo = (title: string, content: string) => {
  return new Promise((resolve, reject) => {
    if (title !== '' && content !== '') {
      resolve(true);
    } else {
      reject(false);
    }
  });
};

export const storeBoardAxios = async boardInfo => {
  console.log('title : ', boardInfo.title);
  console.log('content : ', boardInfo.content);
  const id = boardInfo.id;
  const title = boardInfo.title;
  const content = boardInfo.content;
  const response = await axios
    .post(storeBoardUrl, null, {
      params: {
        id,
        title,
        content,
      },
    })
    .then(response => response.status)
    .catch(err => console.warn('err : ', err));

  return response;
};
