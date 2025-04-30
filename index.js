// membuat staircase
let n = 10;
for (let i = 1; i <= n; i++) {
  let str = "-".repeat(n - i) + "*".repeat(i) + "-".repeat(n - i);
  // console.log(str);
}

// mengambil sum terbesar dan terkecil
let arr = [11, 12, 13, 14, 15];
function miniMaxSum(arr) {
  let highest = Math.max(...arr);
  let lowest = Math.min(...arr);
  let sum = arr.reduce((a, b) => a + b, 0);
  // console.log(sum);
  // console.log(lowest);
  // console.log(highest);
  // console.log(sum - highest + " " + (sum - lowest));
}
miniMaxSum(arr);

// menghitung kue ulang tahun
let candles = [3, 2, 1, 3];
function birthdayCakeCandles(candles) {
  const largestN = candles.sort((a, b) => b - a)[0];
  return candles.filter((c) => c == largestN).length;
  // const maxNum = Math.max(...candles);
  // let counter = 1;
  // for (let i = 0; i < candles.length; i++) {
  //   if (candles[i] == maxNum) counter++;
  //   return counter;
  // }
}
birthdayCakeCandles(candles);

// mengubah format waktu
let s = "07:05:45PM";
function timeConvertion(s) {
  let [hours, minutes, seconds] = s
    .substring(0, 8)
    .split(":")
    .map((x) => Number(x));

  if (s.includes("PM")) {
    hours = hours === 12 ? 12 : hours + 12;
  } else {
    hours = hours === 12 ? 0 : hours;
  }
  [hours, minutes, seconds] = [hours, minutes, seconds].map((x) =>
    String(x).padStart(2, "0")
  );
  return `${hours}:${minutes}:${seconds}`;
}
timeConvertion(s);

// membandingkan triplets
function compareTriplets() {
  const result = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      result[0]++;
    } else if (a[i] < b[i]) {
      result[1]++;
    }
  }
  return result;
}
compareTriplets();
