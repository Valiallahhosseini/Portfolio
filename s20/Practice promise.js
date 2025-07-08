console.log(202);

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
  console.log(`Element at index ${index} : ${number}`);
});
numbers.forEach((number) => {
  console.log(`Value: ${number}`);
});
const printDouble = (item) => {
  return item * 2;
};
const name = "Valiallah";
console.log(name.split("").join(""));

let ms = 900000000;
const delay = (n) => {
  return new Promise((resolve, reject) => {
    if (n > 4) {
      resolve(n * 2);
    } else {
      reject("error");
    }
  });
};

delay(1)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const foo = async () => {
  await delay(3);
};
