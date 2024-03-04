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

fetch("../data/data.json")
  .then((res) => res.json())
  .then((val) => {
    //Initially calling the update UI function with the data
    getData(val);
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
  let tr = document.createElement("tr");
  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");
  let th4 = document.createElement("th");
  let th5 = document.createElement("th");
  let th6 = document.createElement("th");
  let div = document.createElement("div");
  div.style.display = "flex";
  div.style.alignItems = "center";
  let input = document.createElement("input");
  input.type = "checkbox";
  input.style.cursor = "pointer";
  let span = document.createElement("span");
  span.innerText = "Brand";
  span.style.marginLeft = "10px";
  div.appendChild(input);
  div.appendChild(span);
  th1.appendChild(div);
  th2.innerText = "Description";
  th3.innerText = "Members";
  th4.innerText = "Categories";
  th5.innerText = "Tags";
  th6.innerText = "Next Meeting";
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
  let row = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.style.textAlign = "end";
  let td2 = document.createElement("td");
  td2.style.textAlign = "end";
  let td3 = document.createElement("td");
  td3.style.textAlign = "end";
  let td4 = document.createElement("td");
  td4.style.textAlign = "end";
  let td5 = document.createElement("td");
  td5.style.textAlign = "end";
  let td6 = document.createElement("td");
  td6.style.textAlign = "end";
  let text = document.createElement("div");
  text.innerText = "10 Count";
  text.style.display = "flex";
  text.style.justifyContent = "flex-end";
  text.style.alignItems = "center";

  let icon1 = document.createElement("img");
  icon1.style.width = "15px";
  icon1.style.height = "15px";
  icon1.style.marginRight = "5px";
  icon1.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACUCAMAAABGFyDbAAAAkFBMVEX///8UEhMREiTz8/MrKy0KDCEQDQ8AAAAlJSXV1dXf3t4GAAT8/PwRERHa2trj4+M5OTlCQkJNTE3t7e2hoaFgYGBRUVG1tbUcHBzOzs6Pjo9aWloJBwjHx8iUlJW8vLyAgICqqqptbW0aGysgIS8AABYpKTcAABpZWWM7O0ZkZG0AABEzM0CZmZ93d399f4dxm5V9AAACaUlEQVR4nO3b63KiMACGYdBARKiEQwUUBLXW7tp27//uFsXpwSZ2JxCT7XzvL2c62GcAkQRjWQghhBBCCP2wkiK9n8/v02KsW/Kh8Tqm5+ZrY2AzRql9jlI20+3pyvI31AmWZ7pFxwpa2p8qqafbZFkhuVC1LhLqVlkNvVS1x3GhW5VwVK0r0cxa8Fm6d1fMZ8V6VQn7csKfTnqm9yjOiMtjuUTvNdWb8FkTvZcusMACCyywwAILLLDAAgsssExjqR++BqEnLBOxMvE2YTAAKlksIzIRxkMdXblwCxItF31nKKYbSmnpihOw7CublO1bNr3mCyvCnSfqH2WVvCorfTUq2/ZL6fnoIudOXg1TmRdyqkDVEeyiRO4TmSpVta5URpXEyk6sLj+WuU5UindWu7tkPo0r9ayVBGupnrWUYEXqWdHPYRl6EPlPcwZlyTwZMvQCkURGXk4N/fIx9ava8myFh9G/kx4c1VTdbSCtZVXHG0EqvFvvk0tlbwK7wqYdD0iMMK6OMXoPMdrzfrpi9p04Acy9sonNVtN+qDMtnAoK65w/fM1r8TZDjF6/6X+bgwALLLDAAgsssMACCyywwAILLHNYhv4wPTDzZ/yCJ0NST3OGLOSztK+o4S6oaXSrrJB9mV/1mfadxV2s1WtedKjqy6VtPX7iMGQeeZ8o96nmRSsfCt6XTcbrG0yN/nPjKm02myatjFnL+VZg0n5CCCGEEEIIISTZ2MgsYmSWY2TWiJMjeH27Tqztp//tbB922+5l+4fH25tGHWv/9Gv3++A4h6fn/c7Zs5eX1z/0cHD8UUqfX7c6WH8Bp9RDKbWoM7oAAAAASUVORK5CYII=";

  let addText = document.createElement('span');
  addText.innerText="Add calculation"
  let containerDiv = document.createElement("div");
  containerDiv.style.display = "flex";
  containerDiv.style.justifyContent = "flex-end";
  containerDiv.style.alignItems = "center";
  containerDiv.appendChild(icon1);
  containerDiv.appendChild(addText);

  let icon2 = document.createElement("img");
  icon2.style.width = "15px";
  icon2.style.height = "15px";
  icon2.style.marginRight = "5px";
  icon2.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACUCAMAAABGFyDbAAAAkFBMVEX///8UEhMREiTz8/MrKy0KDCEQDQ8AAAAlJSXV1dXf3t4GAAT8/PwRERHa2trj4+M5OTlCQkJNTE3t7e2hoaFgYGBRUVG1tbUcHBzOzs6Pjo9aWloJBwjHx8iUlJW8vLyAgICqqqptbW0aGysgIS8AABYpKTcAABpZWWM7O0ZkZG0AABEzM0CZmZ93d399f4dxm5V9AAACaUlEQVR4nO3b63KiMACGYdBARKiEQwUUBLXW7tp27//uFsXpwSZ2JxCT7XzvL2c62GcAkQRjWQghhBBCCP2wkiK9n8/v02KsW/Kh8Tqm5+ZrY2AzRql9jlI20+3pyvI31AmWZ7pFxwpa2p8qqafbZFkhuVC1LhLqVlkNvVS1x3GhW5VwVK0r0cxa8Fm6d1fMZ8V6VQn7csKfTnqm9yjOiMtjuUTvNdWb8FkTvZcusMACCyywwAILLLDAAgsssExjqR++BqEnLBOxMvE2YTAAKlksIzIRxkMdXblwCxItF31nKKYbSmnpihOw7CublO1bNr3mCyvCnSfqH2WVvCorfTUq2/ZL6fnoIudOXg1TmRdyqkDVEeyiRO4TmSpVta5URpXEyk6sLj+WuU5UindWu7tkPo0r9ayVBGupnrWUYEXqWdHPYRl6EPlPcwZlyTwZMvQCkURGXk4N/fIx9ava8myFh9G/kx4c1VTdbSCtZVXHG0EqvFvvk0tlbwK7wqYdD0iMMK6OMXoPMdrzfrpi9p04Acy9sonNVtN+qDMtnAoK65w/fM1r8TZDjF6/6X+bgwALLLDAAgsssMACCyywwAILLHNYhv4wPTDzZ/yCJ0NST3OGLOSztK+o4S6oaXSrrJB9mV/1mfadxV2s1WtedKjqy6VtPX7iMGQeeZ8o96nmRSsfCt6XTcbrG0yN/nPjKm02myatjFnL+VZg0n5CCCGEEEIIISTZ2MgsYmSWY2TWiJMjeH27Tqztp//tbB922+5l+4fH25tGHWv/9Gv3++A4h6fn/c7Zs5eX1z/0cHD8UUqfX7c6WH8Bp9RDKbWoM7oAAAAASUVORK5CYII=";

  let addText2 = document.createElement('span');
  addText2.innerText="Add calculation"
  let containerDiv2 = document.createElement("div");
  containerDiv2.style.display = "flex";
  containerDiv2.style.justifyContent = "flex-end";
  containerDiv2.style.alignItems = "center";
  containerDiv2.appendChild(icon2);
  containerDiv2.appendChild(addText2);

  let icon3 = document.createElement("img");
  icon3.style.width = "15px";
  icon3.style.height = "15px";
  icon3.style.marginRight = "5px";
  icon3.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACUCAMAAABGFyDbAAAAkFBMVEX///8UEhMREiTz8/MrKy0KDCEQDQ8AAAAlJSXV1dXf3t4GAAT8/PwRERHa2trj4+M5OTlCQkJNTE3t7e2hoaFgYGBRUVG1tbUcHBzOzs6Pjo9aWloJBwjHx8iUlJW8vLyAgICqqqptbW0aGysgIS8AABYpKTcAABpZWWM7O0ZkZG0AABEzM0CZmZ93d399f4dxm5V9AAACaUlEQVR4nO3b63KiMACGYdBARKiEQwUUBLXW7tp27//uFsXpwSZ2JxCT7XzvL2c62GcAkQRjWQghhBBCCP2wkiK9n8/v02KsW/Kh8Tqm5+ZrY2AzRql9jlI20+3pyvI31AmWZ7pFxwpa2p8qqafbZFkhuVC1LhLqVlkNvVS1x3GhW5VwVK0r0cxa8Fm6d1fMZ8V6VQn7csKfTnqm9yjOiMtjuUTvNdWb8FkTvZcusMACCyywwAILLLDAAgsssExjqR++BqEnLBOxMvE2YTAAKlksIzIRxkMdXblwCxItF31nKKYbSmnpihOw7CublO1bNr3mCyvCnSfqH2WVvCorfTUq2/ZL6fnoIudOXg1TmRdyqkDVEeyiRO4TmSpVta5URpXEyk6sLj+WuU5UindWu7tkPo0r9ayVBGupnrWUYEXqWdHPYRl6EPlPcwZlyTwZMvQCkURGXk4N/fIx9ava8myFh9G/kx4c1VTdbSCtZVXHG0EqvFvvk0tlbwK7wqYdD0iMMK6OMXoPMdrzfrpi9p04Acy9sonNVtN+qDMtnAoK65w/fM1r8TZDjF6/6X+bgwALLLDAAgsssMACCyywwAILLHNYhv4wPTDzZ/yCJ0NST3OGLOSztK+o4S6oaXSrrJB9mV/1mfadxV2s1WtedKjqy6VtPX7iMGQeeZ8o96nmRSsfCt6XTcbrG0yN/nPjKm02myatjFnL+VZg0n5CCCGEEEIIISTZ2MgsYmSWY2TWiJMjeH27Tqztp//tbB922+5l+4fH25tGHWv/9Gv3++A4h6fn/c7Zs5eX1z/0cHD8UUqfX7c6WH8Bp9RDKbWoM7oAAAAASUVORK5CYII=";

  let addText3 = document.createElement('span');
  addText3.innerText="Add calculation"
  let containerDiv3 = document.createElement("div");
  containerDiv3.style.display = "flex";
  containerDiv3.style.justifyContent = "flex-end";
  containerDiv3.style.alignItems = "center";
  containerDiv3.appendChild(icon3);
  containerDiv3.appendChild(addText3);

  let icon4 = document.createElement("img");
  icon4.style.width = "15px";
  icon4.style.height = "15px";
  icon4.style.marginRight = "5px";
  icon4.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACUCAMAAABGFyDbAAAAkFBMVEX///8UEhMREiTz8/MrKy0KDCEQDQ8AAAAlJSXV1dXf3t4GAAT8/PwRERHa2trj4+M5OTlCQkJNTE3t7e2hoaFgYGBRUVG1tbUcHBzOzs6Pjo9aWloJBwjHx8iUlJW8vLyAgICqqqptbW0aGysgIS8AABYpKTcAABpZWWM7O0ZkZG0AABEzM0CZmZ93d399f4dxm5V9AAACaUlEQVR4nO3b63KiMACGYdBARKiEQwUUBLXW7tp27//uFsXpwSZ2JxCT7XzvL2c62GcAkQRjWQghhBBCCP2wkiK9n8/v02KsW/Kh8Tqm5+ZrY2AzRql9jlI20+3pyvI31AmWZ7pFxwpa2p8qqafbZFkhuVC1LhLqVlkNvVS1x3GhW5VwVK0r0cxa8Fm6d1fMZ8V6VQn7csKfTnqm9yjOiMtjuUTvNdWb8FkTvZcusMACCyywwAILLLDAAgsssExjqR++BqEnLBOxMvE2YTAAKlksIzIRxkMdXblwCxItF31nKKYbSmnpihOw7CublO1bNr3mCyvCnSfqH2WVvCorfTUq2/ZL6fnoIudOXg1TmRdyqkDVEeyiRO4TmSpVta5URpXEyk6sLj+WuU5UindWu7tkPo0r9ayVBGupnrWUYEXqWdHPYRl6EPlPcwZlyTwZMvQCkURGXk4N/fIx9ava8myFh9G/kx4c1VTdbSCtZVXHG0EqvFvvk0tlbwK7wqYdD0iMMK6OMXoPMdrzfrpi9p04Acy9sonNVtN+qDMtnAoK65w/fM1r8TZDjF6/6X+bgwALLLDAAgsssMACCyywwAILLHNYhv4wPTDzZ/yCJ0NST3OGLOSztK+o4S6oaXSrrJB9mV/1mfadxV2s1WtedKjqy6VtPX7iMGQeeZ8o96nmRSsfCt6XTcbrG0yN/nPjKm02myatjFnL+VZg0n5CCCGEEEIIISTZ2MgsYmSWY2TWiJMjeH27Tqztp//tbB922+5l+4fH25tGHWv/9Gv3++A4h6fn/c7Zs5eX1z/0cHD8UUqfX7c6WH8Bp9RDKbWoM7oAAAAASUVORK5CYII=";

  let addText4 = document.createElement('span');
  addText4.innerText="Add calculation"
  let containerDiv4 = document.createElement("div");
  containerDiv4.style.display = "flex";
  containerDiv4.style.justifyContent = "flex-end";
  containerDiv4.style.alignItems = "center";
  containerDiv4.appendChild(icon4);
  containerDiv4.appendChild(addText4);

  td1.appendChild(text);
  td2.appendChild(containerDiv);
  td3.appendChild(containerDiv2);
  td4.appendChild(containerDiv3);
  td5.appendChild(containerDiv4);
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  row.appendChild(td5);
  row.appendChild(td6);
  table.appendChild(row);
}
