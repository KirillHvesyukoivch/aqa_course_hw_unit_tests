//1
interface IEmployee {
  name: string;
  salary: number;
  isManager: boolean;
}

const QA: IEmployee = {
  name: "Kirill",
  salary: 100000,
  isManager: false
}

//2
type EmployeeKeys = keyof IEmployee;

//3
type QaKeys = keyof typeof QA;

//4
type UserType = typeof QA;

//5
type notMandatory = Partial<IEmployee>;

//6
type twoFields = Pick<IEmployee, "name" | "salary">;

//7
type withoutManager = Omit<IEmployee,"isManager" >;

//8
type readOnly = Readonly<IEmployee>;

//9
type recordType = Record<string, keyof typeof QA>;
const recordObject: recordType = {
  firstKey: "name",
   thirdKey: "isManager",
  secondKey: "salary"
};