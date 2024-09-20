const form = document.getElementById("formSubmit");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (!name || !age) {
    alert("inputs cannot be empty.");
    return;
  }

  const ageV = Number(age);
  
  const ageForm = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageV > 18) {
        resolve(`Welcome ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4-second delay
  });

  // Handle the resolved or rejected promise
  ageForm
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
