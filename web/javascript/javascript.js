document.write("Hello there. This is my thousand time learning Js");
var name = "Hy Chhayrith";
// var fullName = document.write(appendChild(name));
console.log(name);
// fullName.append.Child(name);
// // console.log(fullName);
// // document.write(fullName);
// document.write("My name is Hy Chhayrith");
document.write('<br>'+name);
// prompt("Enter your Email address: ");
// prompt("Enter your password: ");
// var fSens = document.getElementById('fSentence').innerHTML;
// // document.write(sens);
// var cancatenate = document.write(fSens + 'Hi Chhayrith');
// var c = document.getElementById("sSentence").innerText;
// console.log(c);
// var c = null;
// c = document.getElementById("fSentence").innerText;
var today = new Date();
var hour = today.getHours();
var greeting = null;
if ( hour > 18 ){
    prompt("Good evening.  Please enter your email for subscription our website.");
}else if(hour > 24 ){
    prompt("Good night!!  Please enter your email for subscription our website.");
}else if( hour > 5 ){
    prompt("Good morning.  Please enter your email for subscription our website.");
}else if( hour > 12 ){ 
    prompt("Good afternoon.  Please enter your email for subscription our website.");
}

var ch = document.getElementById("char").innerHTML;
if ( (ch >= 'a') && (ch <= 'z')){
    ch = ch - 32;
    document.getElementById("Output").innerHTML = ch;
    
}else if((ch >= 'A') && (ch <= 'Z')){
    ch = ch + 32; 
    document.getElementById("Output").innerHTML = ch;
   
}