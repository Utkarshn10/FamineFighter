console.log("We are in retrieve.js file");

const restoList = document.querySelector("#resto-list");
// const form = document.querySelector("#add-resto-form");
const getInfo = document.querySelector("#get-info");

const guideList = document.querySelector(".guides");

// getting data

function getData() {
  db.collection("restaurant")
    .get()
    .then((snapshot) => {
        setUpGuides(snapshot.docs);
    });
}

const setUpGuides = (data) => {
    let html = '';
    data.forEach(doc => {
        const guide = doc.data();
        console.log(guide);
        const li = `
        <div class="flip">
            <div class="front" style="background-image: url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
               <h1 class="text-shadow">NAME HERE</hi>
            </div>
            <div class="back">
               <h2>${guide.Name}</h2>
               <h3>${guide.Email}</h3>
               <h3>${guide.Phone}</h3>
               <h3>${guide.Address}</h3>
            </div>
         </div>
        `;
        html += li;
    });

    guideList.innerHTML = html;
}

// saving data

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   getInfo.disabled = false;
//   db.collection("restaurant").add({
//     Name: form.field1.value,
//     Address: form.field2.value,
//     Email: form.field3.value,
//     Phone: form.field4.value,
//   });
//   form.field1.value = "";
//   form.field2.value = "";
//   form.field3.value = "";
//   form.field4.value = "";
//   restoList.textContent='';
// });

getInfo.onclick = function () {
  getData();
  getInfo.disabled = true;
};
