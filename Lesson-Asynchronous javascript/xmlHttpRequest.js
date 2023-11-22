function getTodos(callback, resource) {
  const request = new XMLHttpRequest();
  request.open("GET", resource);
  request.send();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const jsObject = JSON.parse(request.response);
      callback(undefined, jsObject);
    } else if (request.readyState === 4) {
      callback("not found", undefined);
    }
  });
}

getTodos("todos/sushant.json", (err, res) => {
  if (!err) {
    console.log(res);
    getTodos("todos/team.json", (err, data) => {
      console.log(data);
    });
  }
});
