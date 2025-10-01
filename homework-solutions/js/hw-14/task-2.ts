function map<T, U>(array: T[], callback: (element: T, index: number, array: T[]) => U): U[] {
    let newArray: U[] = [];
    array.forEach((el, index) => newArray.push(callback(array[index], index, array)));
    return newArray;
}
const testArray = [1, 2, 3, 4, 5];
const newArray = map(testArray, (element, index) => element * index); 
console.log(newArray);