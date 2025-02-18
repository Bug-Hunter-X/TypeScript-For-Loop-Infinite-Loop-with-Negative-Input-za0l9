function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works fine
printNumbers(0); // No output but doesn't throw an error
printNumbers(-1); // Infinite loop, but in TS it doesn't show the error