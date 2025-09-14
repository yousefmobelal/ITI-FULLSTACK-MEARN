export class Employee {
  constructor(name = "", dept = "general") {
    this.name = name;
    this.dept = dept;
  }
}

export class Manager extends Employee {
  constructor(name, dept, reports = []) {
    super(name, dept);
    this.reports = reports;
  }
}

export class WorkBee extends Employee {
  constructor(name, dept, projects = []) {
    super(name, dept);
    this.projects = projects;
  }
}

export class SalesPerson extends WorkBee {
  constructor(name, projects, quota = 100) {
    super(name, "sales", projects);
    this.quota = quota;
  }
}

export class Engineer extends WorkBee {
  constructor(name, projects, machine = "") {
    super(name, "engineering", projects);
    this.machine = machine;
  }
}

async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

async function getPosts(userId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

async function displayData() {
  try {
    const userPosts = {};

    const users = await getUsers();
    for (const user of users) {
      userPosts[user.username] = await getPosts(user.id);
    }
    for (const user in userPosts) {
      document.getElementById("userPosts").innerHTML += `<h2>${user}</h2>`;
      userPosts[user].forEach(
        (post) =>
          (document.getElementById(
            "userPosts"
          ).innerHTML += `<li>${post.title}</li>`)
      );
    }
  } catch (error) {
    console.log(error);
  }
}

displayData();
