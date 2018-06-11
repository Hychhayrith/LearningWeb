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

function area() {
    var width = parseInt(document.getElementById("width").value);
    var height = parseInt(document.getElementById("height").value);
    var long = parseInt(document.getElementById("longest").value);
    console.log(width);
    console.log(height);
    console.log(long);
    var perimeter = (width + height + long) / 2;
    var area = Math.sqrt(perimeter * (perimeter - width) * (perimeter - height) * (perimeter - long));
    // console.log('this is value: ');
    console.log(area);
    // value = p;
    // console.log(value);
    document.getElementById("area").innerHTML = parseInt(area);
}

