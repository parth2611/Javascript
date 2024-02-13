// Types of Memory

// Stack Memory:(Primitive datatype)
// The stack is a region of memory that operates in a Last In, First Out (LIFO) manner.
// It is used for storing function call information, local variables, and management of function execution.
// When a function is called, a new stack frame is created, and when the function completes, its stack frame is removed.
// Simple and fast memory allocation and deallocation.

// Heap Memory:(NonPrimitive datatype)
// The heap is a larger and more flexible region of memory.
// It is used for dynamic memory allocation, where variables or objects can be created and accessed at any time.
// Memory in the heap must be manually managed, and garbage collection is employed to free up memory occupied by objects that are no longer needed.
// Objects in the heap can have a longer lifespan and are not bound to the scope of a function call.

let myYoutubeName = 'GamerLadka';
let anotherName = myYoutubeName;
anotherName = 'parth';

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
  email: 'parthfaldu4@gmail.com',
  upi: 'parthfaldu@ybl',
};

let userTwo = userOne;
userTwo.email = 'pfaldu5@google.com';

console.log(userOne.email);
console.log(userTwo.email);
