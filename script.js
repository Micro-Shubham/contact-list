let input = document.getElementById("input");
let add = document.getElementById("add");
let container = document.getElementById("container");
let nam = document.getElementById("name");
let mobileNum = document.getElementById("number");
let submit = document.getElementById("done")
let form = document.getElementById("create-contact");
// array for storaing data
let itemList = [
   
]
// please check the  error in below code
// add.addEventListener('click', () => {
//     if(form.style.display ==='none' || form.style.display === ' ') {
//         form.style.display = 'block'
//     } else {
//         form.style.display = 'none';
//     }
// })
submit.addEventListener('click', () => {
 mobileNum.innerHTML = ""
 let newNam = nam.value
 let numb = mobileNum.value;
 newContact(newNam, numb);
 nam.value = ""
 mobileNum.value = ""

})

//newContact function 
function newContact(title, id) {
    let object = {
        title: title,
        id:id
    }
    itemList.push(object);
    render(itemList);
}

//rendering the contact list
function render (list) {
    container.innerHTML = ""
     list.forEach(iter => {
        let ptag = document.createElement('p');
        let pnumber = document.createElement('li');
        ptag.innerHTML = iter.title;
        pnumber.innerHTML = iter.id
        ptag.id = iter.id;
        container.appendChild(ptag);
        container.appendChild(pnumber);

     })
}

