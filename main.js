const itemForm=document.querySelector("#item-form");
const itemInput=document.querySelector("#item-input");
const ul=document.querySelector("#item-list");

function run(e){
    e.preventDefault();

    const newItem=itemInput.value;
    if(newItem==="")
        {alert("Please input input");
            return;};
const li=document.createElement("li");
li.appendChild(document.createTextNode(newItem));
const button= createButton("buton");
li.appendChild(button);
ul.appendChild(li);
itemInput.value="";
}

function createButton(ids){
 const button = document.createElement("button");
 button.id=ids;
 return button;
}

itemForm.addEventListener("submit", run);