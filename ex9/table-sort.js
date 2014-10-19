
function sort1 (trElem){
    console.log("sort1");
    var list = getElementsFromTable(trElem);
    console.log(list.sort());
    updateElementsInTable(trElem, list.sort());
}

function sort2 (trElem){
    console.log("sort2");
    var list = getElementsFromTable(trElem);
    console.log(list.sort());
    updateElementsInTable(trElem, list.sort());
}

function sort3 (trElem){
    console.log("sort3");
    var list = getElementsFromTable(trElem);
    console.log(list.sort());
    updateElementsInTable(trElem, list.sort());
}

function getElementsFromTable(trElem){
    var obj = document.getElementById("the-table-body").getElementsByTagName('tr');
    var ret = [];
    for(var i=0; i<=4; i++){
        var row = obj[i].getElementsByTagName('td');
        ret.push(row[trElem].innerHTML);
    }
    return ret;
}

function updateElementsInTable(trElem, list){
    var obj = document.getElementById("the-table-body").getElementsByTagName('tr');
    for(var i=0; i<=4; i++){
        var row = obj[i].getElementsByTagName('td');
        row[trElem].innerHTML = list[i];
    }
}

function Init () {
    document.getElementById("sort-button-1").addEventListener ("mousedown", function () {sort1(0)}, false);
    document.getElementById("sort-button-2").addEventListener ("mousedown", function () {sort2(1)}, false);
    document.getElementById("sort-button-3").addEventListener ("mousedown", function () {sort3(2)}, false);
    console.log("init complete");
}