//drop down functionality
let dropDown = document.getElementById("drop-down-icon");
let displayProducts = document.getElementById("display-products");

let dropDownClick = true;
dropDown.onclick = () => {
  if (dropDownClick) {
    dropDownClick = false;
    displayProducts.style.display = "block";
  } else {
    dropDownClick = true;
    displayProducts.style.display = "none";
  }
};

let dropDownSales = document.getElementById("display-sales");
let dropDownIcon = document.getElementById("sales-drop-down-icon");

dropDownIcon.onclick = () => {
  if (dropDownClick) {
    dropDownClick = false;
    dropDownSales.style.display = "block";
  } else {
    dropDownClick = true;
    dropDownSales.style.display = "none";
  }
};

let dropDownDesign = document.getElementById("display-design");
let dropDownIconDesign = document.getElementById("design-drop-down-icon");

dropDownIconDesign.onclick = () => {
  if (dropDownClick) {
    dropDownClick = false;
    dropDownDesign.style.display = "block";
  } else {
    dropDownClick = true;
    dropDownDesign.style.display = "none";
  }
};

let dropDownLegal = document.getElementById("display-legal");
let dropDownIconLegal = document.getElementById("legal-drop-down-icon");

dropDownIconLegal.onclick = () => {
  if (dropDownClick) {
    dropDownClick = false;
    dropDownLegal.style.display = "block";
  } else {
    dropDownClick = true;
    dropDownLegal.style.display = "none";
  }
};

let dropDownOffice = document.getElementById("display-office");
let dropDownIconOffice = document.getElementById("office-drop-down-icon");

dropDownIconOffice.onclick = () => {
  if (dropDownClick) {
    dropDownClick = false;
    dropDownOffice.style.display = "block";
  } else {
    dropDownClick = true;
    dropDownOffice.style.display = "none";
  }
};

//json data
let table = document.getElementById("table");

fetch("data.json")
  .then((res) => res.json())
  .then((val) => {
    //Initially calling the update UI function with the data
    getData(val)
    let userInput = document.getElementById("user-input");

    //acccessing the given input value by event listener
    userInput.addEventListener("input", () => {
      let SearchValue = userInput.value;

      //filtering the data based on input value
      let filteredData = val.filter((ele) =>
        ele.name.toLowerCase().includes(SearchValue.toLowerCase())
      );

      //if input is empty then assigning filteredData equal to overall data
      if (!SearchValue) {
        filteredData = [...val];
      }
      //calling the update UI function with the filtered Data
      getData(filteredData);
    });
  });

//Search and update UI Fuction
function getData(val) {
  table.innerHTML = "";
  let tr = document.createElement('tr');
  let th1 = document.createElement('th');
  let th2 = document.createElement('th');
  let th3 = document.createElement('th');
  let th4 = document.createElement('th');
  let th5 = document.createElement('th');
  let th6 = document.createElement('th');
  let div = document.createElement('div');
  div.style.display="flex";
  div.style.alignItems="center";
  let input = document.createElement("input");
  input.type = "checkbox";
  input.style.cursor = "pointer";
  let span = document.createElement('span');
  span.innerText = "Brand"
  span.style.marginLeft="10px"
  div.appendChild(input);
  div.appendChild(span);
  th1.appendChild(div);
  th2.innerText="Description"
  th3.innerText="Members"
  th4.innerText="Categories"
  th5.innerText="Tags"
  th6.innerText="Next Meeting"
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5);
  tr.appendChild(th6);
  table.appendChild(tr);

  val.map((ele) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.style.width = "150px";
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let icon = document.createElement("img");
    icon.src = ele.logo;
    icon.style.width = "20px";
    icon.style.height = "20px";
    icon.style.marginRight = "10px";
    icon.style.marginLeft = "10px";

    let input = document.createElement("input");
    input.type = "checkbox";
    input.style.cursor = "pointer";

    let div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.appendChild(input);
    div.appendChild(icon);

    let name = document.createElement("span");
    name.innerText = ele.name;
    div.appendChild(name);

    let description = document.createElement("span");
    description.innerText = ele.description;

    let member = document.createElement("img");
    member.src = ele.members;
    member.style.width = "20px";
    member.style.height = "20px";

    ele.categories.map((data) => {
      let subCat = document.createElement("span");
      subCat.innerText = data;
      td3.appendChild(subCat);
    });

    let tag = document.createElement("span");
    tag.innerText = ele.tags;

    let nextMeet = document.createElement("span");
    nextMeet.innerText = ele.nextmeating;

    td1.appendChild(div);
    td2.appendChild(description);
    td4.appendChild(member);
    td5.appendChild(tag);
    td6.appendChild(nextMeet);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td4);
    tr.appendChild(td3);
    tr.appendChild(td5);
    tr.appendChild(td6);
    table.appendChild(tr);
  });
}
