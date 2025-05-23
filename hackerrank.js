// membuat staircase
let n = 10;
for (let i = 1; i <= n; i++) {
  let str = " ".repeat(n - i) + "*".repeat(i);
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
  console.log(sum - highest + " " + (sum - lowest));
}
// miniMaxSum(arr);

// menghitung kue ulang tahun
let candles = [3, 2, 1, 3];
function birthdayCakeCandles(candles) {
  const largestN = candles.sort((a, b) => b - a)[0];
  console.log(candles.filter((c) => c == largestN).length);
  // const maxNum = Math.max(...candles);
  // let counter = 1;
  // for (let i = 0; i < candles.length; i++) {
  //   if (candles[i] == maxNum) counter++;
  //   return counter;
  // }
}
// birthdayCakeCandles(candles);

// mengubah format waktu
let st = "07:05:45PM";
function timeConvertion(st) {
  let [hours, minutes, seconds] = st
    .substring(0, 8)
    .split(":")
    .map((x) => Number(x));

  if (st.includes("PM")) {
    hours = hours === 12 ? 12 : hours + 12;
  } else {
    hours = hours === 12 ? 0 : hours;
  }
  [hours, minutes, seconds] = [hours, minutes, seconds].map((x) =>
    String(x).padStart(2, "0")
  );
  // return `${hours}:${minutes}:${seconds}`;
  console.log(`${hours}:${minutes}:${seconds}`);
}
// timeConvertion(st);

// membandingkan triplets
let ab = [5, 6, 7];
let ba = [3, 6, 10];
function compareTriplets(ab, ba) {
  const result = [0, 0];
  for (let i = 0; i < ab.length; i++) {
    if (ab[i] > ba[i]) {
      result[0]++;
    } else if (ab[i] < ba[i]) {
      result[1]++;
    }
  }
  // return result;
  console.log(result);
}
// compareTriplets(ab, ba);

// grading students
let grades = [73, 67, 38, 33];
function gradingStudents(grades) {
  let result = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      let nextMultiple = Math.ceil(grades[i] / 5) * 5;
      if (nextMultiple - grades[i] < 3) {
        result.push(nextMultiple);
      } else {
        result.push(grades[i]);
      }
    } else {
      result.push(grades[i]);
    }
  }
  // return result;
  console.log(result);
}
// gradingStudents(grades);

// menghitung apel dan jeruk
// let s = 7;
let t = 11;
let a = 5;
let b = 15;
let apples = [-2, 2, 1];
let oranges = [5, -6];
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let hitungApel = 0;
  let hitungJeruk = 0;

  for (let i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
      hitungApel++;
    }
  }
  for (let y = 0; y < oranges.length; y++) {
    if (b + oranges[y] >= s && b + oranges[y] <= t) {
      hitungJeruk++;
    }
  }
  console.log(hitungApel);
  console.log(hitungJeruk);
}
// countApplesAndOranges(s, t, a, b, apples, oranges);

// kangaroo
x1 = 0; //0
v1 = 2; //3
x2 = 5; //4
v2 = 3; //2
function kangaroo(x1, v1, x2, v2) {
  for (let i = 0; i < 10000; i++) {
    if (x1 === x2) {
      console.log("YES");
      return;
    }
    if ((x1 > x2 && v1 >= v2) || (x2 > x1 && v2 >= v1)) {
      console.log("NO");
      return;
    }
    x1 += v1;
    x2 += v2;
  }
  console.log("NO");
}
// kangaroo(x1, v1, x2, v2);

// between two sets
let aa = [2, 4];
let bb = [16, 32, 96];
function getTotalX(aa, bb) {
  let count = 0;
  for (let i = aa[aa.length - 1]; i <= bb[0]; i++) {
    let divisibleByAa = aa.every((num) => i % num === 0);
    let dividesB = bb.every((num) => num % i === 0);

    if (divisibleByAa && dividesB) {
      count++;
    }
  }
  console.log(count);
  return;
}
// getTotalX(aa, bb);

// breaking the records;
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let minCount = 0;
  let maxCount = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i];
      maxCount++;
    } else if (scores[i] < min) {
      min = scores[i];
      minCount++;
    }
  }
  console.log(maxCount, minCount);
}
// breakingRecords(scores);

// subarray divison
let s = [1, 2, 1, 3, 2];
let d = 3;
let m = 2;
function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i <= s.length - m; i++) {
    let total = 0;
    for (let j = 0; j < m; j++) {
      total += s[i + j];
    }
    if (total === d) {
      count++;
    }
  }
  console.log(count);
}
birthday(s, d, m);
