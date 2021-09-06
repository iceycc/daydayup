// lib.js
export let counter = 3;
export function incCounter() {
    counter++;
}

export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);

