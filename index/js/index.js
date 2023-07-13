

if(hour<11){
    alert("아침");
}
else if (hour<15){
    alert("점심");
}
else {
    alert("저녁");
}

const person={
    greet: function(){
        return 'hello';
    }
};
person.greet();//'hello';