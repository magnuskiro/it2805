
var todoElements = [];

function doAdd(todo){
    console.log("adding item: "+todo);
    var newdiv = document.createElement('div');
    todoElements.push({id:todoElements.length+1, text:todo, done:false});
    var divIdName = "todo"+todoElements.length;
    console.log(divIdName);
    newdiv.setAttribute('id',divIdName);
    newdiv.innerHTML = "" +
        "<p>" +
        "<input value='"+todoElements.length+"' type='checkbox' onclick='doFinish(this)'/>"+todo+"</p>";
    document.getElementById('todo-list').appendChild(newdiv);
}

function doFinish(element){
    //console.log(element);
    var index = parseInt(element.value)-1;
    //console.log(typeof index);
    todoElements[index].done = !todoElements[index].done;
    console.log(todoElements[index].id+": "+todoElements[index].done);
}

function saveToLocalStorage(){
    console.log("Saving to local");
    localStorage.setItem('todo', JSON.stringify(todoElements));
}

function loadFromLocalStorage(){
    console.log("Loading from local");
    var list = JSON.parse(localStorage.getItem('todo'));
    console.log(list[1]);
    for(var i=0; i<list.length; i++){
        var newdiv = document.createElement('div');
        todoElements.push(list[i]);
        var divIdName = "todo"+ list[i].id;
        console.log(divIdName);
        newdiv.setAttribute('id',divIdName);
        newdiv.innerHTML = "" +
            "<p>" +
            "<input value='"+ list[i].id+"' type='checkbox' onclick='doFinish(this)'/>"+ list[i].text+"</p>";
        document.getElementById('todo-list').appendChild(newdiv);
    }
}