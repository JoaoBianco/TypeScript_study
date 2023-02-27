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
        //   private _courseCount = 1;
        this._courseCount = 1;
        this.city = "Jabuka";
    }
    deleteToken() {
        console.log("token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCouseCount() {
        return this._courseCount;
    }
    set setCouseCount(courseNumber) {
        this._courseCount = courseNumber;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hi = new User("email@example.com", "example");
