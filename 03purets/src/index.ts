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
  private _couseCount = 1;

  private readonly city: string = "Jabuka";
  constructor(public email: string, public name: string) {}

  private deleteToken() {
    console.log("token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get getCouseCount(): number {
    return this._couseCount;
  }

  set setCouseCount(courseNumber: number) {
    this._couseCount = courseNumber;
  }
}

const hi = new User("email@example.com", "example");
