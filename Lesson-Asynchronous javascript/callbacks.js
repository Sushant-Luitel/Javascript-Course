const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  let postHTML = "";
  console.log("first");

  setTimeout(() => {
    posts.forEach((post) => {
      postHTML += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = postHTML;
  }, 2000);
}

function addPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 3000);
}
addPost({ title: "Post Three", body: "This is post three" }, getPosts);
