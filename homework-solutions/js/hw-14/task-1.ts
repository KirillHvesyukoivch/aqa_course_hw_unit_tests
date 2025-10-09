//1
function wrapInArray<T>(value: T): T[] {
    return [];
}

//2
function getLastItem<T>(  value: T[] ) : T {
    return value[value.length -1];
}

//3
interface IPair<T, U> {
    first: T;
    second: U;
}

function describePair<T, U> (values: IPair<T,U>) {
    return `${values.first} and ${values.second}`;
}
console.log(describePair({ first: "Alice", second: 30 })); 