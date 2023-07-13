console.log("HAPPY");
let date =new Date ();
let hour =date.getHours();

if(hour<11){
    alert("아침");
}
else if (hour<15){
    alert("점심");
}
else {
    alert("저녁");
}