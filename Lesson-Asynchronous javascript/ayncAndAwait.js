async function getTodos() {
  const responseOne = await fetch("todos/sushant.json");
  const dataOne = await responseOne.json();
  const responseTwo = await fetch("todos/team.json");
  const dataTwo = await responseTwo.json();
  return [dataOne, dataTwo];
}

getTodos().then(([data1, data2]) => {
  console.log(data1);
  console.log(data2);
});
