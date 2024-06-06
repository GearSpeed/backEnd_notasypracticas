let number = parseFloat(process.argv[2]);

if (isNaN(number)) {
  console.error("Argumento invalido");
  process.exit(1);
}

for (let i = 0; i <= number; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "- FizzBuzz");
  } else if (i % 3 === 0) {
    console.log(i, "- Fizz");
  } else if (i % 5 === 0) {
    console.log(i, "- Buzz");
  } else {
    console.log(i);
  }
}
