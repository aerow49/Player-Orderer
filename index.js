var  c = [];
var ol = [];

function addPlayer(){
    var n = document.getElementById("n");
    c[c.length] = n.value;
    //console.log(c);
    var t = document.getElementById("p");
    var row = t.insertRow(c.length-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var button = document.createElement("button");
    button.innerHTML = "X  "+n.value;
    button.addEventListener ("click", function() {
        var del = this.innerHTML.slice(3,this.innerHTML.length);
        c.splice(c.indexOf(del),1);
        ol.splice(ol.indexOf(del),1);
        console.log(c);
        //this.parentElement.parentElement.parentElement.remove();
        this.parentElement.parentElement.remove();
        this.parentElement.remove();
        this.remove();
    });
    cell1.appendChild(button);
    n.value = ""; 
}

function randomize(){
    ol = c.slice();
    ol.sort(function(a,b){return 0.5-Math.random()});
}

function next(){
    for(var i=1;i<5;i++){
        if(ol.length <= 0)
            randomize();
        //console.log(ol.length);
        var p = document.getElementById(""+i);
        p.innerHTML = ol[ol.length-1];
        ol.pop();
    }
}