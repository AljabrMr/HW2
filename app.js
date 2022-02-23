function addToDo(){
    var str =document.getElementById("input").value;
    const h2Elem = document.createElement('h2');
    const text = document.getElementById("thirdDiv");
    h2Elem.innerHTML= str;
    text.appendChild(h2Elem);
}