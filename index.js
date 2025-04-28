const n = 10;
for (let i = 1; i <= n; i++) {
  let str = "-".repeat(n - i) + "$".repeat(i) + "-".repeat(n - i);
  console.log(str);
}
