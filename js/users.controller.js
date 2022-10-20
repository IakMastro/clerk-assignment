import { getUsers } from './users.service.js';

const addUser = (user) => {
  let node = document.createElement("div");
  const image = document.createElement("img");
  const name = document.createTextNode(`${user.name.title} ${user.name.first} ${user.name.last}`);
  const email = document.createTextNode(`Email: ${user.email}`)
  const phone = document.createTextNode(`Phone Number: ${user.phone}`);
  const location = document.createTextNode(`Location: ${user.location.city}, ${user.location.state}, ${user.location.country}`)

  image.src = user.picture.large;

  node.appendChild(image);
  node.appendChild(document.createElement("br"));
  node.appendChild(name);
  node.appendChild(document.createElement("br"));
  node.appendChild(email);
  node.appendChild(document.createElement("br"));
  node.appendChild(phone);
  node.appendChild(document.createElement("br"));
  node.appendChild(location);
  document.querySelector("section").appendChild(node);
}

const setUpUsers = async () => {
  const users = await getUsers(1);
  users.results.forEach(user => {
    addUser(user);
  });
}

setUpUsers();
