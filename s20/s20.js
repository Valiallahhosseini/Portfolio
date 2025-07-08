console.log(202);

const users = {
  name: "Ali",
  age: 31,
};

console.log("the object users:", users);

console.log(users["name"]);

var quary = "name";
console.log(users[quary]);

const laptop = {
  name: 30,
  brand: "Dell",
  colors: {
    keyboard: "black",
    body: "gray",
  },
};

console.log(laptop["brand"] || ["body"]["keyboard"]);
console.log(laptop.name);

const backpack = {
  name: "Everyday backpack",
  volume: 30,
  color: "gray",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  changeVolume: function (volume) {
    this.volume = volume;
  },

  newStrapLength: function (left, right) {
    this.strapLength.left = left;
    this.strapLength.right = right;
  },
};
console.log(backpack.changeVolume(40));
console.log(backpack.volume);

console.log(backpack.newStrapLength(40, 40));

console.log(backpack.strapLength.right);

const rightNow = new Date();
rightNow;
rightNow.toDateString();
console.log(rightNow.toDateString());

const deskArray = [
  "pen",
  "camera",
  "notebook",
  "headphone",
  "laptop",
  "light bulb",
  "USB drive",
  "elephant",
];

const processArray = () => {
  let newDeskArr = [...deskArray];
  console.log();
  newDeskArr.pop();
  newDeskArr.sort();
  newDeskArr;
  newDeskArr.unshift(newDeskArr.pop());
  newDeskArr;
  const usbIndex = newDeskArr.indexOf("USB drive");
  console.log(usbIndex);
  newDeskArr.push(newDeskArr.splice(usbIndex, 1));
  newDeskArr;
  const laptopIndex = newDeskArr.indexOf("laptop");
  laptopIndex;
  newDeskArr.splice(laptopIndex, 1);
  newDeskArr;

  return newDeskArr;
};
console.log(processArray());

const foods = [
  {
    name: "Cheesy Omelette",
    type: "breakfast",
    ingredients: {
      egg: 2,
      cheese: 30,
      milk: 50,
    },
  },
  {
    name: "Tomato Pasta",
    type: "main",
    ingredients: {
      flour: 100,
      tomato: 80,
      cheese: 20,
    },
  },
  {
    name: "Cheese Pizza",
    type: "main",
    ingredients: {
      flour: 150,
      cheese: 50,
      tomato: 60,
    },
  },
  {
    name: "French Toast",
    type: "snack",
    ingredients: {
      flour: 60,
      egg: 1,
      milk: 80,
    },
  },
  {
    name: "Scrambled Eggs",
    type: "breakfast",
    ingredients: {
      egg: 3,
      milk: 30,
    },
  },
];

const caloriesPerIngredient = {
  flour: 3.6, // per gram
  egg: 78, // per egg
  milk: 0.6, // per gram (e.g. ~60 cal per 100g)
  cheese: 4, // per gram
  tomato: 0.2, // per gram
};

const breakfastFood = foods
  .filter((food) => {
    return food.type === "breakfast";
  })
  .map((food) => {
    return food.name;
  });
console.log(breakfastFood);

const ingredientSearch = (foodName) => {
  const foodSearch = foods.find((food) => {
    return food.name === foodName;
  });
  console.log(foodSearch);
  // const ingredients = (foodName) => {
  //     return Object.keys(foodSearch.ingredients)

  // }
  // console.log(ingredients());

  const ingredients = Object.entries(foodSearch.ingredients).map((item) => {
    return item[0];
  });

  ingredients;

  return ingredients;
};
console.log(ingredientSearch("Scrambled Eggs"));

const calorieFinder = (foodName) => {
  const searchFood = foods.find((food) => {
    return food.name === foodName;
  });
  console.log(searchFood);
  const ingredients = Object.entries(searchFood.ingredients).map((item) => {
    console.log(item[0]);
    console.log(item[1]);

    const ingName = item[0];
    return caloriesPerIngredient[ingName] * item[1];
  });

  return ingredients.reduce((acc, cur) => {
    return (acc = acc + cur);
  });
};

console.log(calorieFinder("Tomato Pasta"));

const foodFinder = (ingName) => {
  const filterByINg = foods
    .filter((food) => {
      // return Object.keys(food.ingredients).includes(ingName)
      console.log(food.ingredients[ingName]);

      return food.ingredients[ingName];
    })
    .map((food) => {
      return food.name;
    });

  console.log([1, 2, 3].map((item) => item * 2));

  return filterByINg;
};
console.log(foodFinder("cheese"));
