import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { testAxios } from './react-queryAPI';

const testUrl = 'http://172.28.212.193:8080/members/new';
const params = new URLSearchParams();

export const testAxios2 = async () => {
  //   params.append('id', 'a');
  //   params.append('password', 'a');
  const id = 'a';
  const password = 'a';
  const response = await axios
    .post(testUrl, null, {
      params: {
        id,
        password,
      },
    })
    .then(response => response.status)
    .catch(err => console.warn(err));

  return response;
};
/*
export const testUseMutation = () => {
  const loginMutation = useMutation(testAxios2);
  const { mutate, isLoading, isError } = loginMutation;
};
*/
