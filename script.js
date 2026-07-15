const quiz = [
{
question:"Aqsa sab se zyada kis ki hai? ❤️",
answers:["Meri 😘","Sab ki 😅","Pata nahi 🤔"],
correct:0
},
{
question:"Birthday Queen ka naam? 👑",
answers:["Aqsa ❤️","Ayesha","Fatima"],
correct:0
},
{
question:"Aaj ka special din? 🎂",
answers:["Birthday 🥳","Monday 😅","Holiday"],
correct:0
},
{
question:"Love kitna hai? 💖",
answers:["Unlimited ♾️","Thora sa","Zero"],
correct:0
}
];

let index = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");

function start(){
document.getElementById("home").classList.add("hide");
document.getElementById("quiz").classList.remove("hide");
loadQuestion();
}

function loadQuestion(){

question.innerHTML = quiz[index].question;
answers.innerHTML="";

quiz[index].answers.forEach((a,i)=>{

let btn=document.createElement("button");

btn.className="answerBtn";

btn.innerHTML=a;

btn.onclick=()=>check(i);

answers.appendChild(btn);

});

}

function check(i){

if(i==quiz[index].correct){

index++;

if(index<quiz.length){

loadQuestion();

}else{

document.getElementById("quiz").classList.add("hide");
document.getElementById("letter").classList.remove("hide");

typeLetter();

}

}else{

alert("Oops 😅 Try Again ❤️");

}

}

const message=`Hᴀᴘᴘʏ Bɪʀᴛʜᴅᴀʏ Aqsa ♥️🎂

Many many happy returns of the day.

May Allah always keep you happy, healthy and smiling.

Meri jaan...

Mere paas alfaaz nahi hain jo main bayan kar sakun ke main tumse kitna pyar karta hoon.

Tum meri zindagi ki sabse khoobsurat khushi ho.

Allah Pak hamesha tumhe khush rakhe.

Tumhari har dua qubool ho.

Love You Unlimited ❤️

Happy Birthday Meri Jaan 🎂🥳💖`;

let i=0;

function typeLetter(){

const box=document.getElementById("typing");

const timer=setInterval(()=>{

box.innerHTML+=message.charAt(i);

box.scrollTop=box.scrollHeight;

i++;

if(i>=message.length){

clearInterval(timer);

}

},35);

}

function showFinal(){

document.getElementById("letter").classList.add("hide");

document.getElementById("final").classList.remove("hide");

confetti();

}

function confetti(){

setInterval(()=>{

let heart=document.createElement("div");

heart.innerHTML=["💖","❤️","💕","🎉","✨","🎂"][Math.floor(Math.random()*6)];

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-50px";
heart.style.fontSize=(20+Math.random()*30)+"px";
heart.style.transition="6s linear";

document.body.appendChild(heart);

setTimeout(()=>{
heart.style.top="110vh";
},100);

setTimeout(()=>{
heart.remove();
},6500);

},300);

}