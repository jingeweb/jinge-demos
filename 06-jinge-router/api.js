export function getAllPersons() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if (Math.random() < 0.5) {
      //   reject(new Error('test error!'));
      // } else {
        resolve([{id: '001', name: 'xiaoge_001'}, {id: '002', name: 'xiaoge_002'}]);
      // }
    }, 200);
  });
}
export function getPersonById(id) {
  // simulate api fetch
  return new Promise(res => {
    setTimeout(() => {
      res({
        id,
        name: `xiaoge_${id}`,
        company: 'hansight',
        email: 'abeyuhang@gmail.com',
        address: 'Chengdu, Sichuan, China'
      });
    }, 100);
  });
}