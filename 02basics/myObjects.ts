// const User = {
//   name: "John",
//   email: "james@example.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "john", isPaid: false });

// function createCourse(): { name: string; price: number } {
//   return { name: "ReactJs", price: 399 };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return user;
// }

// createUser({ name: "", email: "", isActive: false });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number; //optional
};

let myUser: User = {
  _id: "123",
  name: "o",
  email: "h",
  isActive: false,
};

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
