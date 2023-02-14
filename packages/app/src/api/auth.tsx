const ID = 'a';
const PASSWORD = 'a';

export const auth = (id: string, password: string) => {
  return new Promise((resolve, reject) => {
    if (id === ID && password === PASSWORD) {
      resolve(true);
    } else {
      reject(false);
    }
  });
};

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
