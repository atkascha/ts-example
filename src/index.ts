// "npx tsc" to compile

// import User from './User';

// let u = new User('atka', 2);
// u.getOlder();
// console.log(u.details)

const button = document.querySelector('button');
const span = document.querySelector('#count')!;
const add = (_event: any) => {
  let count: number = parseInt(span.innerHTML);
  count++;
  span.innerHTML = `${count}`;
}
button?.addEventListener('click', add);
