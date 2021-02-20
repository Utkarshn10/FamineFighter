console.log("We are in app.js file");

// const restoList = document.querySelector("#resto-list");
const form = document.querySelector("#add-resto-form");
const submitButton = document.querySelector(".submit-button");
const message = document.querySelector(".message");
// const getInfo = document.querySelector("#get-info");


// saving data

form.addEventListener("submit", (e) => {
  e.preventDefault();
//   getInfo.disabled = false;
  db.collection("restaurant").add({
    personName: form.field1.value,
    Name: form.field2.value,
    Address: form.field3.value,
    People: form.field4.value,
    Email: form.field5.value,
    Phone: form.field6.value,
  });
  form.field1.value = "";
  form.field2.value = "";
  form.field3.value = "";
  form.field4.value = "";
  form.field5.value = "";
  form.field6.value = "";
  message.textContent = "Data Added Successfully";
//   restoList.textContent='';
});

// getInfo.onclick = function()
// {
//     getData();
//     getInfo.disabled = true;
// }

submitButton.onclick () =  function()
{
    message.textContent = "Data Added Successfully";
}
