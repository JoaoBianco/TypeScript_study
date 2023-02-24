function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string): string {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, password: string): boolean {
  return true;
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(2);
getUpper("test");

signUpUser("1", "1", "1");
loginUser("h", "h@h.com");

function getValue(myVal: number): boolean | string {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

const getHello = (s: string): string => {
  return "";
};

const heros: string[] = ["Thor", "Spiderman", "Iron Man"];

heros.map((hero): string => {
  return `I'm ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

//Use never in exceptions
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
