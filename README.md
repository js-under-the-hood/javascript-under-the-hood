# Javascript Under The Hood 

We introduce you "Javascript under the hood" project, which is educational and intended for people who take their first steps in Javascript. The project explains javascript concepts, especially the call stack. User can write and see how the functions increase and get out of the call stack. All that are shown by animations.

## a, b, c functions

```javascript
function a() {
    b();
}

function b() {
    c();
}

function c() {
    return 1;
}

a();
```

<p align='center'>
  <img src='https://i.imgur.com/Cj1SYsX.gif' alt='call stack'>
</p>

## recursion

```javascript
const factorial = (n) => {
    if (n === 1) return 1;
    return n * factorial(n - 1);
};

const a = factorial(5);
```

<p align='center'>
  <img src='https://i.imgur.com/qMMG1OR.gif' alt='call stack'>
</p>

## setTimeout

```javascript
const foo = () => "foo";
const bar = () => "bar";
const baz = () => "baz";

setTimeout(() => {

    setTimeout(() => {
        baz();
    }, 0);
    
    foo();
}, 1000);

bar();
```

<p align='center'>
  <img src='https://i.imgur.com/Cj1SYsX.gif' alt='call stack'>
</p>

## Website

<p align='center'>
  <img src='https://i.imgur.com/lT6HCxJ.png' alt='call stack'>
</p>
