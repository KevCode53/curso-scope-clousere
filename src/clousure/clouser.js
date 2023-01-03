function greeting() {
  let userName = "Kevin";

  return function displayUserName() {
    return `Hello ${userName}`;
  };
}

const g = greeting();
console.log(g);
console.log(g());
