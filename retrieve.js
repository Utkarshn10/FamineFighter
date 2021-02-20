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
  let html = "";
  data.forEach((doc) => {
    const guide = doc.data();
    console.log(guide);
    const li = `
    <div class="row">
        <div class="flip">
            <div class="front" style="background-image: url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
               <h1 class="text-shadow">${guide.Name}</hi>
            </div>
            <div class="back">
              
               <p>Incharge: ${guide.personName}</p>
               <p>Capacity to feed ${guide.People} people</p>
               <p>Email Address: ${guide.Email}</p>
               <p>Phone Number :${guide.Phone}</p>
               <p>Address :${guide.Address}</p>
            </div>
         </div>
         </div>
        `;
    html += li;
  });

  guideList.innerHTML = html;
};

getInfo.onclick = function () {
  getData();
  getInfo.disabled = true;
};
