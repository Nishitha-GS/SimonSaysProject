let gameSeq=[];
let userSeq=[];
let colors=["red","blue","yellow","green"];


let h3=document.querySelector("h3");
let highest=0;
let highestH=document.createElement("h3");


let started=false;
let level=0;
document.addEventListener('keypress',function(){
    highestH.remove();
    if(started ==false){
    console.log("Game has Started");
    started=true;

    levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("user");
    setTimeout(function(){
        btn.classList.remove("user");
    },250);
}


function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let randInd=Math.floor(Math.random()*3);
    let randCol=colors[randInd];
    let randBtn=document.querySelector(`.${randCol}`);
    // console.log(randInd);
    // console.log(randCol);
    // console.log(randBtn);
    
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
       }
    }else{
         h3.innerText=`you're score is ${level}\nGame Over! press any key start again.`;
         document.querySelector("body").classList.add("body");
         reset();
    }
}

function btnpress(){
    let btn=this;
    userFlash(btn);
    // console.log(this.classList);

    userCol=btn.getAttribute("id");
    userSeq.push(userCol);
    console.log(userSeq);
    checkAns(userSeq.length -1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener('click',btnpress);
}

function reset(){
    setInterval(function(){
        document.querySelector("body").classList.remove("body");
    },200);

    if(highest < level){
        highest=level;     
     }
    highestH.innerText=`High score is ${highest}`;
    h3.insertAdjacentElement('afterend',highestH);
    started=false;
    level=0;
    gameSeq=[]; 
}