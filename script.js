var cbx1 = document.getElementById("exampleCheck1");
var cbx2 = document.getElementById("exampleCheck2");
var cbx3 = document.getElementById("exampleCheck3");
var cbx4 = document.getElementById("exampleCheck4");
var special = "~!@#$%^&*";
var numeric = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passStr = "";
var useChar=[];
var strUseChar="";
var passLen = 8;
var passArr = [];

function checkBox(){
    if(cbx1.checked === true){
        strUseChar += special;
    }
    if(cbx2.checked === true){
      strUseChar += numeric;
    }
    if(cbx3.checked === true){
      strUseChar += lowercase;
    }
    if(cbx4.checked === true){
      strUseChar += uppercase
    }
   useChar = strUseChar.split("");
};

document.getElementById('gen1').onclick = function () {
  useChar = [];
  strUseChar = "";
  passArr = [];
  checkBox();
  console.log(useChar.length);
  passLen = document.getElementById("passwordlength").value;
  for(var i = 0; i < passLen; i++){
      passArr.push(useChar[Math.floor(Math.random() * useChar.length)]);
  }
  document.getElementById('lead').innerHTML = passArr.join('');
};


