import { SingletonInstance } from './Singleton.js';
import { Stack } from './Stack.js';

// Singleton Example
const s1 = SingletonInstance.getInstance();
const s2 = SingletonInstance.getInstance();

if (s1 === s2) {
  console.log('Singleton works, both variables contain the same instance.');
} else {
  console.log('Singleton failed, variables contain different instances.');
}

// Stack Example
const stack = new Stack();
// Adding element to the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Printing the stack element
// prints [10, 20, 30]
console.log(stack.printStack());

// returns 30
console.log(stack.peek());

// returns 30 and remove it from stack
console.log(stack.pop());

// returns [10, 20]
console.log(stack.printStack());
