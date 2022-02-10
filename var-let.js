// var => function scope
// let => block scope

function foo() {
  for (var x = 0; x < 5; x++) {
    console.log(x);
  }
  console.log(x); //no error.  x === 5
}

function bar() {
  for (let x = 0; x < 5; x++) {
    console.log(x);
  }
  //console.log(x); //ReferenceError: x is no defined
}

foo();
bar();

/* Notes:  
`var` has functional scope so x is incremented and in scope outside of the for loop.
`let` only has block scope, so you will receive "ReferenceError: x is not defined"
*/
