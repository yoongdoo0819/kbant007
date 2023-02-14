import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// const queryfetch = useQuery('temp_query', restApi, {
//   onSuccess: data => {
//     console.log(data);
//   },
//   staleTime: 10000,
// });

// export default queryfetch;

// const queryfetch = () => {
//   return useQuery('rest', restApi);
//   //   , {
//   //     onSuccess: data => {
//   //       console.log(data);
//   //     },
//   //     //staleTime: 10000,
//   //   });
// };

const testUrl = 'http://172.28.212.193:8080/members/new';
export const testAxios = async () => {
  const response = await axios.get(testUrl);
  return response.data;
};

export const testUseReactQuery = () => {
  const { data } = useQuery(['test'], testAxios);
  console.log('data : ', { data });
  return { data };
};
