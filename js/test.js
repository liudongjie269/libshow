var regnum=/\D*/;
var regchar=/[^a-z]/ig;
var t="238.2".replace(regnum,"");
var s="238.2-".replace(regnum,"")
console.log(t);
console.log(s);
if(t<s){
    console.log(true);
}else{
    console.log(false);
}
