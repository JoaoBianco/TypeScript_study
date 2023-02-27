// class User {
//   public email: string;
//   name: string;
//   private readonly city: string = "Jabuka";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

//This is the same as the constructor
class User {
  //   private _courseCount = 1;
  protected _courseCount = 1;

  private readonly city: string = "Jabuka";
  constructor(public email: string, public name: string) {}

  private deleteToken() {
    console.log("token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get getCouseCount(): number {
    return this._courseCount;
  }

  set setCouseCount(courseNumber: number) {
    this._courseCount = courseNumber;
  }
}

class subUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const hi = new User("email@example.com", "example");
