const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 28 },
  ];
  
  const Averagecalc = function (people) {
    let total = 0;
    for (const { age } of people) {
      total += age;
    }
    return total / people.length;
  };
  
console.log(Averagecalc(people));



const names = ["Alice", "Bob", "Anna", "Alex", "Charlie", "Amanda"];

function countNames (names) {
let count=0;
for(i=0;i<names.length;i++){
    if(names.toUpperCase()[0] === "A"){
        count++;
    }
}
    return count;
};

console.log(countNames(names));