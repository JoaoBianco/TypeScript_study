let score: number | string = 33;

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let joao: User | Admin = { name: "joao", id: 3232 };

joao = { username: "joao", id: 3232 };

// function getDbId(id: number | string) {
//   console.log(`DB ID: ${id}`);
// }

function getDbId(id: number | string): number | void {
  //This also works
  typeof id === "string" && id.toLocaleLowerCase();
  typeof id === "number" && id.toString();

  if (typeof id === "string") {
    id.toLocaleLowerCase();
  }
  if (typeof id === "number") {
    return id;
  }
}

//array
const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];
const data3: (string | number)[] = [1, 2, "3", "4"];
const data4: Array<string | number> = [1, 2, "3", "4"];

//

let seatAllotment: "aisle" | "middle" | "window";
