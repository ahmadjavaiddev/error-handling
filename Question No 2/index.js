// Simulated database of valid credentials
const validCredentials = {
  user1: "password1",
  user2: "password2",
  user3: "password3",
};

function login(username, password) {
  if (!username) {
    throw new Error("Username is required.");
  }
  if (!password) {
    throw new Error("Password is required.");
  }

  if (!(username in validCredentials)) {
    throw new Error("Invalid username or password.");
  }

  if (validCredentials[username] !== password) {
    throw new Error("Invalid username or password.");
  }

  return "Login successful!";
}

try {
  console.log(login("user1", "password1"));
  console.log(login("", "password"));
  console.log(login("user4", "password"));
  console.log(login("user1", "wrongpass"));
} catch (error) {
  console.error(error.message);
}
