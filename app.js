console.log("We are in app.js file");

const restoList = document.querySelector("#resto-list");
const form = document.querySelector("#add-resto-form");
const getInfo = document.querySelector("#get-info");


// render elements from database

function renderData(doc) {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let address = document.createElement("span");
  let phoneNumber = document.createElement("span");
  let email = document.createElement("span");

  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().Name;
  address.textContent = doc.data().Address;
  phoneNumber.textContent = doc.data().Phone;
  email.textContent = doc.data().Email;

  li.appendChild(name);
  li.appendChild(address);
  li.appendChild(phoneNumber);
  li.appendChild(email);

    // console.log(li);

  restoList.appendChild(li);
    
}

// getting data

function getData() {
    db.collection("restaurant")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          renderData(doc);
        });
      });
}

// saving data

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getInfo.disabled = false;
  db.collection("restaurant").add({
    Name: form.field1.value,
    Address: form.field2.value,
    Email: form.field3.value,
    Phone: form.field4.value,
  });
  form.field1.value = "";
  form.field2.value = "";
  form.field3.value = "";
  form.field4.value = "";
  restoList.textContent='';
});

getInfo.onclick = function()
{
    getData();
    getInfo.disabled = true;
}