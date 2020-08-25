let spinner = ['\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|   ']

let counter = 0;
for (const elem of spinner) {
  counter++
  setTimeout(() => {
    process.stdout.write(elem);
  }, 200 * counter);
}