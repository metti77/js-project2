
const Names=["Mohammad","Ali","Milad","Sara","Zahra"];    //js list style


function CreateLiElement()
{

    for (const item of Names) {
        
    

    var node = document.createElement("li");

    var textnode=document.createTextNode(item);

    node.appendChild(textnode);


    document.getElementById("myList").appendChild(node);

    }




}


CreateLiElement();