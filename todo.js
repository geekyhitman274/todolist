var mylist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    mylist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick = function(){

        var div =this.parentElement;
        div.style.display = "none";

    }

}
var list =document.querySelector('ul');
list.addEventListener('click',function(tick) {
    if (tick.target.tagName === 'LI') {
        tick.target.classList.toggle('checked');
    }
});

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Text field cannotbe empty ");
    } else {
        document.getElementById("todolist").appendChild(li);
    }
    document.getElementById("input").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}


