const URL = "https://randomuser.me/api/?results=10";

const addUser = (user) => {
  let node = document.createElement("li");
  node.appendChild(document.createTextNode(`${user.name.title} ${user.name.first} ${user.name.last}`));
  document.querySelector("ul").appendChild(node);
}

fetch(URL)
  .then(response => response.json())
  .then(body => {
    body.results.map(user => {
      addUser(user);
    });
  });
