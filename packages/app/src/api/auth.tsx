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
