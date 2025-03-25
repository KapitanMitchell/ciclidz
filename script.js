let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

for (let j = 2; j <= 20; j++) {
    if (j % 2 === 0) continue;
    console.log(j);
}

for (let k = 1; k <= 10; k++) {
    console.log(`7 x ${k} = ${7 * k}`);
}

let n = 15;
let num = 1;
while (num < n) {
    console.log(num);
    num++;
    if (num >= n) break;
}

let m = 1;
while (m <= 20) {
    if (m % 3 === 0) {
        m++;
        continue;
    }
    console.log(m);
    m++;
}