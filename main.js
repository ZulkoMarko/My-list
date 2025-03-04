const itemForm=document.querySelector("#item-form");
const itemInput=document.querySelector("#item-input");
const ul=document.querySelector("#item-list");
const clearBtn=document.querySelector("#clear");
const itemFilter=document.getElementById("filter");

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
checkUI();
itemInput.value="";
}

function createButton(ids){
 const button = document.createElement("button");
 button.id=ids;
 return button;
}

function removeItem(e){
    if(e.target.parentElement){if (confirm("Are you sure?"))
{e.target.parentElement.remove()}
    
}
checkUI();}

 

function clearItems(){
   
    while (ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
    checkUI();
}

function checkUI(){
    const items=ul.querySelectorAll("li");
    if(items.length===0){
        clearBtn.style.display="none";
    itemFilter.style.display="none";}
    else{clearBtn.style.display="block";
        itemFilter.style.display="block";}
}

itemForm.addEventListener("submit", run);

clearBtn.addEventListener("click", clearItems);
ul.addEventListener("click", removeItem);
checkUI();