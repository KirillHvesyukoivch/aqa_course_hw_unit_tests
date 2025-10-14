class Employee {
  _firstName = 'Djon';
  _lastName = 'Deer';
  _profession = 'jetPilot';
  #salary = 0;
 constructor (firstName, lastName, profession, salary ){
  this._firstName = firstName;
  this._lastName = lastName;
  this._profession = profession;
  this.#salary = salary;
 }
  get firstName(){
    return  this._firstName;
  } 
  set firstName(firstName){
    if ( typeof firstName!= "string" || firstName.length < 2 || firstName.length > 50 || /[^A-Za-z]/.test(firstName) ) throw new Error( "странно имя");
    else this._firstName = firstName;
  }
    get lastName(){
    return  this._lastName;
  } 
  set lastName(lastName){
      if ( typeof lastName!= "string" || lastName.length < 2 || lastName.length > 50 || /[^A-Za-z]/.test(lastName) ) throw new Error( "странная фамилия");
    else this._lastName = lastName;
  }

  get profession(){
    return  this._profession;
  } 
  set profession(profession){
    if (typeof profession!= "string" || profession.length < 1  || /[^A-Za-z\s]/.test(profession) ||/^[\s]*$/.test(profession) ) throw new Error("нет такой профессии")
    else this._profession = profession;
  }

  get salary(){
    return  this.#salary;
  } 
  
  set salary(salary){
    if ( typeof salary!= "number" || isNaN(salary) || salary <= 0 || salary >= 10000 ) throw new Error ("Некоректная ЗП");
    else this.#salary = salary;
  }

 getFullName(){
  const fulName = `${this.firstName} ${this.lastName}`;
  return fulName;
 }
}

class Company {
  _title = "";
  _phone  = 0;
  _address = "";
  #employees = [];
  constructor (title, phone, address ){
    this.title = title;
    this.phone = phone;
    this.address = address;
  }

 get title(){
    return  this._title;
  } 

 get phone(){
    return  this._phone;
  } 

  get address(){
    return  this._address;
  } 

 addEmployee(employee){
  if (employee instanceof Employee) this.#employees.push(employee)
    else throw new Error ("неккоректный сотрудник");
 }

 getEmployees(){
  return  this.#employees;
 }

 getInfo(){
  const numberOfEmployers = this.#employees.length
  const info = `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${numberOfEmployers}`;
  return info;
 }
findEmployeeByName(firstName){
 const empl = this.#employees.find(el => el.firstName === firstName);
 if (empl!= undefined) return empl;
 else throw new Error ("нет такого сотрудника");

}

#getEmployeeIndex(firstName){
 const index = this.#employees.findIndex(el => el.firstName === firstName);
  return index;
 //else throw new Error ("нет такого сотрудника");
}

removeEmployee(firstName){
const indexOfDelete  = this.#getEmployeeIndex(firstName);
if (indexOfDelete === -1) throw new Error("нет такого сортрудника");
else this.#employees.splice(indexOfDelete,1);
}

getTotalSalary(){
 let sumSalary = 0;
  sumSalary = this.#employees.reduce((sum, el) => sum+= el.salary, 0);
  return sumSalary;
}
}

export { Employee, Company };
