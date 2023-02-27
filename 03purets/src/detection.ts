function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLocaleLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("No id provided");
    return;
  }
}
