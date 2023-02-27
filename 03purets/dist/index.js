"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._couseCount = 1;
        this.city = "Jabuka";
    }
    deleteToken() {
        console.log("token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCouseCount() {
        return this._couseCount;
    }
    set setCouseCount(courseNumber) {
        this._couseCount = courseNumber;
    }
}
const hi = new User("email@example.com", "example");
