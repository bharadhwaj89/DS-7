// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const MyStack = class {
  constructor(){
    this.data = {};
    this.index =0;
  }

push(item){
 this.index ++;
 this.data[this.index]=item;
}

pop(){
  const item = this.data[this.index];
  delete this.data[this.index];
  this.index--;
}
size(){
  return this.index;
}

peek(){
  return this.data[this.index];
}
print(){
  console.log(this.data);
}
}

const stack = new MyStack();

stack.push(1);
stack.push(2);
stack.print();
stack.pop();
stack.print();
const item = stack.peek();
console.log(item);
















