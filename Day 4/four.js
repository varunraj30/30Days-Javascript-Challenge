// Activity 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}

// Activity 2
start = 0;
count = 0;
while (start <= 10) {
  count += start;
  start++;
}
console.log(count);

max = 10;
while (max >= 0) {
  console.log(max);
  max--;
}

// Activity 3
num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);

start = 1;
max = 5;
do {
  start = start * max;
  max--;
} while (max > 0);

console.log(start);

// Activity 4

let pattern = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    pattern += "*";
  }
  pattern += "\n";
}

console.log(pattern);

// Activity 5
for (let i = 0; i <= 10; i++) {
  if (i == 5) break;
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  if (i == 5) continue;
  console.log(i);
}
