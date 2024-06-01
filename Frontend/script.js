const add = document.getElementById("add");
const container = document.getElementById("container");
const nam = document.getElementById("name");
const mobileNum = document.getElementById("number");
const submit = document.getElementById("done");
const overlay = document.querySelector(".overlay");
const form = document.querySelector(".form");
const clearInputBtn = document.querySelector(".clear-input");
const searchBox = document.getElementById("input");

// array for storaing data
form.addEventListener("click", (event) => {
    event.stopPropagation();
});
let itemList = [];
// please check the  error in below code
add.addEventListener("click", () => {
    const displayStatus = overlay.style.display;
    if (displayStatus === "none" || displayStatus === "") {
        overlay.style.display = "block";
    } else {
        overlay.style.display = "none";
    }
});

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});
submit.addEventListener("click", () => {
    mobileNum.innerHTML = "";
    let newNam = nam.value;
    let numb = mobileNum.value;
    newContact(newNam, numb);
    nam.value = "";
    mobileNum.value = "";
});

//newContact function
function newContact(title, id) {
    let object = {
        title: title,
        id: id,
    };
    itemList.push(object);
    sorted(itemList);
}

// sorting all the data
function sorted(item) {
    item.sort((a, b) => {
        let titleA = a.title.toUpperCase();
        let titleB = b.title.toUpperCase();
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    });
    render(itemList);
}

//rendering the contact list
function render(list) {
    //let Id = 0;
    container.innerHTML = "";
    let tags = "";
    list.forEach((iter) => {
        const tag = ` <div class="card">
        <div class="card-photo"></div>
        <div class="card-details">
          <div class="card-details-name">${iter.title}</div>
          <div class="card-details-number">${iter.id}</div>
        </div>
      </div>`;
        tags += tag;
    });
    container.innerHTML = tags;
}

//searching contact
function searchTitles() {
    let value = searchBox.value.toUpperCase();
    if (value.length > 0) {
        clearInputBtn.style.display = "inline";
    } else {
        clearInputBtn.style.display = "none";
    }
    const filteredItem = itemList.filter((item) =>
        item.title.toUpperCase().includes(value)
    );
    render(filteredItem);
}

document.getElementById("input").addEventListener("keyup", () => {
    searchTitles();
});
clearInputBtn.addEventListener("click", () => {
    searchBox.value = "";
    clearInputBtn.style.display = "none";
});
