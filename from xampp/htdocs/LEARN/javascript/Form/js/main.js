function theClickFunction() {
    window.print();
}

function date(){
    var day = new Date();
    var dd = day.getDate();
    var mm = day.getMonth() + 1;
    var yy = day.getFullYear();
    if(dd < 10){
        dd = '0'+dd;
    }
    if(mm < 10){
        mm = '0' + mm;
    }
    var date = "Today is " + dd + "<sup>th</sup>/" + mm + "/" + yy;
    document.getElementById("date").innerHTML = date;
}
// document.getElementById("date").innerHTML = "hi";

// function area(){
//     var width = document.getElementById("width").innerHTML;
//     var height = document.getElementById("height").innerHTML;
//     var long = document.getElementById("longest").innerHTML;
//     var area = (width * height)/2;
//     document.getElementById("area").innerHTML = 5 - 1;
// }

