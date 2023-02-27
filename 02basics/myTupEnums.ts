// const user: string[] = ["hc"];
const tUser: [string, number, boolean] = ["hc", 1, false];

let rgb: [number, number, number] = [255, 255, 255];

type User = [number, string];

let user: User;
user = [1, "2"];

user.push("NAO DEVERIA ESTAR AQUI!");
