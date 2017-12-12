interface Person {
  firstName: string;
  lastName: string;

  print()
}

class Employee implements Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  print(): void {
    console.log('employee');
  }
}

