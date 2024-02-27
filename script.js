var ul=document.querySelector("#list-container");
var input=document.querySelector("#input");


function add()
{   
    
    if(input.value.trim().length===0)
    {
        console.log("Input box is Empty, Please enter a value in input box");
        alert("Input Box is Empty, Kindly Enter a Value in Input Box");
    }

    else
    {
        var li=document.createElement("li");
        li.innerHTML=input.value + " <button onclick='deleteItem(event)' id='dlt-btn'>Delete</button>";
        ul.append(li);
    }


}

function deleteItem(event)
{   
    console.log("Deleted Item");
    console.log(event.target.parentElement);
    event.target.parentElement.remove();
}