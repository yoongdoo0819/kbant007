import axios from 'axios';
import * as React from 'react';

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
