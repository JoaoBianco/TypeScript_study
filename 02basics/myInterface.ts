interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string;
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

//Reopen the interface
interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const teste: User = {
  dbId: 2,
  email: "teste@example.com",
  userId: 1,
  githubToken: "githubToken",
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "test", off: 10) => {
    return 10;
  },
};
const testeAdmin: Admin = {
  dbId: 2,
  email: "teste@example.com",
  userId: 1,
  githubToken: "githubToken",
  role: "admin",
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "test", off: 10) => {
    return 10;
  },
};
