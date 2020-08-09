function submit(){
    var score=0;
 const right1= document.getElementById('ques1-a2');
if (right1.checked== true){
 score++
 alert('Question one is right')

}
else{
    alert  ('Question one is wrong')
}
//q 2
const right2= document.getElementById('ques2-a4');
if (right2.checked== true)
{
 score++
 alert('Question Two is right')

}
else{
    alert('Question Two is wrong')
}
const right3= document.getElementById('ques3-a3');
if (right3.checked== true){
 score++
 alert('Question Three is right')

}
else{
  alert('Question Three is wrong')
}
const right4= document.getElementById('ques4-a3');
if (right4.checked== true){
 score++
 alert('Question Four is right')

}
else{
   alert('Question Four is wrong')
}
const right5= document.getElementById('ques5-a2');
if (right5.checked== true){
 score++
 alert('Question five is right')

}
else{
    alert('Question five is wrong')
}
const right6= document.getElementById('ques6-a1');
if (right6.checked== true){
 score++
alert('Question Six is right')

}
else{
    alert('Question six is wrong')
}
document.write("<h1> your Score  is : "+score+"</h1>")
}



