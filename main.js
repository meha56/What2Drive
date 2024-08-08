//var questions = $('.question').length;
//var total = 0;
//var avg = 0;
//var MyQuestions = $('section.choices');
//shuffle(MyQuestions);
//console.log(MyQuestions);

//shuffles arrays and html collections and node lists
//function shuffle(array){
  //  for (let i = array.length-1; i >0; i--){
    //    let j = Math.floor (Math.random() * (i+1) );
    //    [array[i], array[j]] = [array[j], array[i]]
   // } 
//}
//console.log(alert('hello'));
//var div = document.getElementById('space/style');
var div2 = document.getElementById('purpose');
//function SpaceQ(){
   // if(display == 1){
   //     div[0].style.display = 'block';
    //    display == 0;
       // div2.display == 1;
  //  }
//}
//function SpaceQtest(){
  //  console.log(alert('test'));
//};
//var div1 = document.getElementById('#space');
//var display = 1;
//function SpaceQ()
//{
 //   if(display == 1)
 //   {
 //     div1[0].style.display = 'block';
 //     display = 0;    
  //  }
 //   else
 //   {
 //     div1[0].style.display = 'none';
 //     display = 1;    
//    }
//}
 // select the button and the div
var div1 = document.getElementById('space/style');
 function Space(){
    div1.innerHTML = div1.innerHTML.replace
 }
 var div2 = document.getElementById('space');
var div3 = document.getElementById('style');
var question = document.getElementById('firstquestion');
var imagespace = document.getElementById('Spaceimg');
var imagestyle = document.getElementById('Styleimg');
 function replaceSpace(){
        div2.innerText = "For convenience (e.g. to work)";
        div3.innerText = "For long and comfortable drives";
        question.innerText = "What would the purpose of the car be?";
        imagespace.src = "../images/Personality Test/convenience.jpeg"
        imagestyle.src = "../images/Personality Test/Long drive.jpeg"
 };

 function replaceStyle(){
    div2.innerText = "For convenience";
        div3.innerText = "To drive a flashy car for fun";
        question.innerText = "What would the purpose of the car be?";
        imagespace.src = "../images/Personality Test/convenience.jpeg"
        imagestyle.src = "../images/Personality Test/flashy car.jpeg"
 };
var buttons = document.getElementsByClassName('questions');
 function lastquestionStyle(){
    if(div3.innerText == 'To drive a flashy car for fun'){
        buttons[0].style.display = 'block';
        display == 0;
    }
 };