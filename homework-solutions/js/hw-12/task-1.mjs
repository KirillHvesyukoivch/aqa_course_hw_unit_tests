//1
function delayTwoSeconds(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}
function message(){
    console.log('two seconds passed');
}
delayTwoSeconds(message);

//2
const task_2 = new Promise((resolve, reject) => resolve(1));
task_2.then(message => console.log(message));

//3
const task_3 = new Promise((resolve, reject) => reject("Promise failed"));
task_3.catch(error => console.log(error)); 

//4
async function promiseNumber(number) {
    return new Promise((resolve,reject) => {
        if (typeof number === 'number') resolve(number);
        else  reject(typeof number);
    })
}

//5
 Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
 .then(results =>{results.forEach(result => console.log(result))});

 //6
 Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
 .then(results =>{results.forEach(result => console.log(result.value))}) 

 //7

 async function AllPromises(first, second, third){
    try {
        const bigPromise = await Promise.all([promiseNumber(first), promiseNumber(second), promiseNumber(third)])
        bigPromise.forEach(result=> console.log(result));
    }
    catch{
    throw new Error("error");
    }
 }

 AllPromises(1,2,3)

  async function AllSettledPromises(first, second, third){
     try {
    const bigPromise = await Promise.allSettled([promiseNumber(first), promiseNumber(second), promiseNumber(third)]);
     bigPromise.forEach(result=> console.log(result.value))
     }
       catch{
    throw new Error("error");
    }
  }
  AllSettledPromises(1,2,3);