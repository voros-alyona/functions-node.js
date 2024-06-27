function myAPITS(someString: string, someNum: number) { ... };
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));