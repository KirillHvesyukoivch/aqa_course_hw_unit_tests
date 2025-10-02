function getKeyByValue<T, U>(obj: T, value: U): keyof T | undefined {
    for (const key in obj) {
        if (obj[key] === value) {
            return key;
    }
  }
  return undefined;
}

const myMoto = {
  make: "Ducati",
  model: "SuperSport",
  power: 115
};

console.log(getKeyByValue(myMoto, "Ducati"));  
console.log(getKeyByValue(myMoto, "SuperSport")); 
console.log(getKeyByValue(myMoto, 115));   
console.log(getKeyByValue(myMoto, "115"));