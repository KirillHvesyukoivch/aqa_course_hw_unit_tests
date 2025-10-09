class Employee {
  _firstName = 'Djon';
  _lastName = 'Deer';
  _profession = 'jetPilot';
  #salary = 0;
 constructor (firstName, lastName, profession, salary ){
  this.firstName = firstName;
  this.lastName = lastName;
  this.profession = profession;
  this.salary = salary;
 }
  get firstName(){
    return  this._firstName;
  } 
  set firstName(firstName){
    this._firstName = firstName;
  }
  get lastName(){
    return  this._lastName;
  } 
  set lastName(lastName){
    this._lastName = lastName;
  }

  get profession(){
    return  this._profession;
  } 
  set profession(profession){
    this._profession =profession;
  }

  get salary(){
    return  this.#salary;
  } 
  set salary(salary){
    if (typeof salary!= "number" || salary < 0 ) throw new Error ("Некоректная ЗП");
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

}

export { Employee, Company };
