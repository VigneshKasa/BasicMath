
 //palindrome
function palindrome(){
    let input1=parseInt(document.getElementById('palindromeinput1').value)
    let temp=input1
    let output=0
    let last=0
    while(input1>0){
        last=input1%10;
        output=output*10+last
        input1=Math.floor(input1/10);
    }
    if(temp==output){
    document.getElementById("palindromeoutput").innerHTML=output+" Palindrome"
    }
    else{
        document.getElementById("palindromeoutput").innerHTML=output+" Not Palindrome"
    }
    palindromecalculate()
}
function palindromecalculate() {
    document.getElementById("palindromeoutput").style.backgroundColor = "aquamarine"
    document.getElementById("palindromeclear").style.visibility = "visible"
}
function palindromeclear() {
    document.getElementById("palindromeinput1").value = '';
    document.getElementById("palindromeoutput").innerHTML = "Calcutlate"
    document.getElementById("palindromeoutput").style.backgroundColor = "rgb(205, 205, 205)"
    document.getElementById("palindromeclear").style.visibility = "hidden"
 }



//fib
function fib()
{
let input1=document.getElementById("fibinput1").value
    let output = 0, b = 1, c, i;
    if( input1 == 0){
    document.getElementById("fiboutput").innerHTML=output
    }
    fibcalculate()
    for(i = 2; i <=input1; i++)
    {
    c = output + b;
    output = b;
    b = c;
    }
    document.getElementById("fiboutput").innerHTML=output
    fibcalculate()
}

function fibcalculate() {
    document.getElementById("fiboutput").style.backgroundColor = "aquamarine"
    document.getElementById("fibclear").style.visibility = "visible"
}
function fibclear() {
    document.getElementById("fibinput1").value = '';
    document.getElementById("fiboutput").innerHTML = "Calcutlate"
    document.getElementById("fiboutput").style.backgroundColor = "rgb(205, 205, 205)"
    document.getElementById("fibclear").style.visibility = "hidden"
 }


 
//prime
function prime(){
    let input1=parseInt(document.getElementById('primeinput1').value)
    let flag=0
    for(let i=2;i<input1;i++){
        if(input1%i==0){
            flag=1
        }
    }
    if(flag==1){
        document.getElementById("primeoutput").innerHTML=input1+" is not Prime"
    }
    else{
    document.getElementById("primeoutput").innerHTML=input1+" is prime"
    }
    primecalculate()
}
function primecalculate() {
    document.getElementById("primeoutput").style.backgroundColor = "aquamarine"
    document.getElementById("primeclear").style.visibility = "visible"
}
function primeclear() {
    document.getElementById("primeinput1").value = '';
    document.getElementById("primeoutput").innerHTML = "Calcutlate"
    document.getElementById("primeoutput").style.backgroundColor = "rgb(205, 205, 205)"
    document.getElementById("primeclear").style.visibility = "hidden"
 }


//reverse
function reverse(){
    let input1=parseInt(document.getElementById('reverseinput1').value)
    let output=0
    let last=0
    while(input1>0){
        last=input1%10;
        output=output*10+last
        input1=Math.floor(input1/10);
    }
    document.getElementById("reverseoutput").innerHTML=output
    reversecalculate()
}
function reversecalculate() {
    document.getElementById("reverseoutput").style.backgroundColor = "aquamarine"
    document.getElementById("reverseclear").style.visibility = "visible"
}
function reverseclear() {
    document.getElementById("reverseinput1").value = '';
    document.getElementById("reverseoutput").innerHTML = "Calcutlate"
    document.getElementById("reverseoutput").style.backgroundColor = "rgb(205, 205, 205)"
    document.getElementById("reverseclear").style.visibility = "hidden"
 }


//digitsum
function digitsum(){
    let input1=parseInt(document.getElementById('digitsuminput1').value)
    let output=0
    let last=0
    while(input1>0){
        output+=input1%10;
        output+=last
        input1=Math.floor(input1/10);
    }
    document.getElementById("digitsumoutput").innerHTML=output
    digitsumcalculate()
}
function digitsumcalculate() {
    document.getElementById("digitsumoutput").style.backgroundColor = "aquamarine"
    document.getElementById("digitsumclear").style.visibility = "visible"
}
function digitsumclear() {
    document.getElementById("digitsuminput1").value = '';
    document.getElementById("digitsumoutput").innerHTML = "Calcutlate"
    document.getElementById("digitsumoutput").style.backgroundColor = "rgb(205, 205, 205)"
    document.getElementById("digitsumclear").style.visibility = "hidden"
 }


//Factorial
function factorial(){
    let input1=parseInt(document.getElementById('factorialinput1').value)
    let output=1
    for(let i=1;i<input1;i++){
        output+=output*i
    }
    document.getElementById("factorialoutput").innerHTML=output
    factorialcalculate()
}
function factorialcalculate() {
    document.getElementById("factorialoutput").style.backgroundColor = "aquamarine"
    document.getElementById("factorialclear").style.visibility = "visible"
}
function factorialclear() {
    document.getElementById("factorialinput1").value = '';
    document.getElementById("factorialoutput").innerHTML = "Calcutlate"
    document.getElementById("factorialoutput").style.backgroundColor = "rgb(205, 205, 205)"
    document.getElementById("factorialclear").style.visibility = "hidden"
 }



//quotient
function quotient(){
    let input1=parseInt(document.getElementById('quotientinput1').value)
    let input2=parseInt(document.getElementById('quotientinput2').value)
    let output=input1/input2
    document.getElementById("quotientoutput").innerHTML=output
    quotientcalculate()
 }
 function quotientcalculate(){
    document.getElementById("quotientoutput").style.backgroundColor="aquamarine"
    document.getElementById("quotientclear").style.visibility="visible"
}
 function quotientclear(){
     document.getElementById("quotientinput1").value='';
     document.getElementById("quotientinput2").value='';
     document.getElementById("quotientoutput").innerHTML="Calcutlate"
     document.getElementById("quotientoutput").style.backgroundColor="rgb(205, 205, 205)"
     document.getElementById("quotientclear").style.visibility="hidden"
 }



 //remainder
 function remainder(){
    let input1=parseInt(document.getElementById('remainderinput1').value)
    let input2=parseInt(document.getElementById('remainderinput2').value)
    let output=Math.floor(input1%input2)
    document.getElementById("remainderoutput").innerHTML=output
    remaindercalculate()
 }
 function remaindercalculate(){
    document.getElementById("remainderoutput").style.backgroundColor="aquamarine"
    document.getElementById("remainderclear").style.visibility="visible"
}
 function remainderclear(){
     document.getElementById("remainderinput1").value='';
     document.getElementById("remainderinput2").value='';
     document.getElementById("remainderoutput").innerHTML="Calcutlate"
     document.getElementById("remainderoutput").style.backgroundColor="rgb(205, 205, 205)"
     document.getElementById("remainderclear").style.visibility="hidden"
 }