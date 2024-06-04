/*---1---
function tellFortune(name,jobname,location,numchild){

    var det=name+jobname+location+numchild;
    console.log("name is:  "+name+"  jobname:"+jobname+"  location:"+location+" numchild:"+numchild);
}
tellFortune('yazan','programer','jordan','7');
*/
/*
/*---2---
function calculateDogAge(puppyage){
    var age=puppyage*7;
console.log(age);

}
var dogage=2;
calculateDogAge(dogage);
*/
/*---3---
function calculateSupply(age,amountperday){
var totale=(100-age)*365*(amountperday)
console.log(totale);

}
var x=30;
var y=3;
calculateSupply(x,y);
*/
/*---4---
function greate(name){
    
console.log("hello  "+name);

}
var name2="yazan";
greate(name2);
*/
/*---5---
function double(cat) {
    return 2 * cat;
  }
  
  console.log(double(7));
  console.log(double('7'));
  */
 /*---6---
  function double1(x ){
    return 2 * x ;
  }
  
  function double2 (x){
  return 2 * x;
  }
  
  function double3(x)  {
    return 2 * x;
}*/
/*---7---
function cube(calc){
    console.log(calc*calc*calc);
}
var calc2=4;
cube(calc2);
}*/
/*---8---
function multiply(num1,num2){
    console.log(num1*num2);
}
var num11=3;
var num22=4;
multiply(num11,num22);
*/
/*---9---
function canIGetADrivingLicense(age){
    if(age>=20){
        console.log("yes you can");
    }else{
        console.log("please come back after 8 years to get one");
    }
}
var age2=12;
canIGetADrivingLicense(age2);
*/
/*---10---
function sameLength(name1,name2){
if(name1.length===name2.length){
    console.log("true");
}else{
    console.log("false");
}
}
var name11="tree";
var name22="close";
sameLength(name11,name22);
*/
/*---11---
function largerNubmer(num1,num2){
    if(num1>num2){
        console.log(num1);
    }else{
        console.log(num2);
    }
}
var num11=66;
var num22=7;
largerNubmer(num11,num22);
*/
/*---12---
function smallerNubmer(num1,num2,num3){
    if(num1<num2 && num1<num3){
        console.log(num1);

    }if (num2<num1 && num2<num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}
var num11=60;
var num22=7;
var num33=10;
smallerNubmer(num11,num22,num33);
*/
/*---13---
function shorterString(l1,l2,l3,l4,l5){
    if(l1.length<l2.length && l1.length<l3.length && l1.length<l4.length && l1.length<l5.length){
        console.log(l1);
    }if(l2.length<l1.length && l2.length<l3.length && l2.length<l4.length && l2.length<l5.length){
        console.log(l2);
    }if(l3.length<l1.length && l3.length<l2.length && l3.length<l4.length && l3.length<l5.length){
        console.log(l3);
    }if(l4.length<l1.length && l4.length<l2.length && l4.length<l3.length && l4.length<l5.length){
        console.log(l4);
    }else{
        console.log(l5);
    }
}
var l11="cat"
var l22="yellow"
var l33="Ahmad"
var l44="string"
var l55="floatee"
shorterString(l11,l22,l33,l44,l55);
*/
/*---14---
function longerString(l1,l2,l3,l4,l5){
    if(l1.length>l2.length && l1.length>l3.length && l1.length>l4.length && l1.length>l5.length){
        console.log(l1);
    }if(l2.length>l1.length && l2.length>l3.length && l2.length>l4.length && l2.length>l5.length){
        console.log(l2);
    }if(l3.length>l1.length && l3.length>l2.length && l3.length>l4.length && l3.length>l5.length){
        console.log(l3);
    }if(l4.length>l1.length && l4.length>l2.length && l4.length>l3.length && l4.length>l5.length){
        console.log(l4);
    }else{
        console.log(l5);
    }
}
var l11="cat"
var l22="yellow"
var l33="Ahmad"
var l44="string"
var l55="floatee"
longerString(l11,l22,l33,l44,l55);
*/
/*---15---
function isEven(num){
    if(num%2==0){
        console.log("true");
    }else{
        console.log("false");
    }
}
var num1=5;
isEven(num1);
*/
/*---16---
function isOdd(num){
    if(num%2!=0){
        console.log("true");
    }else{
        console.log("false");
    }
}
var num1=8;
isOdd(num1);
*/
/*---17---
function positive(num){
    if(num>0){
        console.log("the number is positive:" +num)
    }else{
        console.log("the number is not positive:" +num)
    }
}
var num11=-74;
positive(num11);
*/
/*---18---
function fullName(firstName,lastName){
console.log(firstName+" "+lastName);
}
var fname="yazan";
var lname="haitham";
fullName(fname,lname);
*/
/*---19---
function average(num1,num2,num3,num4,num5){
    var avg=(num1+num2+num3+num4+num5)/5;
    console.log(avg);
}
var num11=5;
var num22=7;
var num33=9;
var num44=3;
var num55=5;
average(num11,num22,num33,num44,num55);
*/
/*---20---
function randomNumber(random){
    return Math.random() * random;
}
console.log(randomNumber(1));
console.log(Math.random());
*/
/*---21---
function randomNumber(random){
    return Math.random() * random;
}
function randomNumber(random){
    return Math.random() * random;
}
console.log(randomNumber(3));
console.log(randomNumber(100));
console.log(Math.random());
*/
/*---22---
function scoreInUniversty(num){
    if(num<=100 && num>=95){
        console.log("A");
    }if(num<=94 && num>=85){
        console.log("B");}
        if(num<=84 && num>=70){
            console.log("c");}
            if(num<=69 && num>=50){
                console.log("D");}
                else{
                    console.log("D")
                }
}
var num1=90;
scoreInUniversty(num1);
*/
/*---23---
var y=0;
function counter(){
y++;
console.log(y);
}
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();

*/
/*---24---
var y=0;
function counter(){
y++;
console.log(y);
}
counter();
counter();
counter();
counter();
counter();
resetCounter();
counter();
counter();
counter();
function resetCounter(){
    y=0;
}
*/





