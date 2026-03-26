var input=document.getElementById("todoInput");
    var ul=document.getElementById("listcontainer");
    function add(){
        if(input.value==" "){
            
            return;
        }

        else{
        var listitem=document.createElement("h1");  //this will create a new list item
        listitem.innerHTML=input.value +"<button onclick='deleteItem(event)' id='btnDelete'>🗑</button>"  //this will add a delete button to the list item and get the user input
        ul.append(listitem )  //this will add the item to the list
        todoInput.value=" "; //this will clear the input field after adding the item
        
        }
       

    }
    //this function will delete the list item when the delete button is clicked
   function deleteItem(event){
        event.target.parentElement.remove();  //this will remove the list item when the delete button is clicked and the paraelemnt is used to dlt the list tag instead of button tag
   }