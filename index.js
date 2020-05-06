// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const Mystack = () => {
  const storage = {};
  let index =0 ;

  const push = num => {
    storage[index] = num;
    index++;
  };

  const print = () =>{
  console.log(storage);
  };

  const pop = () => {
    delete storage[index-1];
    index --;
  };

  const size = () => index;
  
  return {push, print, pop, size};
};



const stack = Mystack();
stack.push(10);
stack.print();
stack.push(11);
stack.print();
stack.pop();
stack.print();
console.log(stack.size());




